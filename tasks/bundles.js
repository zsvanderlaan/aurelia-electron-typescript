var paths = require('./paths');

var bundles = { 
    'aurelia': {
        "includes": [
            "aurelia-framework",
            "aurelia-bootstrapper",
            "aurelia-event-aggregator",
            "aurelia-fetch-client",
            "aurelia-router",
            "aurelia-animator-css",
            "aurelia-templating-binding",
            "aurelia-polyfills",
            "aurelia-templating-resources",
            "aurelia-templating-router",
            "aurelia-loader-default",
            "aurelia-history-browser",
            "aurelia-logging-console",
            "aurelia-dialog",
            "aurelia-dialog/**/*.css!text",
            "aurelia-dialog/**/*.html!text",
            "fetch",
            "jquery",
            "text",
            "electron"
        ],
        "options": {
            "inject": false,
            "minify": true,
        }
    }
};

var corrected = [];

Object.keys(bundles).forEach((key)=>{        
    corrected[paths.output + key] = bundles[key];
});

module.exports = corrected;

