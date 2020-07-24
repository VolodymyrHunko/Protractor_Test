"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe("Sample test suit for Country App", function () {
    it("Default vallue should be displayed", function () {
        protractor_1.browser.get('file:///home/volo/Desktop/Protractor_Test/e2e_AngularTest/application.html');
        var sampleElement = protractor_1.element(protractor_1.by.id('country')); //ElementFinder function used here 
        sampleElement.getAttribute('innerText').then(function (text) {
            console.log(text);
        });
    });
});
//# sourceMappingURL=../../src/dist/out-tsc/homeSpec.js.map