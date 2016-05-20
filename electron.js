System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var electron;
    return {
        setters: [],
        execute: function () {
            electron = require('electron');
            exports_1("default", electron);
            
            Object.keys(electron).forEach(function (key) {
                exports_1(key, electron[key]);
            });
        }
    }
});
