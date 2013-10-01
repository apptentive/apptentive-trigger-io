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
						"sky@apptentive.com",
						function(success) {								
							$('p.initialUserEmailAddress').text(success);
						},
						function(error) {
							forge.logging.info("Error: " + error.message);
						}
	);		

	// Works on Android
	forge.apptentive.showRatingFlowIfConditionsAreMet();


	// ************************************************************************************************************************************************
	// Initialization methods REMOVE
	// These methods must be called when your javascript first executes.
	// ************************************************************************************************************************************************
	
	$('button.setInitialUserName').click(function () {
		forge.internal.call('apptentive.setInitialUserName',
							{initialUserName:$('input.setInitialUserName').val()}, 
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});
	
	$('button.setInitialUserEmailAddress').click(function () {
		forge.apptentive.setInitialUserEmailAddress(
							$('input.setInitialUserEmailAddress').val(), 
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});

	$('button.addCustomDeviceData').click(function () {		
		forge.apptentive.addCustomDeviceData(
							$('input.addCustomDeviceData.key').val(),
							$('input.addCustomDeviceData.value').val(),
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});
	
	$('button.removeCustomDeviceData').click(function () {	
		forge.apptentive.removeCustomDeviceData(
							$('input.removeCustomDeviceData').val(),
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
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
							surveyTags,
							function(success) {
								$('p.isSurveyAvailable').text(success);
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});
	
	$('button.showSurvey').click(function () {
		var surveyTags = $('input.showSurvey').val().split(" ");
		forge.apptentive.showSurvey(
							surveyTags,
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});
});
