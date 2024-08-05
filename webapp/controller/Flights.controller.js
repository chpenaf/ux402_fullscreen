sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "christian/com/sap/training/ux402/fullscreen/ux402fullscreen/control/HoverButton"
],
function (Controller, MessageToast, HoverButton) {
    "use strict";

    return Controller.extend("christian.com.sap.training.ux402.fullscreen.ux402fullscreen.controller.Flights", {
        
        onInit: function () {
            const oRouter = this.getRouter();
            oRouter.getRoute('flights').attachMatched(this._onObjectMatched, this);
        },

        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        },

        _onObjectMatched: function (oEvent) {
            const oArgs = oEvent.getParameter('arguments');
            this._sCarrierId = oArgs.carrid;
            const oView = this.getView();
            oView.bindElement({
                path: "/UX_C_Carrier_TP('" + this._sCarrierId + "')",
                events: {
                    change: this._onBindingChange.bind(this),
                    dataRequested: function () {
                        oView.setBusy(true);
                    },
                    dataReceived: function () {
                        oView.setBusy(false);
                    }
                }
            });
        },

        _onBindingChange: function () {
            const oElementBinding = this.getView().getElementBinding();
            // No data for the binding
            if (oElementBinding && !oElementBinding.getBoundContext()){
                this.getRouter().getTargets().display('notFound');
            }
        },

        onNavBack: function () {
            const oHistory = sap.ui.core.routing.History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined){
                window.history.go(-1);
            } else {
                this.getRouter().navTo('overview', true );
            }
        },

        onHover: function (evt) {
            const sText = 
                this.getOwnerComponent().getModel("i18n").getProperty("msgSeatsAv");
            
            MessageToast.show(
                evt.getSource().getHoverText() + " " + sText, {duration: 1000}
            );
        }

    });
});
