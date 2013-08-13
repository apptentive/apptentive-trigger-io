// Expose the native API to javascript
forge.apptentive = {
    showAlert: function (text, success, error) {
        forge.internal.call('apptentive.showAlert', {text: text}, success, error);
    }
};

// Register for our native event
forge.internal.addEventListener("apptentive.resume", function () {
	alert("Welcome back!");
});
