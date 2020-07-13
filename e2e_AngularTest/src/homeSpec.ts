import {browser} from 'protractor'
describe('Briwsr API simple test',() =>{
    it('Angular page should lunched', () => {
        browser.get("https://material.angular.io/")
    })
})