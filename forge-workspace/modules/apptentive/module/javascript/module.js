forge.apptentive = {
	
	// ************************************************************************************************************************************************
	// Presenting UI
	// ************************************************************************************************************************************************

	showMessageCenter: function (success, error, customData) {
		forge.internal.call(
			'apptentive.showMessageCenter',
			{
				customData: (!customData || customData == "") ? {} : customData
			},
			success,
			error
		);
	},
	
	getUnreadMessageCount: function (success, error) {
		forge.internal.call('apptentive.getUnreadMessageCount', {}, success, error);
	},

	// Apptentive remote notifications are disabled in Trigger.io for the time being.
	/*
	didReceiveRemoteNotification: function (success, error, notificationUserInfo) {
		forge.internal.call(
			'apptentive.didReceiveRemoteNotification',
			{
				notificationUserInfo: notificationUserInfo
			},
			success,
			error
		);
	},
	*/

	engage: function (success, error, event, customData, extendedData) {
		forge.logging.debug("Event: " + event);
		forge.logging.debug("customData: " + JSON.stringify(customData));
		forge.logging.debug("extendedData: " + JSON.stringify(extendedData));
		forge.internal.call(
			'apptentive.engage', {
				event: event,
				customData: (!customData || customData == "") ? {} : customData,
				extendedData: (!extendedData || extendedData == "") ? [] : extendedData
			}, 
			success,
			error
		);
	},

	// ************************************************************************************************************************************************
	// Extended Data for Events
	// ************************************************************************************************************************************************

	makeExtendedDataTime: function (success, error, time) {
		forge.internal.call(
			'apptentive.makeExtendedDataTime',
			{
				time: (time / 1000)
			},
			success,
			error
		);
	},

	makeExtendedDataLocation: function (success, error, longitude, latitude) {
		forge.internal.call(
			'apptentive.makeExtendedDataLocation',
			{
				longitude: longitude,
				latitude: latitude
			},
			success,
			error
		);
	},

	makeExtendedDataCommerce: function (success, error, id, affiliation, revenue, shipping, tax, currency, items) {
		forge.internal.call(
			'apptentive.makeExtendedDataCommerce',
			{
				success: success,
				error: error,
				id: id,
				affiliation: affiliation,
				revenue: revenue,
				shipping: shipping,
				tax: tax,
				currency: currency,
				items: items
			},
			success,
			error
		);
	},

	makeExtendedDataCommerceItem: function (success, error, id, name, category, price, quantity, currency) {
		forge.internal.call(
			'apptentive.makeExtendedDataCommerceItem',
			{
				id: id,
				name: name,
				category: category,
				price: price,
				quantity: quantity,
				currency: currency
			},
			success,
			error
		);
	},

	// ************************************************************************************************************************************************
	// Attach Text, Images, and Files
	// ************************************************************************************************************************************************
	
	// TODO: Figure out what trigger devs will have access to in regards to files.
	
	sendAttachment: function (success, error, text) {
		forge.internal.call(
			'apptentive.sendAttachment',
			{
				text: text
			},
			success,
			error
		);
	},
		
	sendAttachment: function (success, error, imagePath) {
		forge.internal.call(
			'apptentive.sendAttachment',
			{
				imagePath: imagePath
			},
			success,
			error
		);
	},
		
	sendAttachment: function (success, error, filePath, mimeType) {
		forge.internal.call(
			'apptentive.sendAttachment',
			{
				filePath: filePath,
				mimeType: mimeType
			},
			success,
			error
		);
	},

	// ************************************************************************************************************************************************
	// Add Custom Device or Person Data
	// ************************************************************************************************************************************************

	setInitialUserName: function (success, error, initialUserName) {
		forge.internal.call(
			'apptentive.setInitialUserName',
			{
				initialUserName: initialUserName
			},
			success,
			error
		);
	},

	setInitialUserEmailAddress: function (success, error, initialUserEmailAddress) {
		forge.internal.call(
			'apptentive.setInitialUserEmailAddress',
			{
				initialUserEmailAddress: initialUserEmailAddress
			},
			success,
			error
		);
	},

	addCustomDeviceData: function (success, error, key, value) {
		forge.internal.call(
			'apptentive.addCustomDeviceData', {
				key: key,
				value: value
			},
			success,
			error
		);
	},

	removeCustomDeviceData: function (success, error, key) {
		forge.internal.call('apptentive.removeCustomDeviceData', {
			key: key
		}, success, error);
	},

	addCustomPersonData: function (success, error, key, value) {
		forge.internal.call('apptentive.addCustomPersonData', {
			key: key,
			value: value
		}, success, error);
	},

	removeCustomPersonData: function (success, error, key) {
		forge.internal.call('apptentive.removeCustomPersonData', {
			key: key
		}, success, error);
	},
	
	// ************************************************************************************************************************************************
	// Open App Store
	// ************************************************************************************************************************************************

/*
	openAppStore: function (success, error) {
		forge.internal.call(
			'apptentive.openAppStore',
			{},
			success,
			error
		);
	},
*/

	// ************************************************************************************************************************************************
	// SDK Events
	// ************************************************************************************************************************************************

	addUnreadMessageCountChangedListener: function (listener) {
		forge.logging.info("Added unreadMessageCountChanged Listener.");
		forge.internal.addEventListener("apptentive.unreadMessageCountChanged", listener);
	},

	addSurveyFinishedListener: function (listener) {
		forge.logging.info("Added surveyFinished Listener.");
		forge.internal.addEventListener("apptentive.surveyFinished", listener);
	},
	
// Apptentive 3rd Party Integrations are disabled in Trigger.io for the time being.
/*	
	// ************************************************************************************************************************************************
	// Integrate With Other Services
	// ************************************************************************************************************************************************

	addIntegration: function (success, error, integration, configuration) {
		forge.internal.call(
			'apptentive.addIntegration',
			{
				integration: integration,
				configuration: configuration
			},
			success,
			error
		);
	},
	
	addIntegration: function (success, error, integration, deviceToken) {
		forge.internal.call(
			'apptentive.addIntegration',
			{
				integration: integration,
				deviceToken: deviceToken
			},
			success,
			error
		);
	},
	
	removeIntegration: function (success, error, integration) {
		forge.internal.call(
			'apptentive.removeIntegration',
			{
				integration: integration
			},
			success,
			error
		);
	},

// Maybe 
	addUrbanAirshipIntegration: function (success, error, deviceToken) {
		forge.internal.call(
			'apptentive.addUrbanAirshipIntegration',
			{
				deviceToken: deviceToken
			},
			success,
			error
		);
	},

	addAmazonSNSIntegration: function (success, error, deviceToken) {
		forge.internal.call(
			'apptentive.addAmazonSNSIntegration',
			{
				deviceToken: deviceToken
			},
			success,
			error
		);
	},
	
	addParseIntegration: function (success, error, deviceToken) {
		forge.internal.call(
			'apptentive.addParseIntegration',
			{
				deviceToken: deviceToken
			},
			success,
			error
		);
	},
*/

	// ************************************************************************************************************************************************
	// Debug only
	// ************************************************************************************************************************************************

	// Add setDebugMode()
};
