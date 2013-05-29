$(function () {
	$('h1').click(function () {
		forge.logging.info("clicked");
		

		forge.internal.call('apptentive.setApiKey',
							{apiKey:"c751735c80f35059c7e474f5f61635e02751ae36819a30d47ee71efefc48d018"},
							function(success)
							{
								forge.logging.info("set name");
							},
							function(error)
							{
								forge.logging.info("wtf mate");
							}
		);
		/*
		var user = "Jimbo";		
		forge.internal.call('apptentive.setInitialUserName', {initialUserName:user}, function(success){});
		
		forge.internal.call('apptentive.initialUserName',
							{}, 
							function(success)
							{	
								forge.logging.info("initialUsername: " + success);
								//forge.notification.alert("Username:", success);
								//forge.internal.call('apptentive.presentMessageCenter', {});								
							}
		);		
		
		forge.internal.call('apptentive.unreadMessageCount', 
							{}, 
							function(success)
							{
								forge.logging.info("unread messages: " + success);
							}
		);
		*/
		
		forge.internal.call('apptentive.presentSurveyControllerWithNoTags',
							{},
							function(success)
							{
								forge.logging.info("tags center!");
							},
							function(error)
							{
								forge.logging.info("ERROR in tag center!");
							}
		);
	});
	
	$('p').click(function () {
	
		forge.internal.call('apptentive.presentMessageCenter',
							{},
							function(success)
							{
								forge.logging.info("message center!");
							},
							function(error)
							{
								forge.logging.info("ERROR in message center!");
							}
		);
	});
})