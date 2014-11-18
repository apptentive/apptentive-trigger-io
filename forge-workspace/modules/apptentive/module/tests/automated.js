module("apptentive");

// This automated test script uses the QUnit API: http://api.qunitjs.com/category/assert/

var initialUserName = "Peter";
asyncTest("Test setting Apptentive Initial User Name", 1, function() {
	forge.apptentive.setInitialUserName(
		function(success) {
			ok(true, "Set user name");
			start();
		},
		function(error) {
			ok(false, "Unable to set user name");
			start();
		},
		initialUserName
	);
});

var initialUserEmail = "peter@apptentive.com";
asyncTest("Test setting Apptentive Initial User Email Address", 1, function() {
	forge.apptentive.setInitialUserEmailAddress(
		function(success) {
			ok(true, "Set user email");
			start();
		},
		function(error) {
			ok(false, "Unable to set user email");
			start();
		},
		initialUserEmail
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

if (forge.is.android()) {
	asyncTest("Test showMessageCenter() with bad custom data.", 1, function() {
		forge.apptentive.showMessageCenter(
			function(success) {
				ok(false, "Showed Message Center.");
				start();
			},
			function(error) {
				ok(true, "Did not show Message Center.");
				start();
			},
			{
				"number": 12345
			}
		);
	});
	
	asyncTest("Test showMessageCenter() with bad custom data.", 1, function() {
		forge.apptentive.showMessageCenter(
			function(success) {
				ok(false, "Showed Message Center.");
				start();
			},
			function(error) {
				ok(true, "Did not show Message Center.");
				start();
			},
			{
				"object": {
					"foo": "bar"
				}
			}
		);
	});
}

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

var savedTimeExtendedData;
asyncTest("Test Making Time Extended Data.", 2, function() {
	var time = new Date().getTime();

	function checkResults(data) {
		forge.logging.info("Checking: " + JSON.stringify(data));
		forge.logging.info("Comparing " + data.time.timestamp + " to " + time/1000);
		ok(data.time.timestamp == time/1000, "Check time timestamp");		
	}

	function makeExtendedDataTime() {
		forge.apptentive.makeExtendedDataTime(
			function(data) {
				ok(true, "Making TimeExtendedData");
				forge.logging.info("TimeExtendedData: " + JSON.stringify(data));
				savedTimeExtendedData = data;
				checkResults(data);
				start();
			},
			function(error) {
				ok(false, "Making TimeExtendedData");
				forge.logging.error(JSON.stringify(error));
				start();
			},
			time
		);
	}

	makeExtendedDataTime();
});

var savedLocationExtendedData;
asyncTest("Test Making Location Extended Data.", 3, function() {
	var long = -122.34569190000002;
	var lat = 47.6288591;

	function checkResults(data) {
		forge.logging.info("Checking: " + JSON.stringify(data));
		ok(data.location.coordinates[0] == long, "Check location longitude");		
		ok(data.location.coordinates[1] == lat, "Check location latitude");		
	}

	function makeExtendedDataLocation() {
		forge.apptentive.makeExtendedDataLocation(
			function(data) {
				ok(true, "Making LocationExtendedData");
				forge.logging.info("LocationExtendedData: " + JSON.stringify(data));
				savedLocationExtendedData = data;
				checkResults(data);
				start();
			},
			function(error) {
				ok(false, "Making LocationExtendedData");
				forge.logging.error(JSON.stringify(error));
				start();
			},
			long,
			lat
		);
	}

	makeExtendedDataLocation();
});

var savedCommerceExtendedData;
asyncTest("Test Making Commerce Extended Data with two items.", 21, function() {
	var item1;
	var item2; 

	function checkResults(data) {
		forge.logging.info("Checking: "  + JSON.stringify(data));

		ok(data.commerce.id == "commerce_id", "Check commerce id");
		ok(data.commerce.affiliation == 1111111111, "Check commerce affiliation");
		ok(data.commerce.revenue == 99.99, "Check commerce revenue");
		ok(data.commerce.shipping == 5, "Check commerce shipping");
		ok(data.commerce.tax == 4.38, "Check commerce tax");
		ok(data.commerce.currency == "USD", "Check commerce currency");

		ok(data.commerce.items[0].id == 11111111, "Check commerce items 0 id");
		ok(data.commerce.items[0].name == "Item One", "Check commerce items 0 name");
		ok(data.commerce.items[0].category == "Category 1", "Check commerce items 0 category");
		ok(data.commerce.items[0].price == 11.11, "Check commerce items 0 price");
		ok(data.commerce.items[0].quantity == 1.00, "Check commerce items 0 quantity");
		ok(data.commerce.items[0].currency == "USD", "Check commerce items 0 currency");

		ok(data.commerce.items[1].id == 22222222, "Check commerce items 1 id");
		ok(data.commerce.items[1].name == "Item Two", "Check commerce items 1 name");
		ok(data.commerce.items[1].category == "Category 2", "Check commerce items 1 category");
		ok(data.commerce.items[1].price == 22.22, "Check commerce items 1 price");
		ok(data.commerce.items[1].quantity == 2.00, "Check commerce items 1 quantity");
		ok(data.commerce.items[1].currency == "USD", "Check commerce items 1 currency");
	}

	function makeExtendedDataCommerce() {
		forge.apptentive.makeExtendedDataCommerce(
			function(data) {
				ok(true, "Made CommerceExtendedData");
				checkResults(data);
				savedCommerceExtendedData = data;
				start();
			},
			function(error) {
				ok(false, "Making CommerceExtendedData");
				forge.logging.error(JSON.stringify(error));
				start();
			},
		    "commerce_id",
		    1111111111,
		    99.99,
		    5,
		    4.38,
		    "USD",
		    [item1, item2]
		);
	}

	function makeExtendedDataCommerceItem2() {
		forge.apptentive.makeExtendedDataCommerceItem(
			function(data) {
				item2 = data;
				ok(true, "Made CommerceItemExtendedData");
				forge.logging.info("CommerceItemExtendedData: " + JSON.stringify(data));
				makeExtendedDataCommerce();
			},
			function(error) {
				ok(false, "Making CommerceItemExtendedData");
				forge.logging.error(JSON.stringify(error));
				start();
			},
	        22222222,
	        "Item Two",
	        "Category 2",
	        22.22,
	        2.00,
	        "USD"
		);
	}

	function makeExtendedDataCommerceItem1() {
		forge.apptentive.makeExtendedDataCommerceItem(
			function(data) {
				item1 = data;
				ok(true, "Made CommerceItemExtendedData");
				forge.logging.info("CommerceItemExtendedData: " + JSON.stringify(data));
				makeExtendedDataCommerceItem2();
			},
			function(error) {
				ok(false, "Making CommerceItemExtendedData");
				forge.logging.error(JSON.stringify(error));
				start();
			},
	        11111111,
	        "Item One",
	        "Category 1",
	        11.11,
	        1.00,
	        "USD"
		);
	}
	
	makeExtendedDataCommerceItem1();
});

asyncTest("Test engage(\"event_1\").", 1, function() {
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

asyncTest("Test engage(\"event_2\") with custom data.", 1, function() {
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

asyncTest("Test Engage with ExtendedData.", 1, function() {
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
			savedCommerceExtendedData,
			savedTimeExtendedData,
			savedLocationExtendedData
		]
	);
});

asyncTest("Test Engage with CustomData and ExtendedData.", 1, function() {
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
			"foo": "bar"
		},
		[
			savedCommerceExtendedData,
			savedTimeExtendedData,
			savedLocationExtendedData
		]
	);
});

