#Apptentive module for Trigger.io

The Apptentive Trigger.io module allows you to add a quick and easy in-app-feedback mechanism to your Trigger.io applications. Feedback is sent to the Apptentive web service.

##Available via Trigger.io

The module will soon be available through the [Trigger.io Modules](https://trigger.io/modules/) page.

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
		initialUserEmailAddress:"Peter", 
			success,
			error
	);

	forge.internal.call('apptentive.setInitialUserEmailAddress',
	{
		initialUserEmailAddress:"peter@example.com", 
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
##Questions? Comments? Help using Apptentive?

Please let us know how we can improve this document or the Apptentive Titanium module!

https://github.com/apptentive/apptentive-trigger-io/issues

If you have any other questions, please contact us and we will get back to you quickly.

http://www.apptentive.com/contact
