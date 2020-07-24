const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    framework: 'jasmine',
    specs: ['./dist/out-tsc/homeSpec.js'],
    directConnect: true,
    onPrepare(){
        require('ts-node').register({
            project:require('path').join(__dirname,'./tsconfig.json')
        });
        // var jasmineReporters = require('./jasmine-reporters');
        // jasmine.getEnv().addReporter(new jasmine-SpecReporter.JUnitXmlReporter(null, true, true));
    },
    // onComplete(){console.log('Good Buy!')}
}