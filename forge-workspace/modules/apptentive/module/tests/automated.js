module("apptentive");

// This automated test script uses the QUnit API: http://api.qunitjs.com/category/assert/
 
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

asyncTest("Test engage(\"aaa\"). Should return false.", 1, function() {
	forge.apptentive.engage(
		function(success) {
			forge.logging.info("engage() returned: " + (typeof success) + " -> " + success);
			equal(success, false, "Showed Interaction? " + success);
			start();
		},
		function(error) {
			ok(false, "Error: " + error);
			start();
		},
		"aaa",
		{"foo": "bar"},
		[]
	);
});

asyncTest("Test engage(\"event_1\"). Should return true.", 1, function() {
	forge.apptentive.engage(
		function(success) {
			forge.logging.info("engage() returned: " + (typeof success) + " -> " + success);
			equal(success, true, "Showed Interaction? " + success);
			start();
		},
		function(error) {
			ok(false, "Error: " + error);
			start();
		},
		"event_1",
		{"foo": "bar"},
		[]
	);
});
