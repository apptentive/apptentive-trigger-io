module("apptentive");

asyncTest("Show how Message Center", 1, function() {
	forge.apptentive.showMessageCenter(
		function(success) {
			askQuestion(
				"Did you see the Apptentive Message Center?", {
					Yes: function () {
						ok(true, "User claims Message Center success");
						start();
					},
					No: function () {
						ok(false, "User claims Message Center failure");
						start();
					}
				}
			);
		},
		function(error) {
			ok(false, "Could not present message center");
			start();
		}
	);
});

asyncTest("Show how Message Center and send custom data with first message.", 1, function() {
	forge.apptentive.showMessageCenter(
		function(success) {
			askQuestion(
				"Did you see the Apptentive Message Center?", {
					Yes: function () {
						ok(true, "User claims Message Center success");
						start();
					},
					No: function () {
						ok(false, "User claims Message Center failure");
						start();
					}
				}
			);
		},
		function(error) {
			ok(false, "Could not present message center");
			start();
		},
		{
			"custom_data_string": "A string!"
		}
	);
});