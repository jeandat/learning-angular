exports.config = {
    baseUrl: 'http://localhost:9001',
    specs: [
        'e2e/**/*.js'
    ],
    rootElement: '.js-app',
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }],

    //framework: 'jasmine',
    //allScriptsTimeout: 11000,
    //jasmineNodeOpts: {
    //    defaultTimeoutInterval: 30000
    //}
};
