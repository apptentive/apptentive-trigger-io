module("apptentive_module");

asyncTest("Test Apptentive API key", 2, function() {
	var myAPIKey = "940aa47d4c3eb99d07537ddf0866cefff3a37d184427cfe382a98e2fef5d55d2";
	
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

asyncTest("Test Apptentive Initial User Name", 2, function() {
	var name = "Peter";
	
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