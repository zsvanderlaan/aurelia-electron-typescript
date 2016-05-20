System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var electron;
    return {
        setters: [],
        execute: function () {
            electron = require('electron');
            exports_1("default", electron);
            
            var keys = Object.keys(electron);

            keys.forEach(function (key) {
                console.log(key);
                exports_1(key, electron[key]);
            });

        }
    }
});
