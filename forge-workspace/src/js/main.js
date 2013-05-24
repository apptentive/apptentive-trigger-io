$(function () {
	$('h1').click(function () {
		forge.logging.info("clicked");

		var user = "Peter";		
		forge.internal.call('apptentive.setInitialUserName', {initialUserName:user}, function(success){});
		
		forge.internal.call('apptentive.initialUserName',
							{}, 
							function(success)
							{	
								forge.logging.info("initialUsername: " + success);
								forge.notification.alert("Username:", success);
							}
		);		
	});
})