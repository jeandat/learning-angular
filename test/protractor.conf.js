var _ = require('lodash');
exports.config = {
    specs: [
        'e2e/**/*.js'
    ],
    rootElement: '.js-app',
    directConnect: true,
    getMultiCapabilities: function () {

        var capabilities = _({
            chrome: {browserName: 'chrome'},
            firefox: {browserName: 'firefox'}
        });

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
