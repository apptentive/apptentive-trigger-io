module("apptentive_module");

asyncTest("Attempt to show Message Center", 1, function() {
	forge.internal.call('apptentive_module.presentMessageCenter',
		{}, 
		function(success) {
			askQuestion("Did you see the Apptentive Message Center?", {
				Yes: function () {
					ok(true, "User claims Message Center success");
					start();
				},
				No: function () {
					ok(false, "User claims Message Center failure");
					start();
				}
			});
		},
		function(error) {
			ok(false, "Could not present message center");
			start();
		}
	);
});