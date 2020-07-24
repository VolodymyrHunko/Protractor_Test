"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Briwsr API simple test', function () {
    beforeEach(function () {
        console.log('Before Each Called');
    });
    afterEach(function () {
        console.log('After Each Called');
    });
    xit('Angular page should lunched', function () {
        protractor_1.browser.waitForAngularEnabled(true);
        console.log('First Testcase');
        protractor_1.browser.get("https://material.angular.io/")
            .then(function () { return (protractor_1.browser.getTitle()); })
            .then(function (title) {
            (console.log(title));
            expect(title).toBeDefined();
        })
            .then(function () { return (protractor_1.browser.getCurrentUrl()); })
            .then(function (url) {
            (console.log(url));
            expect(url).toBe("https://material.angular.io/");
        })
            .then(function () { return protractor_1.browser.close(); });
    });
    it('Second Testcase', function () {
        protractor_1.browser.waitForAngularEnabled(false);
        console.log('Second Testcase');
        protractor_1.browser.get('https://google.com/')
            .then(function () { return protractor_1.element(protractor_1.by.name('q')).click(); }) // then keyword is used to chain
            .then(function () { return protractor_1.element(protractor_1.by.name('q')).sendKeys('Test'); })
            .then(function () { return protractor_1.element(protractor_1.by.name('q')).getAttribute("title"); })
            .then(function (name) { expect(name).toBe("Search"); });
        protractor_1.browser.close();
    });
    fit('Uses ElementFinder', function () {
        protractor_1.browser.get("https://material.angularjs.org/latest/demo/autocomplete");
        var sampleElement = protractor_1.element(protractor_1.by.css('ul#docs-menu-Demos>li:nth-child(1) a')); //ElementFinder function used here 
        sampleElement.getAttribute('innerText').then(function (text) {
            console.log(text);
        });
    });
});
//# sourceMappingURL=../../src/dist/out-tsc/homeSpec.js.map