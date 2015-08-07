exports.config = {
    specs: [
        'e2e/**/*.js'
    ],
    rootElement: '.js-app',
    directConnect: true,
    multiCapabilities:[{
        browserName: 'chrome'
    },{
        browserName: 'firefox'
    }],
    framework: 'jasmine2'
};
