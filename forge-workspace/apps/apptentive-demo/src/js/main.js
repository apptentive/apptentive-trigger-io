$(function () {

	/*
	// Events
	*/

	// Initialize settings.
	forge.logging.info("init!");
	alert("init!");
	//forge.logging.info("Setting email.");

	// Listen for unread messages.
	forge.logging.info("Listening for unreadMessageCountChanged event.");
	forge.internal.addEventListener("apptentive.unreadMessageCountChanged", function(count) {
		alert("Unread Messages: " + count);
	});
	
	
	forge.internal.call('apptentive.setInitialUserEmailAddress',
						{emailAddress:"sky@apptentive.com"},
						function(success) {								
							$('p.initialUserEmailAddress').text(success);
						},
						function(error) {
							forge.logging.info("Error: " + error.message);
						}
	);		

	/*
	//Shared
	*/
	
	$('button.showAlert').click(function () {
		forge.internal.call('apptentive.showAlert',
							{text:$('input.showAlert').val()}, 
							function(success) {
								forge.logging.info("Success!");
								forge.logging.info("Success: " + success.message);
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});

	/*
	//Shared
	*/
	
	$('button.apiKey').click(function () {
		forge.internal.call('apptentive.apiKey',
							{},
							function(success) {
								$('p.apiKey').text(success);
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});
	
	$('button.setApiKey').click(function () {
		forge.internal.call('apptentive.setApiKey',
							{apiKey:$('input.setApiKey').val()}, 
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});
	
	$('button.initialUserName').click(function () {
		forge.internal.call('apptentive.initialUserName',
							{},
							function(success) {
								$('p.initialUserName').text(success);
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});
	
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
	
	$('button.initialUserEmailAddress').click(function () {
		forge.internal.call('apptentive.initialUserEmailAddress',
							{},
							function(success) {								
								$('p.initialUserEmailAddress').text(success);
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);		
	});
	
	$('button.setInitialUserEmailAddress').click(function () {
		forge.internal.call('apptentive.setInitialUserEmailAddress',
							{initialUserEmailAddress:$('input.setInitialUserEmailAddress').val()}, 
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});

	$('button.addCustomDeviceData').click(function () {		
		forge.internal.call('apptentive.addCustomDeviceData',
							{
								key:$('input.addCustomDeviceData.key').val(),
								value:$('input.addCustomDeviceData.value').val()
							},
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});
	
	$('button.removeCustomDeviceData').click(function () {	
		forge.internal.call('apptentive.removeCustomDeviceData',
							{
								key:$('input.removeCustomDeviceData').val()
							},
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});
	
	/*
	//Message Center
	*/
	
	$('button.presentMessageCenter').click(function () {				
		forge.internal.call('apptentive.presentMessageCenter',
							{},
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});
	
	$('button.unreadMessageCount').click(function () {
		forge.internal.call('apptentive.unreadMessageCount',
							{},
							function(success) {
								$('p.unreadMessageCount').text(success);
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});
	
	/*
	//Ratings Flow
	*/
	
	$('button.showRatingFlowIfConditionsAreMet').click(function () {
		forge.internal.call('apptentive.showRatingFlowIfConditionsAreMet',
							{},
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});
	
	$('button.logSignificantEvent').click(function () {
		forge.internal.call('apptentive.logSignificantEvent',
							{},
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});
	
	/*
	//Surveys
	*/

	$('button.isSurveyAvailable').click(function () {
		var surveyTags = $('input.isSurveyAvailable').val().split(" ");
		forge.internal.call('apptentive.isSurveyAvailable',
							{tags:surveyTags},
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
		forge.internal.call('apptentive.showSurvey',
							{tags:surveyTags},
							function(success) {
							},
							function(error) {
								forge.logging.info("Error: " + error.message);
							}
		);
	});
});
