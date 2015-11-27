'use strict';

module.exports = function (config) {

    var configuration = {
        basePath: '..',
        files: [
            // vendors
            'public/js/vendors.js',
            'bower_components/angular-mocks/angular-mocks.js',
            // app
            'public/js/templates.js',
            'public/js/app.js',
            // specs from `app/` and `test/unit/`
            '.tmp/**/*.spec.js',
            'test/unit/**/*.spec.js'],
        singleRun: true,
        logLevel: 'INFO',
        frameworks: ['jasmine'],
        reporters: ['progress', 'coverage', 'junit'],
        preprocessors: {
            '.tmp/**/!(*spec).js': ['coverage']
        },
        coverageReporter: {
            type: 'lcov',
            dir: 'doc/test/coverage'
        },
        junitReporter: {
            outputDir: 'doc/test/junit/'
        },
        browsers: ['Chrome', 'Firefox'],
        customLaunchers: {
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        }
    };

    config.set(configuration);
};