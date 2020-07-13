// import {browser} from 'protractor'
describe('Briwsr API simple test',() =>{
    // browser.waitForAngularEnabled(true);
    it('Should navigate to Demo Page', () => {
        browser.get('https://material.angularjs.org/latest/getting-started');
        browser.getCurrentUrl()
            .then((url) => {
        expect(url).toBe('https://material.angularjs.org/latest/getting-started');
        browser.getTitle()
            .then((title)=>(console.log(title)));
        });
    });
})