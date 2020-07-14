"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Briwsr API simple test', function () {
    protractor_1.browser.waitForAngularEnabled(true);
    it('Angular page should lunched', function () {
        protractor_1.browser.get("https://material.angular.io/")
            .then(function () { return (protractor_1.browser.getTitle()); })
            .then(function (title) { return (console.log(title)); })
            .then(function () { return (protractor_1.browser.getCurrentUrl()); })
            .then(function (url) { return ((console.log(url))); })
            .then(function () { return protractor_1.browser.close(); });
    });
});
//# sourceMappingURL=../../src/dist/out-tsc/homeSpec.js.map