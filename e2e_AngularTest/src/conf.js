exports.config = {
    framework: 'jasmine',
    specs: ['spec.js'],
    directConnect: true,
    onPrepare(){
        require('ts-node').register({
            project:require('path').join(__dirname,'./tsconfig.json')
        });
    },
    onComplete(){}
}