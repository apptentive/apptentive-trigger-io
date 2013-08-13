module("apptentive_module");

var myAPIKey = "940aa47d4c3eb99d07537ddf0866cefff3a37d184427cfe382a98e2fef5d55d2";
asyncTest("Test setting API key", 1, function() {	
	forge.internal.call('apptentive_module.setApiKey',
		{apiKey:myAPIKey}, 
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
	forge.internal.call('apptentive_module.apiKey',
		{}, 
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


var name = "Peter";
asyncTest("Test setting Apptentive Initial User Name", 1, function() {
	forge.internal.call('apptentive_module.setInitialUserName',
		{initialUserName:name}, 
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

asyncTest("Test getting Apptentive Initial User Name", 1, function() {
	forge.internal.call('apptentive_module.initialUserName',
		{}, 
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

var email = "peter@apptentive.com";
asyncTest("Test setting Apptentive Initial User Email Address", 1, function() {
	forge.internal.call('apptentive_module.setInitialUserEmailAddress',
		{initialUserEmailAddress:email}, 
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

asyncTest("Test getting Apptentive Initial User Email Address", 1, function() {
	forge.internal.call('apptentive_module.initialUserEmailAddress',
		{}, 
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

var dataObject = "Seattle";
var dataKey = "city";
asyncTest("Test setting custom data", 1, function() {
	forge.internal.call('apptentive_module.addCustomData',
		{
			object:dataObject,
			key:dataKey
		}, 
		function(success) {
			ok(true, "Set custom data");
			start();
		},
		function(error) {
			ok(false, "Unable to set custom data");
			start();
		}
	);
});

asyncTest("Test removing custom data", 1, function() {
	forge.internal.call('apptentive_module.removeCustomData',
		{
			key:dataKey
		}, 
		function(success) {
			ok(true, "Removed custom data");
			start();
		},
		function(error) {
			ok(false, "Unable to remove custom data");
			start();
		}
	);
});

asyncTest("Test unread message count", 1, function() {
	forge.internal.call('apptentive_module.unreadMessageCount',
		{}, 
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

var myAppID = 343200656;
asyncTest("Test setting app ID", 1, function() {
	forge.internal.call('apptentive_module.setAppID',
		{
			appID:myAppID
		}, 
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
	forge.internal.call('apptentive_module.appID',
		{}, 
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

asyncTest("Test logging significant event", 1, function() {
	forge.internal.call('apptentive_module.logSignificantEvent',
		{}, 
		function(success) {
			ok(true, "logged significant event.");
			start();
		},
		function(error) {
			ok(false, "Unable to log significant event.");
			start();
		}
	);
});

asyncTest("Test getting surveys with no tags", 1, function() {
	forge.internal.call('apptentive_module.hasSurveyAvailableWithNoTags',
		{}, 
		function(success) {
			ok(true, "Has " + success + " surveys with no tags available");
			start();
		},
		function(error) {
			ok(false, "Unable to get surveys with no tags");
			start();
		}
	);
});

asyncTest("Test getting surveys with tags", 1, function() {
	forge.internal.call('apptentive_module.hasSurveyAvailableWithTags',
		{
			tags:["tag", "testTag", "testing"]
		}, 
		function(success) {
			ok(true, "Has " + success + " surveys with tags available");
			start();
		},
		function(error) {
			ok(false, "Unable to get surveys with tags");
			start();
		}
	);
});