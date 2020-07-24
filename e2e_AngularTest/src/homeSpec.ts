
import { browser, element, by, ElementFinder } from "protractor";

describe("Sample test suit for Country App", () => {
    it("Default vallue should be displayed", ()=> {
        browser.get('file:///home/volo/Desktop/Protractor_Test/e2e_AngularTest/application.html');
        let sampleElement: ElementFinder = element(by.id('country')); //ElementFinder function used here 
        sampleElement.getAttribute('innerText').then((text) => {
          console.log(text);
          expect(text).toBe('.....');
        });
        
    });
});