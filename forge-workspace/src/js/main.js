forge.logging.info("Add JavaScript to js/main.js!");

$(function() {
	$('a').click(function () {
		forge.internal.call('at_triggerio_plugin.initialUserName');
	});
});