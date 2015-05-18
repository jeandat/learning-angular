'use strict';

module.exports = function (config) {
    config.set({
        basePath: '..',
        files: [
            'build/public/js/vendors.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'build/public/js/templates.js',
            'build/public/js/app.js',
            'test/unit/**/*.js'],
        singleRun: true,
        logLevel: 'INFO',
        frameworks: ['jasmine'],
        reporters: ['progress', 'coverage', 'junit'],
        preprocessors: {
            'build/gen/js/**/*.js': ['coverage']
        },
        coverageReporter: {
            type: 'html',
            dir: 'doc/test/coverage'
        },
        junitReporter: {
            outputFile: 'doc/test/junit/test-results.xml',
            suite: ''
        },
        browsers: ['Chrome', 'Firefox']
    });
};