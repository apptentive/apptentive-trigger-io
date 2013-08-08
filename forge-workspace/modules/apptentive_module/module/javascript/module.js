// Expose the native API to javascript
forge.apptentive_module = {
    showAlert: function (text, success, error) {
        forge.internal.call('apptentive_module.showAlert', {text: text}, success, error);
    }
};

// Register for our native event
forge.internal.addEventListener("apptentive_module.resume", function () {
	alert("Welcome back!");
});
