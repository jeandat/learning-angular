'use strict';

var extend = require('node.extend');

var files = [{
    src: ['grunt/*.js', 'src/**/*.js', 'test/unit/**/*.js']
}];

module.exports = function (grunt) {
    return {
        options: extend(grunt.file.readJSON('.jshintrc'), {
            reporter: require('jshint-stylish')
        }),
        dev: {
            options: {
                debug: true,     // true: Allow debugger statements e.g. browser breakpoints.
                devel: true      // Development/debugging (alert, confirm, etc)
            },
            files: files
        },
        dist: {
            files: files
        }
    };
};