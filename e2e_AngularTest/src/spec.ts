import {browser} from 'protractor'
describe('Briwsr API simple test',() =>{
    browser.waitForAngularEnabled(true);
    it('Angular page should lunched', () => {
        browser.get("https://material.angular.io/")
        .then(() => (browser.getTitle()))
        .then((title)=>(console.log(title)))
        .then(() => (browser.getCurrentUrl()))
        .then((url)=>((console.log(url))))
        .then(() => browser.close());
    })
})