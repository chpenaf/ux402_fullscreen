sap.ui.define([
    "sap/ui/core/Control"
],

function (Control) {
    "use strict";

    return Control.extend('christian.com.sap.training.ux402.fullscreen.ux402fullscreen.control.PlaneInfo', {
        metadata: {
            properties: {
                "seatsMax": {
                    type: "string"
                },
                "seatsOcc": {
                    type: "string"
                }
            }
        }
    });
});