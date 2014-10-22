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
	// Initialization
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
	// Message Center
	// ************************************************************************************************************************************************

	showMessageCenter: function (success, error) {
		forge.internal.call('apptentive.showMessageCenter', {}, success, error);
	},
	showMessageCenterWithCustomData: function (success, error, customData) {
		forge.internal.call('apptentive.showMessageCenterWithCustomData', {customData: customData}, success, error);
	},
	getUnreadMessageCount: function (success, error) {
		forge.internal.call('apptentive.getUnreadMessageCount', {}, success, error);
	},
	
	// ************************************************************************************************************************************************
	// Engagement
	// ************************************************************************************************************************************************
	
	engage: function (success, error, event) {
		forge.logging.warning("About to call engage()");
		forge.internal.call('apptentive.engage', {
			event: event
		}, success, error);
		forge.logging.warning("engage() returned", error);
	},
	
	log: function (success, error) {
		forge.logging.warning("log()");
	},
	
/*
	// ************************************************************************************************************************************************
	// Survey
	// ************************************************************************************************************************************************
	isSurveyAvailable: function (success, error, tags) {
		forge.internal.call('apptentive.isSurveyAvailable', {tags: tags}, success, error);
	},

	showSurvey: function (success, error, tags) {
		forge.internal.call('apptentive.showSurvey', {tags: tags}, success, error);
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

	// ************************************************************************************************************************************************
	// Debug only
	// ************************************************************************************************************************************************

	// Add setDebugMode()
};
