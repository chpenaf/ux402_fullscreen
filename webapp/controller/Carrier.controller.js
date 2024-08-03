sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("christian.com.sap.training.ux402.fullscreen.ux402fullscreen.controller.Carrier", {
        
        onInit: function () {

        },

        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        },

        onPress: function(oEvent) {
            const oItem   = oEvent.getSource();
            const oCtx    = oItem.getBindingContext();
            const sCarrid = oCtx.getProperty('Carrid');

            this.getRouter().navTo('flights', {
                carrid: sCarrid
            }, false);

        }

    });
});
