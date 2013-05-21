asyncTest("Set and get a pref (Number)", 1, function() {
	console.log("Put a message here.");
	alert("Put a message here."));
    var pref = "test"+Math.random();
    var value = Math.random();
    forge.prefs.set(pref, value, function () {
        forge.prefs.get(pref, function (newValue) {
            equal(newValue, value, "Preference value which was set");
            start();
        });
    });
});