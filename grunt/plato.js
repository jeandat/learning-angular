'use strict';

module.exports = function (grunt) {
    return {
        options: {
            jshint: grunt.file.readJSON('.jshintrc')
        },
        files: {
            dest: 'doc/plato/',
            src: ['src/**/*.js']
        }
    };
};