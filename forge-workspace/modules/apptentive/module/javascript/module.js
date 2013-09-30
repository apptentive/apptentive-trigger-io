forge.apptentive = {

	// ************************************************************************************************************************************************
	// Initialization
	// These methods must be called when your javascript first executes.
	// ************************************************************************************************************************************************

	setInitialUserName: function (initialUserName, success, error) {
		forge.internal.call('apptentive.setInitialUserName', {initialUserName: initialUserName}, success, error);
	},

	setInitialUserEmailAddress: function (initialUserEmailAddress, success, error) {
		forge.internal.call('apptentive.setInitialUserEmailAddress', {initialUserEmailAddress: initialUserEmailAddress}, success, error);
	},

	addCustomData: function (key, value, success, error) {
		forge.internal.call('apptentive.addCustomData', {
			key: key,
			value: value
		}, success, error);
	},

	removeCustomData: function (key, success, error) {
		forge.internal.call('apptentive.removeCustomData', {
			key: key
		}, success, error);
	},


	// ************************************************************************************************************************************************
	// Rating
	// ************************************************************************************************************************************************

	showRatingFlowIfConditionsAreMet: function (success, error) {
		forge.internal.call('apptentive.showRatingFlowIfConditionsAreMet', {}, success, error);
	},
	logSignificantEvent: function (success, error) {
		forge.internal.call('apptentive.logSignificantEvent', {}, success, error);
	},


	// ************************************************************************************************************************************************
	// Message Center
	// ************************************************************************************************************************************************

	showMessageCenter: function (success, error) {
		forge.internal.call('apptentive.showMessageCenter', {}, success, error);
	},
	getUnreadMessageCount: function (success, error) {
		forge.internal.call('apptentive.getUnreadMessageCount', {}, success, error);
	},
		

	// ************************************************************************************************************************************************
	// Survey
	// ************************************************************************************************************************************************

	isSurveyAvailable: function (tags, success, error) {
		forge.internal.call('apptentive.isSurveyAvailable', {tags: tags}, success, error);
	},

	showSurvey: function (tags, success, error) {
		forge.internal.call('apptentive.showSurvey', {tags: tags}, success, error);
	},


	// ************************************************************************************************************************************************
	// SDK Events
	// ************************************************************************************************************************************************

	unreadMessageCountChanged: {
		addListener: function (callback) {
			forge.internal.addEventListener("apptentive.unreadMessageCountChanged", callback);
		}
	},

	surveyFinished: {
		addListener: function (callback) {
			forge.internal.addEventListener("apptentive.surveyFinished", callback);
		}
	},


	// ************************************************************************************************************************************************
	// Debug only
	// ************************************************************************************************************************************************

	apiKey: function (success, error) {
		forge.internal.call('apptentive.apiKey', {}, success, error);
	},
	setApiKey: function (apiKey, success, error) {
		forge.internal.call('apptentive.setApiKey', {apiKey: apiKey}, success, error);
	},
	appID: function (success, error) {
		forge.internal.call('apptentive.appID', {}, success, error);
	},
	setAppID: function (appID, success, error) {
		forge.internal.call('apptentive.setAppID', {appID: appID}, success, error);
	},
	appName: function (success, error) {
		forge.internal.call('apptentive.appName', {}, success, error);
	},
	setAppName: function (appName, success, error) {
		forge.internal.call('apptentive.setAppName', {appName: appName}, success, error);
	},
	getInitialUserName: function (success, error) {
		forge.internal.call('apptentive.getInitialUserName', {}, success, error);
	},
	getInitialUserEmailAddress: function (success, error) {
		forge.internal.call('apptentive.getInitialUserEmailAddress', {}, success, error);
	}
};
