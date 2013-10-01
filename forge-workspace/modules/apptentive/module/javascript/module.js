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

	addCustomData: function (success, error, key, value) {
		forge.internal.call('apptentive.addCustomData', {
			key: key,
			value: value
		}, success, error);
	},

	removeCustomData: function (success, error, key) {
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

	isSurveyAvailable: function (success, error, tags) {
		forge.internal.call('apptentive.isSurveyAvailable', {tags: tags}, success, error);
	},

	showSurvey: function (success, error, tags) {
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

	// Add setDebugMode()
};
