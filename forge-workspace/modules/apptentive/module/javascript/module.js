forge.apptentive = {

	// ************************************************************************************************************************************************
	// Initialization
	// These methods must be called when your javascript first executes.
	// ************************************************************************************************************************************************

	setInitialUserName: function (success, error, initialUserName) {
		forge.internal.call('apptentive.setInitialUserName', {initialUserName: initialUserName}, success, error);
	},

	setInitialUserEmailAddress: function (success, error, initialUserEmailAddress) {
		forge.internal.call('apptentive.setInitialUserEmailAddress', {initialUserEmailAddress: initialUserEmailAddress}, success, error);
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

	isSurveyAvailable: function (success, error, tags) {
		forge.internal.call('apptentive.isSurveyAvailable', {tags: tags}, success, error);
	},

	showSurvey: function (success, error, tags) {
		forge.internal.call('apptentive.showSurvey', {tags: tags}, success, error);
	},


	// ************************************************************************************************************************************************
	// SDK Events
	// ************************************************************************************************************************************************

	addUnreadMessageCountChangedListener: function (listener) {
		forge.internal.addEventListener("apptentive.unreadMessageCountChanged", listener);
	},

	addSurveyFinishedListener: function (listener) {
		forge.internal.addEventListener("apptentive.surveyFinished", listener);
	},


	// ************************************************************************************************************************************************
	// Debug only
	// ************************************************************************************************************************************************

	// Add setDebugMode()
};
