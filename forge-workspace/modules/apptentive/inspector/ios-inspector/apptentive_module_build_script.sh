#! /usr/bin/env python

import os
import json
import biplist
import shutil

# Get module version number from module manifest
manifest_path = "../../module/manifest.json"
manifest_file = open(manifest_path)
manifest = json.load(manifest_file)
manifest_file.close();
module_version = manifest["version"]

# Modify distribution Info.plist
bundle_plist_path = "build/apptentive.bundle/ApptentiveResources.bundle/Info.plist"
plist = biplist.readPlist(bundle_plist_path)
plist_distribution_key = "ATInfoDistributionKey"
plist[plist_distribution_key] = "Trigger.io"
plist_distribution_version_key = "ATInfoDistributionVersionKey"
plist[plist_distribution_version_key] = module_version
biplist.writePlist(plist, bundle_plist_path)

# Generate build_steps.json file.
build_steps_json = [
    {'do': { "add_ios_system_framework" : {"framework":"CoreData.framework"}}},
    {'do': { "add_ios_system_framework" : {"framework":"CoreText.framework"}}},
    {'do': { "add_ios_system_framework" : {"framework":"CoreGraphics.framework"}}},
    {'do': { "add_ios_system_framework" : {"framework":"CoreTelephony.framework"}}},
    {'do': { "add_ios_system_framework" : {"framework":"Foundation.framework"}}},
    {'do': { "add_ios_system_framework" : {"framework":"QuartzCore.framework"}}},
    {'do': { "add_ios_system_framework" : {"framework":"StoreKit.framework"}}},
    {'do': { "add_ios_system_framework" : {"framework":"SystemConfiguration.framework"}}},
    {'do': { "add_ios_system_framework" : {"framework":"UIKit.framework"}}}
]

with open("build_steps.json", "w") as f:
    json.dump(build_steps_json, f, indent=4)

# Move to final directory structure
shutil.move("build_steps.json", "build/")
shutil.move("build/apptentive.bundle", "build/bundles/apptentive.bundle")

# Copy to module directory for upload to Trigger.io
if os.path.exists("../../module/ios/"):
    shutil.rmtree("../../module/ios/")
shutil.copytree("build/", "../../module/ios/");
