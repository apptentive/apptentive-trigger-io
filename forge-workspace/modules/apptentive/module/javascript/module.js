forge.apptentive = {
	// methods
	apiKey: function (success, error) {
		forge.internal.call('apptentive.apiKey', {}, success, error);
	},
	setApiKey: function (apiKey, success, error) {
		forge.internal.call('apptentive.setApiKey', {apiKey: apiKey}, success, error);
	},
	initialUserName: function (success, error) {
		forge.internal.call('apptentive.initialUserName', {}, success, error);
	},
	setInitialUserName: function (initialUserName, success, error) {
		forge.internal.call('apptentive.setInitialUserName', {initialUserName: initialUserName}, success, error);
	},
	initialUserEmailAddress: function (success, error) {
		forge.internal.call('apptentive.initialUserEmailAddress', {}, success, error);
	},
	setInitialUserEmailAddress: function (initialUserEmailAddress, success, error) {
		forge.internal.call('apptentive.setInitialUserEmailAddress', {initialUserEmailAddress: initialUserEmailAddress}, success, error);
	},
	addCustomData: function (key, object, success, error) {
		forge.internal.call('apptentive.addCustomData', {
			object: object,
			key: key
		}, success, error);
	},
	removeCustomData: function (key, success, error) {
		forge.internal.call('apptentive.removeCustomData', {
			key: key
		}, success, error);
	},
	presentMessageCenter: function (success, error) {
		forge.internal.call('apptentive.presentMessageCenter', {}, success, error);
	},
	unreadMessageCount: function (success, error) {
		forge.internal.call('apptentive.unreadMessageCount', {}, success, error);
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
	showRatingFlowIfConditionsAreMet: function (success, error) {
		forge.internal.call('apptentive.showRatingFlowIfConditionsAreMet', {}, success, error);
	},
	logSignificantEvent: function (success, error) {
		forge.internal.call('apptentive.logSignificantEvent', {}, success, error);
	},
	hasSurveyAvailableWithNoTags: function (success, error) {
		forge.internal.call('apptentive.hasSurveyAvailableWithNoTags', {}, success, error);
	},
	hasSurveyAvailableWithTags: function (tags, success, error) {
		forge.internal.call('apptentive.hasSurveyAvailableWithTags', {tags: tags}, success, error);
	},
	presentSurveyControllerWithNoTags: function (success, error) {
		forge.internal.call('apptentive.presentSurveyControllerWithNoTags', {}, success, error);
	},
	presentSurveyControllerWithTags: function (tags, success, error) {
		forge.internal.call('apptentive.presentSurveyControllerWithTags', {tags: tags}, success, error);
	},

	// Events
	unreadMessageCountChanged: {
		addListener: function (callback) {
			forge.internal.addEventListener("apptentive.unreadMessageCountChanged", callback);
		}
	},
	surveyBecameAvailable: {
		addListener: function (callback) {
			forge.internal.addEventListener("apptentive.surveyBecameAvailable", callback);
		}
	},
	surveyWasSent: {
		addListener: function (callback) {
			forge.internal.addEventListener("apptentive.surveyWasSent", callback);
		}
	}
};
