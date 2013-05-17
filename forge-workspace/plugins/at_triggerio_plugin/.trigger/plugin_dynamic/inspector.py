import time
import json
import os
import shutil
import zipfile
import hashlib
import sys
from datetime import datetime

from trigger import forge_tool
import build_steps

def _hash_folder(hash, path, ignore=[]):
	'''Update a hash with all of the file/dirnames in a folder as well as all the file contents that aren't in ignore'''
	for dirpath, dirnames, filenames in os.walk(path):
		for filename in filenames:
			full_path = os.path.join(dirpath, filename)
			relative_path = full_path[len(path)+1:]
			if not relative_path in ignore:
				hash.update(relative_path)
				with open(full_path, 'rb') as cur_file:
					hash.update(cur_file.read())
		for dirname in dirnames:
			full_path = os.path.join(dirpath, dirname)
			relative_path = full_path[len(path)+1:]
			if not relative_path in ignore:
				hash.update(relative_path)

def _update_target(target, cookies):
	"""Update the inspector app to a clean one for the current platform version

	returns the location the previous inspector app was moved to"""

	plugin_dynamic_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
	plugin_path = os.path.abspath(os.path.join(plugin_dynamic_path, '..'))

	if not os.path.exists(os.path.join(plugin_dynamic_path, 'cache')):
		os.makedirs(os.path.join(plugin_dynamic_path, 'cache'))

	# If we don't have an inspector build... get it
	if not os.path.exists(os.path.join(plugin_dynamic_path, 'cache', '%s.zip' % target)):
		with open(os.path.join(plugin_dynamic_path, 'platform_version.txt')) as platform_version_file:
			platform_version = platform_version_file.read()

		data = {}

		data['config'] = json.dumps({
			"platform_version": platform_version,
			"uuid": "0",
			"config_version": "2",
			"name": "-",
			"author": "-",
			"version": "0.1",
			"description": "-",
			"modules": {},
		})
		data['target'] = target

		build = {
			"state": "pending"
		}
		while build['state'] in ('pending', 'working'):
			build = forge_tool.singleton.remote._api_post('plugin/inspector_build/', data=data, cookies=cookies)
			data['id'] = build['id']

			if build['state'] in ('pending', 'working'):
				time.sleep(3)

		if build['state'] != 'complete':
			raise Exception('build failed: %s' % build['log_output'])

		forge_tool.singleton.remote._get_file(build['file_output'], os.path.join(plugin_dynamic_path, 'cache', '%s.zip' % target))

	# If we already have an inspector move it out of the way
	moved_to = None
	if os.path.exists(os.path.join(plugin_path, 'inspector', target)):
		moved_to = os.path.join(plugin_path, 'inspector', '%s.%s' % (target, datetime.now().isoformat().replace(":", "-") ))
		shutil.move(os.path.join(plugin_path, 'inspector', target), moved_to)

	# Extract new inspector
	with zipfile.ZipFile(os.path.join(plugin_dynamic_path, 'cache', '%s.zip' % target)) as inspector_zip:
		inspector_zip.extractall(os.path.join(plugin_path, 'inspector'))

	return moved_to

def hash_android():
	'''Get the current hash for the Android plugin files'''
	hash = hashlib.sha1()
	_hash_folder(hash, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'plugin', 'android')), ['plugin.jar'])
	with open(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'platform_version.txt'))) as platform_version_file:
		hash.update(platform_version_file.read())
	return hash.hexdigest()

def check_android_hash(**kw):
	current_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'inspector', 'an-inspector', '.hash'))
	if not os.path.exists(current_path):
		return {'message': 'Android inspector not found.', 'type': 'error'}
	with open(current_path, 'r') as hash_file:
		if hash_android() == hash_file.read():
			return {'message': 'Android inspector up to date.', 'type': 'good'}
		else:
			return {'message': 'Android inspector out of date.', 'type': 'warning'}

def update_android(cookies, **kw):
	previous_path = _update_target('an-inspector', cookies=cookies)
	current_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'inspector', 'an-inspector'))

	# If we're updating copy the plugin source from the previous inspector
	if previous_path is not None:
		shutil.rmtree(os.path.join(current_path, 'ForgeModule', 'src'))
		if os.path.exists(os.path.join(previous_path, 'src')):
			shutil.copytree(os.path.join(previous_path, 'src'), os.path.join(current_path, 'ForgeModule', 'src'))
		else:
			shutil.copytree(os.path.join(previous_path, 'ForgeModule', 'src'), os.path.join(current_path, 'ForgeModule', 'src'))
		shutil.rmtree(os.path.join(current_path, 'ForgeInspector', 'assets', 'src'))
		if os.path.exists(os.path.join(previous_path, 'assets', 'src')):
			shutil.copytree(os.path.join(previous_path, 'assets', 'src'), os.path.join(current_path, 'ForgeInspector', 'assets', 'src'))
		else:
			shutil.copytree(os.path.join(previous_path, 'ForgeInspector', 'assets', 'src'), os.path.join(current_path, 'ForgeInspector', 'assets', 'src'))

	# Update inspector with plugin specific build details
	try:
		build_steps.apply_plugin_to_android_project(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'plugin')), os.path.join(current_path, 'ForgeInspector'), skip_jar=True)
	except Exception as e:
		shutil.rmtree(current_path)
		shutil.move(previous_path, current_path)
		raise Exception("Applying build steps failed, check build steps and re-update inspector: %s" % e)

	# Prefix eclipse project names with plugin name
	with open(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'plugin', 'manifest.json'))) as manifest_file:
		manifest = json.load(manifest_file)
		plugin_name = manifest['name']
	for project in ('ForgeCore', 'ForgeInspector', 'ForgeModule'):
		with open(os.path.join(current_path, project, '.project')) as project_file:
			project_conf = project_file.read()
		project_conf = project_conf.replace('<name>Forge', '<name>%s_Forge' % plugin_name)
		with open(os.path.join(current_path, project, '.project'), 'w') as project_file:
			project_file.write(project_conf)

	# Create hash for inspector
	with open(os.path.join(current_path, '.hash'), 'w') as hash_file:
		hash_file.write(hash_android())

def hash_ios():
	'''Get the current hash for the Android plugin files'''
	hash = hashlib.sha1()
	_hash_folder(hash, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'plugin', 'ios')), ['plugin.a'])
	with open(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'platform_version.txt'))) as platform_version_file:
		hash.update(platform_version_file.read())
	return hash.hexdigest()

def check_ios_hash(**kw):
	current_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'inspector', 'ios-inspector', '.hash'))
	if not os.path.exists(current_path):
		return {'message': 'iOS inspector not found.', 'type': 'error'}
	with open(current_path, 'r') as hash_file:
		if hash_ios() == hash_file.read():
			return {'message': 'iOS inspector up to date.', 'type': 'good'}
		else:
			return {'message': 'iOS inspector out of date.', 'type': 'warning'}

def update_ios(cookies, **kw):
	if not sys.platform.startswith('darwin'):
		raise Exception("iOS inspector can only be used on OS X.")

	previous_path = _update_target('ios-inspector', cookies=cookies)
	current_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'inspector', 'ios-inspector'))

	# If we're updating copy the plugin source from the previous inspector
	if previous_path is not None:
		shutil.rmtree(os.path.join(current_path, 'ForgeModule'))
		shutil.copytree(os.path.join(previous_path, 'ForgeModule'), os.path.join(current_path, 'ForgeModule'))
		shutil.rmtree(os.path.join(current_path, 'ForgeInspector', 'assets', 'src'))
		shutil.copytree(os.path.join(previous_path, 'ForgeInspector', 'assets', 'src'), os.path.join(current_path, 'ForgeInspector', 'assets', 'src'))

	# Update inspector with plugin specific build details
	try:
		build_steps.apply_plugin_to_ios_project(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'plugin')), current_path, skip_a=True)
	except Exception as e:
		shutil.rmtree(current_path)
		shutil.move(previous_path, current_path)
		raise Exception("Applying build steps failed, check build steps and re-update inspector: %s" % e)

	# Create hash for inspector
	with open(os.path.join(current_path, '.hash'), 'w') as hash_file:
		hash_file.write(hash_ios())