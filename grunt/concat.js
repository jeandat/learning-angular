'use strict';

module.exports = function (grunt, config) {

    // If the command line argument min is setted to true, we will use the minified version of a library when available.
    // Example : grunt dist --min
    var min = config.min;

    return {
        options: {
            process: function (src) {
                return src.replace(/\/\/# sourceMappingURL.*/, '');
            }
        },
        css: {
            files: [
                // css vendors files
                {
                    dest: '<%= build.pub %>/css/vendor.css',
                    src: ['vendor/bootstrap/css/bootstrap-theme.css',
                        'vendor/bootstrap/css/bootstrap.css']
                }]
        },
        js: {
            files: [
                // js vendors files
                {
                    dest: '<%= build.pub %>/js/vendors.js',
                    src: ['bower_components/jquery/dist/jquery' + min + '.js',
                        'bower_components/lodash/lodash' + min + '.js',
                        'bower_components/angular/angular' + min + '.js',
                        'bower_components/angular-route/angular-route' + min + '.js',
                        'bower_components/restangular/dist/restangular' + min + '.js',
                        'bower_components/angular-sanitize/angular-sanitize' + min + '.js',
                        'bower_components/showdown/compressed/Showdown' + min + '.js']
                }]
        }
    };
};