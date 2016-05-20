System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var electron, remote, BrowserWindow, Menu, MenuItem, Tray;
    return {
        setters:[],
        execute: function() {
            electron = require('electron');
            exports_1("default",electron);
            exports_1("remote", remote = electron.remote);
            exports_1("BrowserWindow", BrowserWindow = electron.BrowserWindow);
            exports_1("Menu", Menu = electron.Menu);
            exports_1("MenuItem", MenuItem = electron.MenuItem);
            exports_1("Tray", Tray = electron.Tray);
        }
    }
});
