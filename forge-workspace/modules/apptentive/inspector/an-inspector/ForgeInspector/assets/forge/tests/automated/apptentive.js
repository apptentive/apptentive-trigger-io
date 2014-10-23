module("apptentive");

if (forge.is.ios()) {
	var myAPIKey = "940aa47d4c3eb99d07537ddf0866cefff3a37d184427cfe382a98e2fef5d55d2";
	asyncTest("Test setting API key", 1, function() {
		forge.apptentive.setApiKey(myAPIKey,
			function(success) {
				ok(true, "Set API Key");
				start();
			},
			function(error) {
				ok(false, "Unable to set API key");
				start();
			}
		);
	});
	
	asyncTest("Test getting API key", 1, function() {
		forge.apptentive.apiKey(
			function(success) {
				deepEqual(success, myAPIKey, "API Key should be set");
				start();
			},
			function(error) {
				ok(false, "Error getting API key.");
				start();
			}
		);
	});
}

var name = "Peter";
asyncTest("Test setting Apptentive Initial User Name", 1, function() {
	forge.apptentive.setInitialUserName(name,
		function(success) {
			ok(true, "Set user name");
			start();
		},
		function(error) {
			ok(false, "Unable to set user name");
			start();
		}
	);
});

if (forge.is.ios()) {
	asyncTest("Test getting Apptentive Initial User Name", 1, function() {
		forge.apptentive.initialUserName(
			function(success) {
				deepEqual(success, name, "User name should be set");
	            start();
			},
			function(error) {
				ok(false, "Error getting user name.");
				start();
			}
		);
	});
}

var email = "peter@apptentive.com";
asyncTest("Test setting Apptentive Initial User Email Address", 1, function() {
	forge.apptentive.setInitialUserEmailAddress(email,
		function(success) {
			ok(true, "Set user email");
			start();
		},
		function(error) {
			ok(false, "Unable to set user email");
			start();
		}
	);
});

if (forge.is.ios()) {
	asyncTest("Test getting Apptentive Initial User Email Address", 1, function() {
		forge.apptentive.initialUserEmailAddress(
			function(success) {
				deepEqual(success, email, "User email address should be set");
	            start();
			},
			function(error) {
				ok(false, "Error getting user email address.");
				start();
			}
		);
	});
}

var customDeviceDataKey = "city";
var customDeviceDataValue = "Seattle";
asyncTest("Test adding custom device data", 1, function() {
	forge.apptentive.addCustomDeviceData(
		function(success) {
			ok(true, "Added custom device data");
			start();
		},
		function(error) {
			ok(false, "Unable to add custom device data");
			start();
		},
		customDeviceDataKey,
		customDeviceDataValue
	);
});

asyncTest("Test removing custom device data", 1, function() {
	forge.apptentive.removeCustomDeviceData(
		function(success) {
			ok(true, "Removed custom device data");
			start();
		},
		function(error) {
			ok(false, "Unable to remove custom device data");
			start();
		},
		customDeviceDataKey
	);
});

var customPersonDataKey = "user-id";
var customPersonDataValue = "123456789";
asyncTest("Test adding custom person data", 1, function() {
	forge.apptentive.addCustomPersonData(
		function(success) {
			ok(true, "Added custom person data");
			start();
		},
		function(error) {
			ok(false, "Unable to add custom person data");
			start();
		},
		customPersonDataKey,
		customPersonDataValue
	);
});

asyncTest("Test removing custom person data", 1, function() {
	forge.apptentive.removeCustomPersonData(
		function(success) {
			ok(true, "Removed custom person data");
			start();
		},
		function(error) {
			ok(false, "Unable to remove custom person data");
			start();
		},
		customPersonDataKey
	);
});

asyncTest("Test unread message count", 1, function() {
	forge.apptentive.getUnreadMessageCount(
		function(success) {
			ok(true, "Unread messages: " + success);
			start();
		},
		function(error) {
			ok(false, "Unable to count unread messages.");
			start();
		}
	);
});

if (forge.is.ios()) {
	var myAppID = 343200656;
	asyncTest("Test setting app ID", 1, function() {
		forge.apptentive.setAppID(myAppID,
			function(success) {
				ok(true, "Set App ID");
				start();
			},
			function(error) {
				ok(false, "Unable to set App ID");
				start();
			}
		);
	});
	
	asyncTest("Test getting app ID", 1, function() {
		forge.apptentive.appID(
			function(success) {
				deepEqual(success, myAppID, "App ID should be set");
				start();
			},
			function(error) {
				ok(false, "Unable to get App ID");
				start();
			}
		);
	});
}

