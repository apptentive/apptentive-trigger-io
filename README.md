#Apptentive module for Trigger.io

The Apptentive Trigger.io module allows you to add a quick and easy in-app-feedback mechanism to your Trigger.io applications. Feedback is sent to the Apptentive web service.

##Available via Trigger.io

The module will soon be available through the [Trigger.io Modules](https://trigger.io/modules/) page.

##Available as a packaged module

A packaged version of the Apptentive module can be found under the [Release](https://github.com/apptentive/apptentive-trigger-io/releases) tab of this repository.

##Using the Apptentive module

Once you have successfully installed the module, you can begin using Apptentive in your Trigger.io app.

First, set your Apptentive API key:

	forge.internal.call('apptentive.setApiKey',
		{
			apiKey:"GET_YOUR_API_KEY_FROM_APPTENTIVE.COM"
		}, 
		success,
		error
	);

It is very important that you set your Apptentive API key, which you can get by signing up [on our website](http://www.apptentive.com/).

You can then begin using the features of Apptentive. For example, you could add a "Give Feedback" button to your interface that collects feedback via Apptentive's Message Center. 

    forge.internal.call('apptentive.presentMessageCenter', {}, success, error);
   
##Message Center

Get feedback from your customers with the Apptentive Message Center.

	forge.internal.call('apptentive.presentMessageCenter', {}, success, error);

The first time you present the Message Center, the user will be presented with an email feedback form. Thereafter, they will be taken to the Message Center. If you reply to your customers' feedback via the Apptentive website, the replies will be pushed to their in-app Message Center. 

Check for the number of unread messages like so:

    forge.internal.call('apptentive.unreadMessageCount',
		{}, 
		function(success) {
			//Update your interface with the new message count
		},
		function(error) {
			forge.logging.info("Error!");
		}
    );

You can also listen for our `ATMessageCenterUnreadCountChangedNotification` notification:

    forge.internal.addEventListener("apptentive.unreadMessageCountChanged", function () {
        alert("New Apptentive unread messages!");
    });

##User info

You can pre-load Apptentive with information about the user, which makes their Message Center experience easier:

	forge.internal.call('apptentive.setInitialUserName',
		{
			initialUserEmailAddress:"Peter"
		}, 
		success,
		error
	);

	forge.internal.call('apptentive.setInitialUserEmailAddress',
		{
			initialUserEmailAddress:"peter@example.com"
		}, 
		success,
		error
	);

You can also store arbitrary information about the user, which is then visible in your Message Center:

	forge.internal.call('apptentive.addCustomData',
    	{
	    	object:"Seattle"
			key:"city"
		}, 
		success,
		error
	);

Similarly, you can remove custom data:

	apptentiveModule.removeCustomDataWithKey("city");
	
	forge.internal.call('apptentive.removeCustomData',
		{
			key:"city",
		}, 
		success,
		error
	);

##App Store Rating Flow

Apptentive also provides an App Store rating flow. A ratings dialog will be displayed based on the number of launches of your application, the amount of time the user has been using it, and the number of significant events the user has completed (for example, levels passed). All of these variables can be modified on Apptentive.com.

Display the rating flow at a certain point in your code with:

	forge.internal.call('apptentive.showRatingFlowIfConditionsAreMet', {}, success, error);

The rating flow will only be shown if all conditions (number of launches, significant events, etc.) have been met.

Log significant events, such as completing a level, with:

	forge.internal.call('apptentive.logSignificantEvent', {}, success, error);

##In-App Surveys

Surveys can be created on our website and presented, in-app, to users.

You can check if there are any available surveys that have been downloaded from the server:

    //No tags
	forge.internal.call('apptentive.hasSurveyAvailableWithNoTags',
		{}, 
		function(success) {
			alert(success);
		},
		function(error) {
			forge.logging.info("Error!");
		}
    );
   
	//With tags
	var surveyTags = ["testSurvey", "testTag"];
	forge.internal.call('apptentive.hasSurveyAvailableWithTags',
		{
			tags:surveyTags
		}, 
		function(success) {
			alert(success);
		},
		function(error) {
			forge.logging.info("Error!");
		}
	);

You can also listen for our `apptentive.surveyBecameAvailable` notification:

    forge.internal.addEventListener("apptentive.surveyBecameAvailable", function () {
        alert("New Apptentive surveys!");
    });

If surveys are available, present the surveys in the app:

	//No tags
	forge.internal.call('apptentive.presentSurveyControllerWithNoTags', {}, success, error);
	
	//With tags
	var surveyTags = ["testSurvey", "testTag"];
	forge.internal.call('apptentive.presentSurveyControllerWithTags', {tags:surveyTags}, success, error);

We will then send a notification when the survey has been sent to Apptentive:

    forge.internal.addEventListener("apptentive.surveyWasSent", function () {
        alert("Survey was sent to Apptentive!");
    });

##Questions? Comments? Help using Apptentive?

Please let us know how we can improve this document or the Apptentive Trigger.io module!

https://github.com/apptentive/apptentive-trigger-io/issues

If you have any other questions, please contact us and we will get back to you quickly.

http://www.apptentive.com/contact
