'use strict';

module.exports.tasks = {

    // Unit tests
    karma: {
        options: {
            configFile: 'test/karma.conf.js'
        },
        dev: {
            browsers: ['Chrome', 'Firefox']
        },
        // Can be useful when developing a unit test to accelerate feedback until the test is rock solid.
        // Of course, nothing should be committed until the test succeed in all browsers.
        'dev_mono_watch': {
            browsers: ['Chrome'],
            singleRun: false
        },
        // Example with a custom browser
        jean: {
            browsers: ['Chrome', 'Firefox', 'Opera', '/Applications/Firefox24.app/Contents/MacOS/firefox-bin']
        },
        // Travis configuration
        // It is easy to test Firefox but a little bit more difficult to test chrome.
        travis: {
            browsers: ['Chrome_travis_ci', 'Firefox']
        }
    },

    // E2E tests
    exec: {
        protractor: 'node node_modules/protractor/bin/protractor test/protractor.conf.js',
        // I failed to run e2e tests on chrome in Travis CI.
        protractor_travis: 'node node_modules/protractor/bin/protractor test/protractor.conf.js --params.browsers firefox'
    }
};