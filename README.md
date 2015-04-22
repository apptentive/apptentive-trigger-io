# Notice!

**Hello**.  The Apptentive Trigger.io Module has been discontinued and is no longer supported. We are still actively maintaining our [iOS](http://github.com/apptentive/apptentive-ios) and [Android](http://github.com/apptentive/apptentive-android) SDKs. If you have any questions, please contact us at [support@apptentive.com](mailto:support@apptentive.com?subject=Trigger%20Module).


---
---

# Apptentive Trigger.io Module
The Apptentive Trigger.io module allows you to add quick and easy in-app feedback, ratings, surveys, and more to your Trigger.io applications.

## Install Guide
The following steps will help guide you through integrating the Apptentive Trigger.io module into your app.

### Get the Apptentive Module
The official Apptentive module is available via the [Trigger.io Forge](https://trigger.io/modules/apptentive/).

To add the Apptentive Trigger.io module to your app, follow these steps:

*Note: v1.6.1 is the current version. Due to a release discrepancy, v1.7 was released prematurely. Please ignore 1.7, or upgrade to 1.6.1.*

### Configure the Apptentive Module
The Apptentive Trigger Module requires configuration after you add it to your Trigger app. You must supply your Apptentive API Key. If you are building for iOS, you must also specify your Apple App Store App ID.


You can configure your app through the Trigger Toolkit web app.

1. In a browser, open Trigger Toolkit and Navigate to your Trigger app
2. On the left hand side, click **Modules**, under the **Public** section.
3. Scroll to the Apptentive module
4. Yo must supply your app's API Key. Your API Key is located on our [website](https://be.apptentive.com) under _**Settings -> API & Development -> API Token**_.
5. If you are building an iOS version of your app, supply your app's **App ID**. This is not used for Android

### Calling Apptentive API Methods
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

Use `getUnreadMessageCount()` to check for messages that the user has not yet read.

```javascript
forge.apptentive.getUnreadMessageCount(success, error);
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

You can also register a listener that will be notifid when the number of unread messages changes.

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

#### Events and Interactions

Apptentive provides the `engage()` method, which allows you to record actions (**Events**) taken by the user, while also driving a powerful system of **Interactions**. Each call to `engage()` will record an **Event**. On the Apptentice website, you can configure **Interactions** to display at specific **Events**, and you can also construct logic that determines whether or not an **Interaction** will display based on previously recorded **Events**.

```javascript
// event - A string that you pick to represent the place in your code that you are calling this method from.
// Success function returns true if an Interaction was displayed.
forge.apptentive.engage(success, error, event);
```

###### Example

```javascript
forge.apptentive.engage(
    function (showedInteraction) {
        forge.logging.info((showedInteraction ? "Showed" : "Did not show") + " interaction.");
    },
    function (error) {
        forge.logging.error("Error: " + error.message);
    },
    "event_name"
);
```

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
```

```javascript
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
