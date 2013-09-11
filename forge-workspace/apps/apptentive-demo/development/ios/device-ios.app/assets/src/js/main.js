$(function () {
	
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
								forge.logging.info("Error!");
							}
		);
	});
	
	$('button.setApiKey').click(function () {		
		forge.internal.call('apptentive.setApiKey',
							{apiKey:$('input.setApiKey').val()}, 
							function(success) {
							},
							function(error) {
								forge.logging.info("Error!");
							}
		);
	});
	
	$('button.initialUserName').click(function () {		
		
		forge.logging.info("start!");
		
		forge.internal.call('apptentive.initialUserName',
							{}, 
							function(success) {
								$('p.initialUserName').text(success);
							},
							function(error) {
								forge.logging.info("Error!");
							}
		);
	});
	
	
	$('button.setInitialUserName').click(function () {		
		forge.internal.call('apptentive.setInitialUserName',
							{initialUserName:$('input.setInitialUserName').val()}, 
							function(success) {
							},
							function(error) {
								forge.logging.info("Error!");
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
								forge.logging.info("Error!");
							}
		);
		
	});
	
	
	$('button.setInitialUserEmailAddress').click(function () {				
		forge.internal.call('apptentive.setInitialUserEmailAddress',
							{initialUserEmailAddress:$('input.setInitialUserEmailAddress').val()}, 
							function(success) {
							},
							function(error) {
								forge.logging.info("Error!");
							}
		);
	});
	
	$('button.addCustomData').click(function () {				
		forge.internal.call('apptentive.addCustomData',
							{
								object:$('input.addCustomData.object').val(),
								key:$('input.addCustomData.key').val()
							}, 
							function(success) {
							},
							function(error) {
								forge.logging.info("Error!");
							}
		);
	});
	
	$('button.removeCustomData').click(function () {	
		forge.internal.call('apptentive.removeCustomData',
							{
								key:$('input.removeCustomData').val()
							}, 
							function(success) {
							},
							function(error) {
								forge.logging.info("Error!");
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
								forge.logging.info("Error!");
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
								forge.logging.info("Error!");
							}
		);
	});
	
	$('button.logSignificantEvent').click(function () {						
		forge.internal.call('apptentive.logSignificantEvent',
							{}, 
							function(success) {
								
							},
							function(error) {
								forge.logging.info("Error!");
							}
		);
	});
	
	/*
	//Surveys
	*/
	
	$('button.hasSurveyAvailableWithNoTags').click(function () {							
		forge.internal.call('apptentive.hasSurveyAvailableWithNoTags',
							{}, 
							function(success) {
								$('p.hasSurveyAvailableWithNoTags').text(success);
							},
							function(error) {
								forge.logging.info("Error!");
							}
		);
	});
	
	$('button.hasSurveyAvailableWithTags').click(function () {		
		var surveyTags = $('input.hasSurveyAvailableWithTags').val().split(" ");
		forge.internal.call('apptentive.hasSurveyAvailableWithTags',
							{tags:surveyTags}, 
							function(success) {
								$('p.hasSurveyAvailableWithTags').text(success);
							},
							function(error) {
								forge.logging.info("Error!");
							}
		);
	});
	
	$('button.presentSurveyControllerWithNoTags').click(function () {		
		forge.internal.call('apptentive.presentSurveyControllerWithNoTags',
							{}, 
							function(success) {
							},
							function(error) {
								forge.logging.info("Error!");
							}
		);
	});
	
	
	$('button.presentSurveyControllerWithTags').click(function () {	
		var surveyTags = $('input.presentSurveyControllerWithTags').val().split(" ");
		forge.internal.call('apptentive.presentSurveyControllerWithTags',
							{tags:surveyTags}, 
							function(success) {
							},
							function(error) {
								forge.logging.info("Error!");
							}
		);
	});
	
});
