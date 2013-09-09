# Apptentive Tigger.io Module

The Apptentive Trigger.io module allows you to add a quick and easy in-app-feedback mechanism to your Trigger.io applications. Feedback is sent to the Apptentive web service.

## Install Guide

The following steps will help guide you through implementing Apptentive in your app through Trigger.io. This guide assumes you have your app implemented in Trigger.io already.

### Get the Apptentive Module

The official Apptentive module is available via the [Trigger.io Forge](https://trigger.io/modules/apptentive/).

### Setup the Apptentive Module

To make an Apptentive API call from JavaScript, use the following code snippet:

    forge.moduleName.methodName(
		"test",
		"anotherParameter",
        function (success) {
			alert('Success!')
		},
        function (error) {
			alert('Error: ' + error.message)
		}
    )

The `forge.moduleName.methodName` method sends a message to the native module with at least two parameters:

 - The initial parameters are the data parameters to be passed to the module's native code.
 - The penultimate parameter is a success callback function, which should be called with the data returned from native code.
 - The final parameter is an error callback function, called with the returned error data.

You can find more information about these modules and methods [here](https://trigger.io/docs/current/api/native_modules/api_methods.html).

### Implement Apptentive

Once you have successfully installed the module, you can begin using Apptentive in your Trigger.io app.

First, set your Apptentive API key like so:

	forge.apptentive.setApiKey("YOUR APPTENTIVE API KEY", {}, {});

It is very important that you set your Apptentive API key, which you can get by signing up on our [website](http://www.apptentive.com/).

You can now begin using Apptentive's features.

#### Message Center

Get feedback from your customers with the Apptentive Message Center.

	forge.apptentive.presentMessageCenter({}, {});

The first time you present the Message Center, the user will be presented with an email feedback form. Thereafter, they will be taken to the Message Center. If you reply to your customers' feedback via the Apptentive website, the replies will be pushed to their in-app Message Center. 

Check for the number of unread messages like so:

    forge.apptentive.unreadMessageCount(
		function(success) {
			// Update your interface with the new message count.
			alert("You have " + success + " unread messages.");
		},
		function(error) {
			forge.logging.info("Error!");
		}
    );

You can also listen for our `ATMessageCenterUnreadCountChangedNotification` notification by adding the following:

    forge.apptentive.unreadMessageCountChanged.addListener(function () {
        alert("New Apptentive unread messages!");
    });

#### Ratings

Apptentive also provides an App Store rating flow. A ratings dialog will be displayed based on the number of launches of your application, the amount of time the user has been using it, and the number of significant events the user has completed (for example, levels passed). All of these variables can be modified on Apptentive.com.

Display the rating flow at a certain point in your code with:

	forge.apptentive.showRatingFlowIfConditionsAreMet({}, {});

The rating flow will only be shown if all conditions (number of launches, significant events, etc.) have been met.

Log significant events, such as completing a level, with:

	forge.apptentive.logSignificantEvent({}, {});

#### Surveys

Surveys can be created on our website and presented, in-app, to users.

You can check if there are any available surveys that have been downloaded from the server:

    // No tags
	forge.apptentive.hasSurveyAvailableWithNoTags(
		function(success) {
			alert(success);
		},
		function(error) {
			forge.logging.info("Error!");
		}
    );

	// With tags
	var surveyTags = ["testSurvey", "testTag"];
	forge.apptentive.hasSurveyAvailableWithTags(
		surveyTags,
		function(success) {
			alert(success);
		},
		function(error) {
			forge.logging.info("Error!");
		}
	);

You can also listen for our `apptentive.surveyBecameAvailable` notification:

    forge.apptentive.surveyBecameAvailable.addListener(function () {
        alert("New Apptentive surveys!");
    });

If surveys are available, present the surveys in the app:

	// No tags
	forge.apptentive.presentSurveyControllerWithNoTags({}, {});

	// With tags
	var surveyTags = ["testSurvey", "testTag"];
	forge.apptentive.presentSurveyControllerWithTags(surveyTags, {}, {});

We will then send a notification when the survey has been sent to Apptentive:

    forge.apptentive.surveyWasSent.addListener(function () {
        alert("Survey was sent to Apptentive!");
    });

#### User Info

You can pre-load Apptentive with information about the user, which makes their Message Center experience easier. For example: 

	forge.apptentive.setInitialUserName("Peter", {}, {});

	forge.apptentive.setInitialUserEmailAddress("peter@example.com", {}, {});

You can also store arbitrary information about the user, which is then visible in your Message Center:

    forge.apptentive.addCustomData("object", "key", {}, {});
	forge.apptentive.addCustomData("Seattle", "city", {}, {});

Similarly, you can remove custom data:

	forge.apptentive.removeCustomData("city", {}, {});
