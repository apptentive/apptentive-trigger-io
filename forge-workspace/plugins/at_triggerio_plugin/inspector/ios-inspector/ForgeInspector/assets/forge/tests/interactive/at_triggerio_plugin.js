asyncTest("Scan barcode", 1, function() {
    askQuestion("Does this device have a camera? If yes when prompted scan a barcode", {
        Yes: function () {
            forge.barcode.scanWithFormat(function (barcode) {
                askQuestion("Is this your barcode: "+barcode.value+" and was it a: "+barcode.format, {
                    Yes: function () {
                        ok(true, "User claims success");
                        start();
                    },
                    No: function () {
                        ok(false, "User claims failure");
                        start();
                    }
                });
            }, function (e) {
                ok(false, "API call failure: "+e.message);
                start();
            });
        },
        No: function () {
            ok(true, "No camera");
            start();
        }
    });
});