const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    framework: 'jasmine',
    specs: ['./dist/out-tsc/homeSpec.js'],
    directConnect: true,
    chromeOptions: {
        // --allow-file-access-from-files - allow XHR from file://
        args: ['allow-file-access-from-files']
    },
    onPrepare(){
        require('ts-node').register({
            project:require('path').join(__dirname,'./tsconfig.json')
        });
    browser.ignoreSynchronization = true;
    browser.waitForAngular();
    browser.sleep(500); 
    browser.resetUrl = 'file:///';
    },
}