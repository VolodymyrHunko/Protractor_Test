
import { browser, element, by, ElementFinder } from "protractor";
import { Console } from "console";
import {Alert} from 'selenium-webdriver';



describe("Sample test suit for Country App", () => {

  beforeEach(()=>{
    browser.get('file:///home/volo/Desktop/Protractor_Test/e2e_AngularTest/application.html');
  });

    it("Default vallue should be displayed", ()=> {
        let sampleElement: ElementFinder = element(by.id('country')); //ElementFinder function used here 
        sampleElement.getAttribute('innerText').then((text) => {
          console.log(text);
          expect(text).toBe('.....');
        });
        browser.sleep(2000);
    });
    it("Default Input should match with displayed field", () =>  {
        let tring:ElementFinder = element(by.id('try'));
        tring.click();

        let abc = browser.switchTo().alert();
        abc.accept();

        let sampleElement: ElementFinder = element(by.id('country')); 
        sampleElement.getAttribute('innerText').then((text) => {
          console.log(text);
          expect(text).toBe('usa');
        });
        browser.sleep(2000);
    })
    it("Input code should match with displayed field", () =>{
      let tring:ElementFinder = element(by.id('try'));
        tring.click();

        let abc = browser.switchTo().alert();
        abc.sendKeys('372');
        abc.accept();

        let sampleElement: ElementFinder = element(by.id('country')); 
        sampleElement.getAttribute('innerText').then((text) => {
          console.log(text);
          expect(text).toBe('372');
        });
        browser.sleep(2000);
    })
});