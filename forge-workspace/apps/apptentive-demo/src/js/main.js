$(function () {

	// ************************************************************************************************************************************************
	// Actual initialization
	// These methods must be called when your javascript first executes.
	// ************************************************************************************************************************************************

	// Initialize settings.
	forge.logging.info("init!");
	//forge.logging.info("Setting email.");

	// Listen for unread messages.
	forge.logging.info("Listening for unreadMessageCountChanged event.");
	forge.internal.addEventListener("apptentive.unreadMessageCountChanged", function(count) {
		alert("Unread Messages: " + count);
	});
	
	// Example: Show Ratings Flow when the app regains focus.
	forge.internal.addEventListener("apptentive.windowFocused", function() {
		forge.apptentive.showRatingFlowIfConditionsAreMet();
	});
	
	// Works on Android
	forge.apptentive.setInitialUserEmailAddress(
						function(success) {								
							$('p.initialUserEmailAddress').text(success);
						},
						function(error) {
							forge.logging.info("Error: " + error.message);
						},
						"sky@apptentive.com"
	);		

	// Works on Android
	forge.apptentive.showRatingFlowIfConditionsAreMet();


	// ************************************************************************************************************************************************
	// Initialization methods REMOVE
	// These methods must be called when your javascript first executes.
	// ************************************************************************************************************************************************
	
	$('button.setInitialUserName').click(function () {
		forge.apptentive.call('apptentive.setInitialUserName',
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							},
							$('input.setInitialUserName').val()
		);
	});
	
	$('button.setInitialUserEmailAddress').click(function () {
		forge.apptentive.setInitialUserEmailAddress(
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							},
							$('input.setInitialUserEmailAddress').val() 
		);
	});

	$('button.addCustomDeviceData').click(function () {		
		forge.apptentive.addCustomDeviceData(
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}.
							$('input.addCustomDeviceData.key').val(),
							$('input.addCustomDeviceData.value').val()
		);
	});
	
	$('button.removeCustomDeviceData').click(function () {	
		forge.apptentive.removeCustomDeviceData(
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							},
							$('input.removeCustomDeviceData').val()
		);
	});
	

	// ************************************************************************************************************************************************
	// Rating
	// ************************************************************************************************************************************************
	
	$('button.showRatingFlowIfConditionsAreMet').click(function () {
		forge.apptentive.showRatingFlowIfConditionsAreMet(
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});
	
	$('button.logSignificantEvent').click(function () {
		forge.apptentive.logSignificantEvent(
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});


	// ************************************************************************************************************************************************
	// Message Center
	// ************************************************************************************************************************************************
	
	$('button.showMessageCenter').click(function () {
		forge.apptentive.showMessageCenter(
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});
	
	$('button.getUnreadMessageCount').click(function () {
		forge.apptentive.getUnreadMessageCount(
							function(success) {
								$('p.getUnreadMessageCount').text(success);
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});

	
	// ************************************************************************************************************************************************
	// Survey
	// ************************************************************************************************************************************************

	$('button.isSurveyAvailable').click(function () {
		var surveyTags = $('input.isSurveyAvailable').val().split(" ");
		forge.apptentive.isSurveyAvailable(
							function(success) {
								$('p.isSurveyAvailable').text(success);
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							},
							surveyTags
		);
	});
	
	$('button.showSurvey').click(function () {
		var surveyTags = $('input.showSurvey').val().split(" ");
		forge.apptentive.showSurvey(
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							},
							surveyTags
		);
	});
});
