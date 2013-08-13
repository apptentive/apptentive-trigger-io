The Apptentive Trigger.io module allows you to add a quick and easy in-app-feedback mechanism to your Trigger.io applications. Feedback is sent to the Apptentive web service.

##Using the Apptentive module

Once you have activated the module, you can begin using Apptentive in your Trigger.io app.

First, set your Apptentive API key:

	forge.apptentive.setApiKey("GET_YOUR_API_KEY_FROM_APPTENTIVE.COM");

It is very important that you set your Apptentive API key, which you can get by signing up [on our website](http://www.apptentive.com/).
   
##Message Center

Get feedback from your customers with the Apptentive Message Center.

	forge.apptentive.presentMessageCenter();

The first time you present the Message Center, the user will be presented with an email feedback form. Thereafter, they will be taken to the Message Center. If you reply to your customers' feedback via the Apptentive website, the replies will be pushed to their in-app Message Center. 

Check for the number of unread messages like so:

    forge.apptentive.unreadMessageCount(
		function(success) {
			//Update your interface with the new message count
		},
		function(error) {
			forge.logging.info("Error!");
		}
    );

You can also listen for our `ATMessageCenterUnreadCountChangedNotification` notification:

    forge.apptentive.unreadMessageCountChanged.addListener(function () {
        alert("New Apptentive unread messages!");
    });

##User info

You can pre-load Apptentive with information about the user, which makes their Message Center experience easier:

	forge.apptentive.setInitialUserName("Peter");

	forge.apptentive.setInitialUserEmailAddress("peter@example.com");

You can also store arbitrary information about the user, which is then visible in your Message Center:

	forge.apptentive.addCustomData({
    	object:"Seattle"
		key:"city"
	});

Similarly, you can remove custom data:

	forge.apptentive.removeCustomDataWithKey("city");
	
	forge.removeCustomData("city");

##App Store Rating Flow

Apptentive also provides an App Store rating flow. A ratings dialog will be displayed based on the number of launches of your application, the amount of time the user has been using it, and the number of significant events the user has completed (for example, levels passed). All of these variables can be modified on Apptentive.com.

Display the rating flow at a certain point in your code with:

	forge.apptentive.showRatingFlowIfConditionsAreMet();

The rating flow will only be shown if all conditions (number of launches, significant events, etc.) have been met.

Log significant events, such as completing a level, with:

	forge.apptentive.logSignificantEvent();

##In-App Surveys

Surveys can be created on our website and presented, in-app, to users.

You can check if there are any available surveys that have been downloaded from the server:

    //No tags
	forge.apptentive.hasSurveyAvailableWithNoTags(
		function(success) {
			alert(success);
		},
		function(error) {
			forge.logging.info("Error!");
		}
    );
   
	//With tags
	var surveyTags = ["testSurvey", "testTag"];
	forge.apptentive.hasSurveyAvailableWithTags(surveyTags,
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

	//No tags
	forge.apptentive.presentSurveyControllerWithNoTags();
	
	//With tags
	var surveyTags = ["testSurvey", "testTag"];
	forge.apptentive.presentSurveyControllerWithTags(surveyTags);

We will then send a notification when the survey has been sent to Apptentive:

    forge.apptentive.surveyWasSent.addListener(function () {
        alert("Survey was sent to Apptentive!");
    });

##Questions? Comments? Help using Apptentive?

Please let us know how we can improve this document or the Apptentive Trigger.io module!

https://github.com/apptentive/apptentive-trigger-io/issues

If you have any other questions, please contact us and we will get back to you quickly.

http://www.apptentive.com/contact
