"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe("Sample test suit for Country App", function () {
    beforeEach(function () {
        protractor_1.browser.get('file:///home/volo/Desktop/Protractor_Test/e2e_AngularTest/application.html');
    });
    it("Default vallue should be displayed", function () {
        var sampleElement = protractor_1.element(protractor_1.by.id('country')); //ElementFinder function used here 
        sampleElement.getAttribute('innerText').then(function (text) {
            console.log(text);
            expect(text).toBe('.....');
        });
        protractor_1.browser.sleep(2000);
    });
    it("Default Input should match with displayed field", function () {
        var tring = protractor_1.element(protractor_1.by.id('try'));
        tring.click();
        var abc = protractor_1.browser.switchTo().alert();
        abc.accept();
        var sampleElement = protractor_1.element(protractor_1.by.id('country'));
        sampleElement.getAttribute('innerText').then(function (text) {
            console.log(text);
            expect(text).toBe('usa');
        });
        protractor_1.browser.sleep(2000);
    });
    it("Input code should match with displayed field", function () {
        var tring = protractor_1.element(protractor_1.by.id('try'));
        tring.click();
        var abc = protractor_1.browser.switchTo().alert();
        abc.sendKeys('372');
        abc.accept();
        var sampleElement = protractor_1.element(protractor_1.by.id('country'));
        sampleElement.getAttribute('innerText').then(function (text) {
            console.log(text);
            expect(text).toBe('372');
        });
        protractor_1.browser.sleep(2000);
    });
});
//# sourceMappingURL=../../src/dist/out-tsc/homeSpec.js.map