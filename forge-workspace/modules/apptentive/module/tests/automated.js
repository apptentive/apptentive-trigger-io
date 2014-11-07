module("apptentive");

// This automated test script uses the QUnit API: http://api.qunitjs.com/category/assert/
/*
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
		"aaa"
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
		"event_1"
	);
});

asyncTest("Test engage(\"event_2\") with custom data. Should return true.", 1, function() {
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
		"event_2",
		{
			"foo": "bar"
		}
	);
});

asyncTest("Test engage(\"event_3\") with custom data and extendedData. Should return true.", 1, function() {
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
		"event_3",
		{
			"string": "bar",
			"number": 1234567890
		},
		[
			{
				"time": {
					"version": 1,
					"timestamp": 1.406251926165E9
				}
			},
			{
				"location": {
					"version": 1,
					"coordinates": [
						-122.34569190000002,
						47.6288591
					]
				}
			},
			{
				"commerce": {
					"version": 1,
					"id": "commerce_id",
					"affiliation": 1111111111,
					"revenue": 100,
					"shipping": 5,
					"tax": 4.38,
					"currency": "USD",
					"items": [
						{
							"id": 22222222,
							"name": "Item Name",
							"category": "Category",
							"price": 20,
							"quantity": 5,
							"currency": "USD"
						}
					]
				}
			}
		]
	);
});

asyncTest("Test engage(\"event_3\") with empty custom data and complete extendedData. Should return true.", 1, function() {
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
		"event_3",
		{},
		[
			{
				"time": {
					"version": 1,
					"timestamp": 1.406251926165E9
				}
			},
			{
				"location": {
					"version": 1,
					"coordinates": [
						-122.34569190000002,
						47.6288591
					]
				}
			},
			{
				"commerce": {
					"version": 1,
					"id": "commerce_id",
					"affiliation": 1111111111,
					"revenue": 100,
					"shipping": 5,
					"tax": 4.38,
					"currency": "USD",
					"items": [
						{
							"id": 22222222,
							"name": "Item Name",
							"category": "Category",
							"price": 20,
							"quantity": 5,
							"currency": "USD"
						}
					]
				}
			}
		]
	);
});

asyncTest("Test makeExtendedDataTime().", 1, function() {
	forge.apptentive.makeExtendedDataTime(
		function(success) {
			ok(true, "Did it worked?");
			start();
		},
		function(error) {
			ok(false, "Error: " + error);
			start();
		},
		new Date().getTime()
	);
});
*/

asyncTest("Test engageWithExtendedDataEndToEnd().", 1, function() {
	var timeExtendedData;
	forge.apptentive.makeExtendedDataTime(
		function(success) {
			timeExtendedData = success;
			forge.logging.info("TimeExtendedData: " + timeExtendedData);

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
				{},
				[timeExtendedData]
			);
		},
		function(error) {
			ok(false, "Error: " + error);
			start();
		},
		new Date().getTime()
	);
});

