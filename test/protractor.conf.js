exports.config = {
    specs: [
        'e2e/**/*.js'
    ],
    rootElement: '.js-app',
    directConnect: true,
    capabilities:{
        browserName: 'chrome'
    },
    framework: 'jasmine2'
};
