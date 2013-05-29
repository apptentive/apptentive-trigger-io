$(function () {
	$('h1').click(function () {
		forge.logging.info("clicked");
		

		forge.internal.call('apptentive.setApiKey',
							{apiKey:"c751735c80f35059c7e474f5f61635e02751ae36819a30d47ee71efefc48d018"},
							function(success)
							{
								forge.logging.info("Success setting API key");
							},
							function(error)
							{
								forge.logging.info("Error setting API key");
							}
		);

		
		forge.internal.call('apptentive.presentSurveyControllerWithNoTags',
							{},
							function(success)
							{
								forge.logging.info("Success presenting survey controller");
							},
							function(error)
							{
								forge.logging.info("Error presenting survey controller");
							}
		);
	});
	
	$('p').click(function () {
	
		forge.internal.call('apptentive.presentMessageCenter',
							{},
							function(success)
							{
								forge.logging.info("Success presenting message center!");
							},
							function(error)
							{
								forge.logging.info("Error presenting message center!");
							}
		);
	});
})