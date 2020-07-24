
import { browser, element, by, ElementFinder } from "protractor";

describe('Briwsr API simple test',() =>{
   
    beforeEach(()=> { //beforeEach function
        console.log('Before Each Called');
    });

    afterEach(()=>{
        console.log('After Each Called');
    })
    
    xit('Angular page should lunched', () => { //x or f prefix dded to focus on this spec
        browser.waitForAngularEnabled(true);
        console.log('First Testcase');
        browser.get("https://material.angular.io/")
        .then(() => (browser.getTitle()))
        .then((title)=>{(
            console.log(title));
            expect(title).toBeDefined(); 
        })
        .then(() => (browser.getCurrentUrl()))
        .then((url)=>{(
            console.log(url));
            expect(url).toBe("https://material.angular.io/");
        })
        .then(() => browser.close());
        
    })
    it('Second Testcase', () => { // x or f is prefixed to this it to disable/focus block
        browser.waitForAngularEnabled(false);
        console.log('Second Testcase');
        browser.get('https://google.com/') 
        .then(() => element(by.name('q')).click()) // then keyword is used to chain
        .then(() => element(by.name('q')).sendKeys('Test')) 
        .then(() => element(by.name('q')).getAttribute("title")) 
        .then((name) => {expect(name).toBe("Search") }); 
        browser.close();
    })
    fit('Uses ElementFinder', () => {
        browser.get("https://material.angularjs.org/latest/demo/autocomplete")
        let sampleElement: ElementFinder = element(by.css('ul#docs-menu-Demos>li:nth-child(1) a')); //ElementFinder function used here 
        sampleElement.getAttribute('innerText').then((text) => {
          console.log(text);
        });
    })
})