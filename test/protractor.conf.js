var _ = require('lodash');
exports.config = {
    specs: [
        'e2e/common/**/*.js',
        'e2e/index.spec.js',
        'e2e/**/*.js'
    ],
    rootElement: '.js-app',
    directConnect: true,
    getMultiCapabilities: function () {

        var browsers = {
            chrome: {browserName: 'chrome'},
            firefox: {browserName: 'firefox'}
        };

        var capabilities = _(browsers);

        // Check --params.browsers command-line arg
        if (!this.params.browsers) {
            return capabilities.values().value();
        }
        else {
            var browsers = this.params.browsers.split(',');
            // Using lodash to select the keys in `capabilities` corresponding to the browsers param.
            return capabilities.pick(browsers).values().value();
        }
    },
    framework: 'jasmine2'
};
