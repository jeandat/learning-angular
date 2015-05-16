'use strict';

module.exports = {
    jsVendor: {
        files: ['bower_components/**', 'vendor/**/*.js'],
        tasks: ['concat:js']
    },
    jsApp: {
        files: ['src/**/*.js', 'src/**/*.jade', '.jshintrc', '.jscsrc'],
        tasks: [
            'newer:jshint:dev',
            'newer:jscs',
            'newer:replace',
            'newer:jade:index',
            'html2js',
            'ngAnnotate']
    },
    cssApp: {
        files: ['src/**/*.styl'],
        tasks: ['newer:replace', 'stylus:dev', 'autoprefixer:app']
    },
    cssVendor: {
        files: ['vendor/**/*.css'],
        tasks: ['concat:css', 'autoprefixer:vendor']
    }
};