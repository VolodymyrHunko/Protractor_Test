describe('Protractor demo',() =>{ 
    it ('Navigate to Demo Page',()=>{
        browser.get('https://material.angularjs.org/latest/getting-started');
        browser.getCurrentUrl().then((url) => {
        expect(url).toBe('https://material.angularjs.org/latest/getting-started')
         });
    });
});