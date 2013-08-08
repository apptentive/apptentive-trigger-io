$(function () {
	
	/*
	//Shared
	*/
	
	$('button.apiKey').click(function () {		
		forge.internal.call('apptentive_module.apiKey',
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
		forge.internal.call('apptentive_module.setApiKey',
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
		
		forge.internal.call('apptentive_module.initialUserName',
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
		forge.internal.call('apptentive_module.setInitialUserName',
							{initialUserName:$('input.setInitialUserName').val()}, 
							function(success) {
							},
							function(error) {
								forge.logging.info("Error!");
							}
		);
	});
	
	$('button.initialUserEmailAddress').click(function () {				
		forge.internal.call('apptentive_module.initialUserEmailAddress',
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
		forge.internal.call('apptentive_module.setInitialUserEmailAddress',
							{initialUserEmailAddress:$('input.setInitialUserEmailAddress').val()}, 
							function(success) {
							},
							function(error) {
								forge.logging.info("Error!");
							}
		);
	});
	
	$('button.addCustomData').click(function () {				
		forge.internal.call('apptentive_module.addCustomData',
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
		forge.internal.call('apptentive_module.removeCustomData',
							{
								key:$('input.removeCustomData').val(),
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
		forge.internal.call('apptentive_module.presentMessageCenter',
							{}, 
							function(success) {
							},
							function(error) {
								forge.logging.info("Error!");
							}
		);
	});
	
	$('button.unreadMessageCount').click(function () {				
		forge.internal.call('apptentive_module.unreadMessageCount',
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
		forge.internal.call('apptentive_module.showRatingFlowIfConditionsAreMet',
							{}, 
							function(success) {
								
							},
							function(error) {
								forge.logging.info("Error!");
							}
		);
	});
	
	$('button.logSignificantEvent').click(function () {						
		forge.internal.call('apptentive_module.logSignificantEvent',
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
		forge.internal.call('apptentive_module.hasSurveyAvailableWithNoTags',
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
		forge.internal.call('apptentive_module.hasSurveyAvailableWithTags',
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
		forge.internal.call('apptentive_module.presentSurveyControllerWithNoTags',
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
		forge.internal.call('apptentive_module.presentSurveyControllerWithTags',
							{tags:surveyTags}, 
							function(success) {
							},
							function(error) {
								forge.logging.info("Error!");
							}
		);
	});
	
});
