from xml.etree import ElementTree
import glob
import json
import os
import shutil
import subprocess
import uuid
import plistlib
import biplist
import zipfile

from forge.lib import cd
from trigger import forge_tool
import utils

# Needed to prevent elementtree screwing with namespace names
ElementTree.register_namespace('android', 'http://schemas.android.com/apk/res/android')
ElementTree.register_namespace('tools', 'http://schemas.android.com/tools')

def include_dependencies(**kw):
	for plugin, properties in kw.items():
		# Download dependency
		cache_dir = os.path.abspath(os.path.join('..', '..', '.trigger', 'cache'))
		if not os.path.exists(os.path.join(cache_dir, properties['hash'])):
			forge_tool.singleton.remote._get_file('%splugin/download_hash/%s/' % (forge_tool.singleton.remote.server, properties['hash']), os.path.join(cache_dir, properties['hash']+".zip"))
			with zipfile.ZipFile(os.path.join(cache_dir, properties['hash']+".zip")) as plugin_zip:
				plugin_zip.extractall(os.path.join(cache_dir, properties['hash']))
			os.unlink(os.path.join(cache_dir, properties['hash']+".zip"))
		# Include in inspector
		if os.path.split(os.getcwd())[1] == "an-inspector": # XXX: Hacky, do something better?
			apply_plugin_to_android_project(os.path.join(cache_dir, properties['hash']), os.getcwd())
		elif os.path.split(os.getcwd())[1] == "ios-inspector": # XXX: Hacky, do something better?
			apply_plugin_to_ios_project(os.path.join(cache_dir, properties['hash']), os.getcwd())

def _call_with_params(method, params):
	if isinstance(params, dict):
		return method(**params)
	elif isinstance(params, tuple):
		return method(*params)
	else:
		return method(params)

def apply_plugin_to_ios_project(plugin_path, project_path, skip_a=False):
	"""Take the plugin in a specific folder and apply it to an xcode ios project in another folder"""
	with open(os.path.join(plugin_path, 'manifest.json')) as manifest_file:
		manifest = json.load(manifest_file)

	# Enable module
	add_to_json_array(
		filename=os.path.join(project_path, 'ForgeInspector', 'assets', 'app_config.json'),
		key='modules',
		value=manifest['name']
	)

	# Add plugin a if we want it
	if not skip_a:
		plugin_a = os.path.join(plugin_path, 'ios', 'plugin.a')
		if os.path.isfile(plugin_a):
			# Copy to libs
			shutil.copy2(plugin_a, os.path.join(project_path, manifest['name']+'.a'))
			
			# Add to xcode build
			xcode_project = XcodeProject(os.path.join(project_path, 'ForgeInspector.xcodeproj', 'project.pbxproj'))
			xcode_project.add_framework(manifest['name']+'.a', "<group>")
			xcode_project.save()

	# bundles
	plugin_bundles = os.path.join(plugin_path, 'ios', 'bundles')
	if os.path.isdir(plugin_bundles):
		xcode_project = XcodeProject(os.path.join(project_path, 'ForgeInspector.xcodeproj', 'project.pbxproj'))
		for bundle in os.listdir(plugin_bundles):
			if bundle.endswith(".bundle"):
				shutil.copytree(os.path.join(plugin_bundles, bundle), os.path.join(project_path, bundle))
				xcode_project.add_resource(bundle)
			
		xcode_project.save()

	# build steps
	plugin_steps_path = os.path.join(plugin_path, 'ios', 'build_steps.json')
	if os.path.isfile(plugin_steps_path):
		with open(plugin_steps_path, 'r') as plugin_steps_file:
			plugin_steps = json.load(plugin_steps_file)
			with cd(project_path):
				for step in plugin_steps:
					if "do" in step:
						for task in step['do']:
							task_func = globals()[task]
							_call_with_params(task_func, step["do"][task])

def apply_plugin_to_android_project(plugin_path, project_path, skip_jar=False):
	"""Take the plugin in a specific folder and apply it to an eclipse android project in another folder"""
	with open(os.path.join(plugin_path, 'manifest.json')) as manifest_file:
		manifest = json.load(manifest_file)

	# Enable module
	add_to_json_array(
		filename=os.path.join(project_path, 'assets', 'app_config.json'),
		key='modules',
		value=manifest['name']
	)

	# Add plugin jar if we want it
	if not skip_jar:
		plugin_jar = os.path.join(plugin_path, 'android', 'plugin.jar')
		if os.path.exists(plugin_jar):
			shutil.copy2(plugin_jar, os.path.join(project_path, 'libs', manifest['name']+'.jar'))

	# res
	plugin_res = os.path.join(plugin_path, 'android', 'res')
	if os.path.isdir(plugin_res):
		for dirpath, _, filenames in os.walk(plugin_res):
			if not os.path.exists(os.path.join(project_path, 'res', dirpath[len(plugin_res)+1:])):
				os.makedirs(os.path.join(project_path, 'res', dirpath[len(plugin_res)+1:]))
			for filename in filenames:
				if os.path.exists(os.path.join(project_path, 'res', dirpath[len(plugin_res)+1:], filename)):
					raise Exception("File '%s' already exists, plugin resources may only add files, not replace them." % os.path.join('res', dirpath[len(plugin_res)+1:], filename))
				shutil.copy2(os.path.join(dirpath, filename), os.path.join(project_path, 'res', dirpath[len(plugin_res)+1:], filename))

	# libs
	plugin_res = os.path.join(plugin_path, 'android', 'libs')
	if os.path.isdir(plugin_res):
		for dirpath, _, filenames in os.walk(plugin_res):
			if not os.path.exists(os.path.join(project_path, 'libs', dirpath[len(plugin_res)+1:])):
				os.makedirs(os.path.join(project_path, 'libs', dirpath[len(plugin_res)+1:]))
			for filename in filenames:
				shutil.copy2(os.path.join(dirpath, filename), os.path.join(project_path, 'libs', dirpath[len(plugin_res)+1:], filename))

	# build steps
	if os.path.isfile(os.path.join(plugin_path, 'android', 'build_steps.json')):
		with open(os.path.join(plugin_path, 'android', 'build_steps.json')) as build_steps_file:
			plugin_build_steps = json.load(build_steps_file)
			with cd(project_path):
				for step in plugin_build_steps:
					if "do" in step:
						for task in step["do"]:
							task_func = globals()[task]
							_call_with_params(task_func, step["do"][task])

class XcodeProject:
	def __init__(self, path):
		# Make sure the file is converted to json (could be xml or openstep)
		pbxproj_json = subprocess.check_output(['plutil', '-convert', 'json', '-o', '-', path])
		self.path = path
		self.pbxproj = json.loads(pbxproj_json)

	def add_file(self, path, sourceTree, settings=None):
		"""Add a file to the xcode project for ios, return build ref for file"""
		
		file_uuid = str(uuid.uuid4())
		
		# Add file ref (A reference to an actual file on the disk)
		self.pbxproj['objects'][file_uuid+'file'] = {
			"isa": "PBXFileReference",
			"path": path,
			"sourceTree": sourceTree
		}
		# Add build ref (A reference to a file ref to be used during builds)
		self.pbxproj['objects'][file_uuid+'build'] = {
			"isa": "PBXBuildFile",
			"fileRef": file_uuid+"file"
		}
		# Add the file to the structure of the project (so it actually shows up in xcode)
		for key in self.pbxproj['objects']:
			if isinstance(self.pbxproj['objects'][key], dict) and self.pbxproj['objects'][key]['isa'] == 'PBXGroup' and "name" in self.pbxproj['objects'][key] and self.pbxproj['objects'][key]['name'] == 'Frameworks':
				self.pbxproj['objects'][key]['children'].append(file_uuid+'file')
				break

		if settings:
			self.pbxproj['objects'][file_uuid+'build']['settings'] = settings

		return file_uuid+'build'

	def add_framework(self, path, sourceTree):
		"""Add a framework to the xcode project for ios"""
		
		ref = self.add_file(path, sourceTree, {'ATTRIBUTES': ('Weak',)})
	
		# Add build ref to list of linked frameworks
		for key in self.pbxproj['objects']:
			if isinstance(self.pbxproj['objects'][key], dict) and self.pbxproj['objects'][key]['isa'] == 'PBXFrameworksBuildPhase':
				self.pbxproj['objects'][key]['files'].append(ref)
				break
	
	def add_resource(self, path):
		"""Add a resource to the xcode project for ios"""

		ref = self.add_file(path, "<group>")

		# Add build ref to list of resources
		for key in self.pbxproj['objects']:
			if isinstance(self.pbxproj['objects'][key], dict) and self.pbxproj['objects'][key]['isa'] == 'PBXResourcesBuildPhase':
				self.pbxproj['objects'][key]['files'].append(ref)
				break

	def save(self):
		# Save the output result (as xml)
		plistlib.writePlist(self.pbxproj, self.path)

def add_element_to_xml(file, tag, attrib={}, text="", to=None, unless=None):
	'''add new element to an XML file

	:param file: filename or file object
	:param tag: name of the new element's tag
	:param text: content of the new element
	:param attrib: dictionary containing the new element's attributes
	:param to: sub element tag name or path we will append to
	:param unless: don't add anything if this tag name or path already exists
	'''
	xml = ElementTree.ElementTree()
	xml.parse(file)
	if to is None:
		el = xml.getroot()
	else:
		el = xml.find(to, dict((v,k) for k,v in ElementTree._namespace_map.items()))
	if not unless or xml.find(unless, dict((v,k) for k,v in ElementTree._namespace_map.items())) is None:
		new_el = ElementTree.Element(tag, attrib)
		new_el.text = text
		el.insert(0, new_el)
		xml.write(file)

def add_to_json_array(filename, key, value):
	# XXX Template support disabled here
	#if isinstance(value, str):
	#	value = utils.render_string(build.config, value)
	
	found_files = glob.glob(filename)
	for found_file in found_files:
		file_json = {}
		with open(found_file, "r") as opened_file:
			file_json = json.load(opened_file)
			# TODO: . separated keys?
			file_json[key].append(value)
		with open(found_file, "w") as opened_file:
			json.dump(file_json, opened_file, indent=2, sort_keys=True)

def android_add_permission(permission):
	add_element_to_xml(
		file='AndroidManifest.xml',
		tag="uses-permission",
		attrib={"android:name": permission},
		unless="uses-permision/[@android:name='%s']" % permission
	)

def android_add_feature(feature, required="false"):
	if required == "true":
		unless = "uses-feature/[@android:name='%s']/[@android:required='true']" % feature
	else:
		unless = "uses-feature/[@android:name='%s']" % feature

	add_element_to_xml(
		file='AndroidManifest.xml',
		tag="uses-feature",
		attrib={"android:name": feature, "android:required": required},
		unless=unless)

def android_add_activity(activity_name, attributes={}):
	attributes['android:name'] = activity_name
	add_element_to_xml(
		file='AndroidManifest.xml',
		tag="activity",
		attrib=attributes,
		to="application")

def android_add_service(service_name, attributes={}):
	attributes['android:name'] = service_name
	add_element_to_xml(
		file='AndroidManifest.xml',
		tag="service",
		attrib=attributes,
		to="application")

def android_add_receiver(receiver_name, attributes={}, intent_filters=[]):
	attributes['android:name'] = receiver_name
	add_element_to_xml(
		file='AndroidManifest.xml',
		tag="receiver",
		attrib=attributes,
		to="application")

	for intent in intent_filters:
		add_element_to_xml(
			file='AndroidManifest.xml',
			tag=intent[0],
			attrib={"android:name": intent[1]},
			to="application/receiver/[@android:name='%s']" % receiver_name)

def ios_add_url_handler(scheme, filename='ForgeInspector/ForgeInspector-Info.plist'):
	# XXX Template support disabled here
	#if isinstance(scheme, str):
	#	scheme = utils.render_string(build.config, scheme)
	
	found_files = glob.glob(filename)
	for found_file in found_files:
		plist = biplist.readPlist(found_file)
		if "CFBundleURLTypes" in plist:
			plist["CFBundleURLTypes"][0]["CFBundleURLSchemes"].append(scheme)
		else:
			plist["CFBundleURLTypes"] = [{"CFBundleURLSchemes": [scheme]}]
		biplist.writePlist(plist, found_file)

def set_in_biplist(filename, key, value):
	#if isinstance(value, str):
	#	value = utils.render_string(build.config, value)
	
	found_files = glob.glob(filename)
	for found_file in found_files:
		plist = biplist.readPlist(found_file)
		plist = utils.transform(plist, key, lambda _: value, allow_set=True)
		biplist.writePlist(plist, found_file)

def set_in_info_plist(key, value):
	set_in_biplist("ForgeInspector/ForgeInspector-Info.plist", key, value)

def add_ios_system_framework(framework):
	xcode_project = XcodeProject('ForgeInspector.xcodeproj/project.pbxproj')
	if framework.endswith('.framework'):
		xcode_project.add_framework("System/Library/Frameworks/"+framework, "SDKROOT")
	elif framework.endswith('.dylib'):
		xcode_project.add_framework("user/lib/"+framework, "SDKROOT")
	else:
		raise Exception("Unsupported iOS framework type for '%s', must end in .framework or .dylib." % framework)
	xcode_project.save()