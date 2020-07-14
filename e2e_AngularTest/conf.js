exports.config = {
    framework: 'jasmine',
    specs: ['./dist/out-tsc/homeSpec.js'],
    directConnect: true,
    onPrepare(){
        require('ts-node').register({
            project:require('path').join(__dirname,'tsconfig.json')
        });
    },
    onComplete(){}
}