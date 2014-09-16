# Apptentive Trigger.io Module

The Apptentive Trigger.io module allows you to add a quick and easy in-app-feedback mechanism to your Trigger.io applications. Feedback is sent to the Apptentive web service.

## Install Guide

The following steps will help guide you through implementing Apptentive in your app through Trigger.io. This guide assumes you have your app implemented in Trigger.io already.

### Get the Apptentive Module

The official Apptentive module is available via the [Trigger.io Forge](https://trigger.io/modules/apptentive/).

*Note: v1.2.5 is the current version. Due to a release discrepancy, v1.7 was released prematurely. Please ignore 1.7, or upgrade to 1.2.5.*

### Configure the Apptentive Module

The Apptentive Trigger Module requires configuration after you add it to your Trigger app. You must supply your Apptentive API Key. If you are building for iOS, you must also specify your Apple App Store App ID.


You can configure your app through the Trigger Toolkit web app.

1. In a browser, open Trigger Toolkit and Navigate to your Trigger app
2. On the left hand side, click the `Public` link under `Modules`
3. Scroll to the Apptentive module
4. Fill in the apiKey and appId fields

Note: Your Apptentive API Key is found in your app's settings page at [Apptentive](https://www.apptentive.com)

### Setup the Apptentive Module

To make an Apptentive API call from JavaScript, you will make method calls in the following fashion.

```javascript
forge.apptentive.methodName(
    function (success) {
        alert('Success!');
    },
    function (error) {
        alert('Error: ' + error.message);
    },
    "someParameter",
    "anotherParameter",
);
```

The `forge.apptentive.methodName()` method sends a message to the native Apptentive module with at least two parameters:

* The first parameter is a success callback function, which should be called with the data returned from native code.
* The second parameter is an error callback function, called with the returned error data.
* Any additional parameters are arguments to the method.

You can find more information about these modules and methods [here](https://trigger.io/docs/current/api/native_modules/api_methods.html).

### Implement Apptentive

#### Message Center

Get feedback from your customers with the Apptentive Message Center.

```javascript
forge.apptentive.showMessageCenter(success, error);
```

###### Example

```javascript
forge.apptentive.showMessageCenter(
    {},
    function(error) {
        forge.logging.info("Error: " + error.message);
    }
);
```

The first time you present the Message Center, the user will be presented with an email feedback form. Thereafter, they will be taken to the Message Center. If you reply to your customers' feedback via the Apptentive website, the replies will be pushed to their in-app Message Center.

Message Center can also be presented with custom data:

```javascript
forge.apptentive.showMessageCenterWithCustomData(
	{},
    function(error) {
        forge.logging.info("Error: " + error.message);
    },
	{
		'customDataKey': 'customDataValue',
		'module': 'trigger.io'
	}
);
```

Use `getUnreadMessageCount` to check for messages that the user has not yet read.

```javascript
forge.apptentive.unreadMessageCount(success, error);
```

###### Example

```javascript
forge.apptentive.getUnreadMessageCount(
    function(count) {
        // Update your interface with the new message count.
        alert("You have " + count + " unread messages.");
    },
    function(error) {
        forge.logging.info("Error: " + error.message);
    }
);
```

You can also listen for our `unreadMessageCountChanged` notification.

```javascript
forge.apptentive.addUnreadMessageCountChangedListener(callback);
```

###### Example

```javascript
forge.apptentive.addUnreadMessageCountChangedListener(
    function (count) {
        alert("There are now " + count + " unread messages.");
    }
);
```

#### Ratings

Apptentive also provides an App Store rating flow. A ratings dialog will be displayed based on the number of launches of your application, the amount of time the user has been using it, and the number of significant events the user has completed (for example, levels passed). All of these variables can be modified in your [Apptentive](https://www.apptentive.com) settings.

Display the rating flow at a certain point in your code with:

```javascript
forge.apptentive.showRatingFlowIfConditionsAreMet(success, error);
```

###### Example

```javascript
forge.apptentive.showRatingFlowIfConditionsAreMet(
    {},
    function (error) {
        forge.logging.info("Error: " + error.message);
    }
);
```

The rating flow will only be shown if all conditions (number of launches, significant events, etc.) have been met.

Log significant events, such as completing a level, with:

```javascript
forge.apptentive.logSignificantEvent(success, error);
```

###### Example

```javascript
forge.apptentive.logSignificantEvent(
    {},
    function (error) {
        forge.logging.info("Error: " + error.message);
    }
);
```

#### Surveys

Surveys can be created on our website and presented, in-app, to users.

You can check if there are any available surveys that have been downloaded from the server:

```javascript
forge.apptentive.isSurveyAvailable(success, error, tags);
```

###### Example

```javascript
forge.apptentive.isSurveyAvailable(
    function(surveyIsAvailable) {
        alert("Survey is available? " + surveyIsAvailable);
    },
    function(error) {
        forge.logging.info("Error: " + error.message);
    },
    ["tag1", "tag2"] // If you do not have any tagged surveys, leave this array empty.
);
```

If surveys are available, present the surveys in the app:

```javascript
forge.apptentive.showSurvey(success, error, tags);
```

###### Example

```javascript
forge.apptentive.showSurvey(
    {},
    function(error) {
        forge.logging.info("Error: " + error.message);
    },
    ["tag1", "tag2"] // If you do not have any tagged surveys, leave this array empty.
);
```

We will then send a notification when the survey has been finished by the app user.

```javascript
forge.apptentive.addSurveySentListener(callback);
```

###### Example

```javascript
forge.apptentive.addSurveySentListener(
    function (completed) {
        alert("Survey was " + (completed ? "completed", "skipped") + ", and sent to Apptentive");
    }
);
```

#### Upgrade Messages

Apptentive's Upgrade Message feature allows you to display a brief message when your app has been updated. You can speak directly to your users and let them know what has changed in the release.

To present an upgrade message, engage the code point `app.launch` when your application becomes active:

```javascript
forge.apptentive.engage(
	function() {
	},
	function(error) {
		forge.logging.error(error.message);
	},
	'app.launch'
);
```

Upgrade Messages are created and configured online via your Apptentive dashboard.

#### User Info

You can pre-load Apptentive with information about the user, which makes their Message Center experience easier. For example:

```javascript
forge.apptentive.setInitialUserName(success, error, initialUserName);
```

###### Example

```javascript
forge.apptentive.setInitialUserName(
    {},
    function(error) {
        forge.logging.info("Error: " + error.message);
    },
    "John Doe"
);

forge.apptentive.setInitialUserEmailAddress(success, error, initialUserEmailAddress);
```

###### Example

```javascript
forge.apptentive.setInitialUserEmailAddress(
    {},
    function(error) {
        forge.logging.info("Error: " + error.message);
    },
    "johndoe@example.com"
);
```

You can also store arbitrary information about the device and person using the app, which is then visible in your Message Center:

```javascript
forge.apptentive.addCustomDeviceData(success, error, key, value);

forge.apptentive.addCustomPersonData(success, error, key, value);
```

###### Example

```javascript
forge.apptentive.addCustomDeviceData(
    {},
    function(error) {
        forge.logging.info("Error: " + error.message);
    },
    "internalDeviceId",
    "1234567890"
);
```

Similarly, you can remove custom data:

```javascript
forge.apptentive.removeCustomDeviceData(success, error, key);

forge.apptentive.removeCustomPersonData(success, error, key);
```

###### Example

```javascript
forge.apptentive.removeCustomPersonData(
    {},
    function(error) {
        forge.logging.info("Error: " + error.message);
    },
    "internalPersonId"
);
```
