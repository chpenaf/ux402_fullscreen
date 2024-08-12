sap.ui.define([
    "sap/ui/core/Renderer"
],

function (Renderer) {
    "use strict";

    const PlaneInfoRenderer = 
        Renderer.extend('christian.com.sap.training.ux402.fullscreen.ux402fullscreen.control.PlaneInfoRenderer');
    PlaneInfoRenderer.apiVersion = 2;
    return PlaneInfoRenderer;
});