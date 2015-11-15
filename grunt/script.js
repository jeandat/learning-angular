'use strict';

module.exports = function (grunt, config) {

    // If the command line argument min is setted to true, we will use the minified version of a library when available.
    // Example : grunt dist --min
    var min = config.min;

    return {
        tasks: {

            // Concatenate js files
            concat: {
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
            },

            // Rewrite angular js files to be compatible with a minification process
            ngAnnotate: {
                options: {
                    add: true,
                    singleQuotes: true
                },
                build: {
                    files: [{
                        dest: '<%= build.pub %>/js/app.js',
                        src: ['<%= build.gen %>/**/*.js', 'bower_components/angular-markdown-directive/markdown.js']
                    }]
                }
            },

            // Minify js files
            uglify: {
                dist: {
                    options: {
                        mangle: true,
                        compress: true,
                        beautify: false,
                        report: 'min',
                        preserveComments: false,
                        screwIE8: true
                    },
                    files: [{
                        dest: '<%= build.pub %>/js/app.js',
                        src: '<%= build.pub %>/js/app.js'
                    }]
                }
            },

            // Watcher for js files
            chokidar: {
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
                }
            }
        }
    };
};