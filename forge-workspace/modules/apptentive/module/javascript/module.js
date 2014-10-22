forge.apptentive = {
	
	// ************************************************************************************************************************************************
	// Basic Usage
	// ************************************************************************************************************************************************
	
	// API key and App Store ID are set automatically from module config.
	
	// ************************************************************************************************************************************************
	// Interface Customization
	// ************************************************************************************************************************************************
	
	setShowEmailField: function (success, error, showEmailField) {
		forge.internal.call(
			'apptentive.setShowEmailField',
			{
				showEmailField: showEmailField
			},
			success,
			error
		);
	},
		
	setCustomPlaceholderText: function (success, error, customPlaceholderText) {
		forge.internal.call(
			'apptentive.setCustomPlaceholderText',
			{
				customPlaceholderText: customPlaceholderText
			},
			success,
			error
		);
	},
	
	setInitiallyUseMessageCenter: function (success, error, initiallyUseMessageCenter) {
		forge.internal.call(
			'apptentive.setInitiallyUseMessageCenter',
			{
				initiallyUseMessageCenter: initiallyUseMessageCenter
			},
			success,
			error
		);
	},
	
	setInitiallyHideBranding: function (success, error, initiallyHideBranding) {
		forge.internal.call(
			'apptentive.setInitiallyHideBranding',
			{
				initiallyHideBranding: initiallyHideBranding
			},
			success,
			error
		);
	},
	
	setTintColor: function (success, error, red, green, blue, alpha) {
		forge.internal.call(
			'apptentive.setTintColor',
			{
				red: red,
				blue: blue,
				green: green,
				alpha: alpha
			},
			success,
			error
		);
	},
	
	// ************************************************************************************************************************************************
	// Presenting UI
	// ************************************************************************************************************************************************

	showMessageCenter: function (success, error) {
		forge.internal.call('apptentive.showMessageCenter', {}, success, error);
	},
		
	showMessageCenterWithCustomData: function (success, error, customData) {
		forge.internal.call(
			'apptentive.showMessageCenterWithCustomData',
			{
				customData: customData
			},
			success,
			error
		);
	},
	
	getUnreadMessageCount: function (success, error) {
		forge.internal.call('apptentive.getUnreadMessageCount', {}, success, error);
	},

	engage: function (success, error, event) {
		forge.internal.call(
			'apptentive.engage', {
				event: event
			}, 
			success, 
			error
		);
	},
	
	engage: function (success, error, event, customData) {
		forge.internal.call(
			'apptentive.engage', {
				event: event,
				customData: customData
			}, 
			success, 
			error
		);
	},
	
	engage: function (success, error, event, customData, extendedData) {
		forge.internal.call(
			'apptentive.engage', {
				event: event,
				customData: customData,
				extendedData: extendedData
			}, 
			success, 
			error
		);
	},
	

	// ************************************************************************************************************************************************
	// Extended Data for Events
	// ************************************************************************************************************************************************
	
	extendedDataDate: function (success, error, timeIntervalSince1970) {
		forge.internal.call(
			'apptentive.extendedDataDate',
			{
				timeIntervalSince1970: timeIntervalSince1970
			},
			success,
			error
		);
	},
	
	extendedDataCommerce: function (success, error, transactionID, affiliation, revenue, shipping, tax, currency, commerceItems) {
		forge.internal.call(
			'apptentive.extendedDataCommerce',
			{
				success: success,
				error: error,
				transactionID: transactionID,
				affiliation: affiliation,
				revenue: revenue,
				shipping: shipping,
				tax: tax,
				currency: currency,
				commerceItems: commerceItems
			},
			success,
			error
		);
	},

	extendedDataCommerceItem: function (success, error, itemID, name, category, price, quantity, currency) {
		forge.internal.call(
			'apptentive.extendedDataCommerceItem',
			{
				itemID: itemID,
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
		forge.internal.call('apptentive.addCustomDeviceData', {
			key: key,
			value: value
		}, success, error);
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
	
	openAppStore: function (success, error) {
		forge.internal.call(
			'apptentive.openAppStore',
			{},
			success,
			error
		);
	},
	
	// ************************************************************************************************************************************************
	// Engagement
	// ************************************************************************************************************************************************
	
	log: function (success, error) {
		forge.logging.warning("log()");
	},
	
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

	// ************************************************************************************************************************************************
	// Debug only
	// ************************************************************************************************************************************************

	// Add setDebugMode()
};
