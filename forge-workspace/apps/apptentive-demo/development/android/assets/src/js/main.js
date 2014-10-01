$(function () {

	// ************************************************************************************************************************************************
	// Initialization
	// ************************************************************************************************************************************************

	forge.logging.warning("Initializing Apptentive.");

	forge.logging.warning("Setting initial email address.");
	forge.apptentive.setInitialUserEmailAddress(
		function(success) {								
			$('p.initialUserEmailAddress').text(success);
		},
		function(error) {
			forge.logging.error(error.message);
		},
		"sky@apptentive.com"
	);		

	forge.logging.warning("Adding device data.");
	forge.apptentive.addCustomDeviceData(
		function(success) {								
			$('p.initialUserEmailAddress').text(success);
		},
		function(error) {
			forge.logging.error(error.message);
		},
		"a",
		"b"
	);

	// Listen for unread messages.
	forge.logging.warning("Listening for unreadMessageCountChanged event.");
	forge.apptentive.addUnreadMessageCountChangedListener(function(count) {
		forge.logging.warning("Unread message count changed: " + count);
	});

	// Listen for surveys being finished.
	forge.logging.warning("Adding listener: apptentive.surveyFinished");
	forge.apptentive.addSurveyFinishedListener(function(completed) {
		forge.logging.warning("Survey Finished. Completed? " + completed);
	});

	forge.logging.warning("Finished initializing Apptentive.");


	// ************************************************************************************************************************************************
	// Data Methods
	// ************************************************************************************************************************************************
	
	$('button.setInitialUserName').click(function () {
		forge.apptentive.setInitialUserName(
			function(success) {
			},
			function(error) {
				forge.logging.error(error.message);
			},
			$('input.setInitialUserName').val()
		);
	});
	
	$('button.setInitialUserEmailAddress').click(function () {
		forge.apptentive.setInitialUserEmailAddress(
			function(success) {
			},
			function(error) {
				forge.logging.error(error.message);
			},
			$('input.setInitialUserEmailAddress').val() 
		);
	});

	$('button.addCustomDeviceData').click(function () {
		forge.apptentive.addCustomDeviceData(
			function(success) {
			},
			function(error) {
				forge.logging.error(error.message);
			},
			$('input.addCustomDeviceData.key').val(),
			$('input.addCustomDeviceData.value').val()
		);
	});
	
	$('button.removeCustomDeviceData').click(function () {	
		forge.apptentive.removeCustomDeviceData(
			function(success) {
			},
			function(error) {
				forge.logging.error(error.message);
			},
			$('input.removeCustomDeviceData').val()
		);
	});
	
	$('button.addCustomPersonData').click(function () {
		forge.apptentive.addCustomPersonData(
			function(success) {
			},
			function(error) {
				forge.logging.error(error.message);
			},
			$('input.addCustomPersonData.key').val(),
			$('input.addCustomPersonData.value').val()
		);
	});
	
	$('button.removeCustomPersonData').click(function () {	
		forge.apptentive.removeCustomPersonData(
			function(success) {
			},
			function(error) {
				forge.logging.error(error.message);
			},
			$('input.removeCustomPersonData').val()
		);
	});
	
	// ************************************************************************************************************************************************
	// Message Center
	// ************************************************************************************************************************************************
	
	$('button.showMessageCenter').click(function () {
		forge.apptentive.showMessageCenter(
			function() {
			},
			function(error) {
				forge.logging.error(error.message);
			}
		);
	});
	
	$('button.showMessageCenterWithCustomData').click(function () {			
		forge.apptentive.showMessageCenterWithCustomData(
			function() {
			},
			function(error) {
				forge.logging.error(error.message);
			},
			{
				'sentBy': 'trigger.io',
				'hasCustomData': true
			}
		);	
	});
	
	$('button.getUnreadMessageCount').click(function () {
		forge.apptentive.getUnreadMessageCount(
			function(count) {
				$('p.getUnreadMessageCount').text(count);
			},
			function(error) {
				forge.logging.error(error.message);
			}
		);
	});


	// ************************************************************************************************************************************************
	// Engagement
	// ************************************************************************************************************************************************
	
	$('button.engage').click(function () {	
		forge.apptentive.engage(
			function() {
			},
			function(error) {
				forge.logging.error(error.message);
			},
			$('input.engage.event').val()
		);
	});	
});
