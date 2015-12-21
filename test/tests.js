Error.stackTraceLimit = Infinity;
require('phantomjs-polyfill');
require('es6-promise');
require('es6-shim');
require('reflect-metadata');
require('zone.js/lib/browser/zone-microtask.js');
require('zone.js/lib/browser/long-stack-trace-zone.js');
require('zone.js/lib/browser/jasmine-patch.js');
require('angular2/testing');


// Fun way to say include everything in this directory that ends with .spec.ts
var testContext = require.context('.', true, /\.spec\.ts$/);
testContext.keys().forEach(testContext);

// Select BrowserDomAdapter.
// see https://github.com/AngularClass/angular2-webpack-starter/issues/124
var domAdapter = require('angular2/src/platform/browser/browser_adapter');
domAdapter.BrowserDomAdapter.makeCurrent();