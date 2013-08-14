#Apptentive module for Trigger.io

The Apptentive Trigger.io module allows you to add a quick and easy in-app-feedback mechanism to your Trigger.io applications. Feedback is sent to the Apptentive web service.

##Available via Trigger.io

The module will soon be available through the [Trigger.io Modules](https://trigger.io/modules/) page.

##Available as a packaged module

A packaged version of the Apptentive module can be found under the [Release](https://github.com/apptentive/apptentive-trigger-io/releases) tab of this repository.

##JavaScript syntax for Trigger.io modules

To make an Apptentive API call from JavaScript the following code is used:

    forge.internal.call(
        'alert.show',
        {
			text: 'Test',
			anotherParameter: 'demo'
		},
        function (success) {
			alert('Success!')
		},
        function (error) {
			alert('Error: ' + error.message)
		}
    )

The `forge.internal.call` method sends a message to the native module with 4 parameters:

 - `alert.show` is a string representing the native module and method to be called. In this case the Trigger.io module `alert` will call the method `show`.
 - The second parameter is an object containing data to be passed as parameters to the native method.
 - The third parameter is a success callback function, which may be called with data returned from native code.
 - The forth parameter is an error callback function, which also be called with data.

More information:
https://trigger.io/docs/current/api/native_modules/api_methods.html

##Using the Apptentive module

Once you have successfully installed the module, you can begin using Apptentive in your Trigger.io app.

First, set your Apptentive API key:

	forge.internal.call('apptentive.setApiKey',
		{
			apiKey:"GET_YOUR_API_KEY_FROM_APPTENTIVE.COM"
		}, 
		function(success) {},
		function(error) {}
	);

It is very important that you set your Apptentive API key, which you can get by signing up [on our website](http://www.apptentive.com/).

You can then begin using the features of Apptentive. For example, you could add a "Give Feedback" button to your interface that collects feedback via Apptentive's Message Center. 

    forge.internal.call('apptentive.presentMessageCenter', {}, {}, {});
   
##Message Center

Get feedback from your customers with the Apptentive Message Center.

	forge.internal.call('apptentive.presentMessageCenter', {}, {}, {});

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

    forge.apptentive.unreadMessageCountChanged.addListener(function () {
        alert("New Apptentive unread messages!");
    });

##User info

You can pre-load Apptentive with information about the user, which makes their Message Center experience easier:

	forge.internal.call('apptentive.setInitialUserName',
		{
			initialUserName:"Peter"
		}, 
		function(success) {},
		function(error) {}
	);

	forge.internal.call('apptentive.setInitialUserEmailAddress',
		{
			initialUserEmailAddress:"peter@example.com"
		}, 
		function(success) {},
		function(error) {}
	);

You can also store arbitrary information about the user, which is then visible in your Message Center:

	forge.internal.call('apptentive.addCustomData',
    	{
	    	object:"Seattle"
			key:"city"
		}, 
		function(success) {},
		function(error) {}
	);

Similarly, you can remove custom data:

	apptentiveModule.removeCustomDataWithKey("city");
	
	forge.internal.call('apptentive.removeCustomData',
		{
			key:"city",
		}, 
		function(success) {},
		function(error) {}
	);

##App Store Rating Flow

Apptentive also provides an App Store rating flow. A ratings dialog will be displayed based on the number of launches of your application, the amount of time the user has been using it, and the number of significant events the user has completed (for example, levels passed). All of these variables can be modified on Apptentive.com.

Display the rating flow at a certain point in your code with:

	forge.internal.call('apptentive.showRatingFlowIfConditionsAreMet', {}, {}, {});

The rating flow will only be shown if all conditions (number of launches, significant events, etc.) have been met.

Log significant events, such as completing a level, with:

	forge.internal.call('apptentive.logSignificantEvent', {}, {}, {});

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

    forge.apptentive.surveyBecameAvailable.addListener(function () {
        alert("New Apptentive surveys!");
    });

If surveys are available, present the surveys in the app:

	//No tags
	forge.internal.call('apptentive.presentSurveyControllerWithNoTags', {}, {}, {});
	
	//With tags
	var surveyTags = ["testSurvey", "testTag"];
	forge.internal.call('apptentive.presentSurveyControllerWithTags', {tags:surveyTags}, {}, {});

We will then send a notification when the survey has been sent to Apptentive:

    forge.apptentive.surveyWasSent.addListener(function () {
        alert("Survey was sent to Apptentive!");
    });

##Questions? Comments? Help using Apptentive?

Please let us know how we can improve this document or the Apptentive Trigger.io module!

https://github.com/apptentive/apptentive-trigger-io/issues

If you have any other questions, please contact us and we will get back to you quickly.

http://www.apptentive.com/contact
