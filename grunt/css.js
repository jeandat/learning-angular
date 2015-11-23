'use strict';

var stylusFiles = {
    '<%= pub %>/css/app.css': ['<%= tmp %>/**/*.styl']
};

module.exports = function () {

    return {
        tasks: {

            // Pre process stylus files
            stylus: {
                options: {
                    paths: ['<%= src %>/common/styles/']
                },
                dev: {
                    options: {
                        compress: false
                    },
                    files: stylusFiles
                },
                dist: {
                    files: stylusFiles
                }
            },

            // Concatenate css files
            concat: {
                options: {
                    process: function (src) {
                        return src.replace(/\/\/# sourceMappingURL.*/, '');
                    }
                },
                cssVendor: {
                    files: [
                        // css vendors files
                        {
                            dest: '<%= pub %>/css/vendor.css',
                            src: ['vendor/bootstrap/css/bootstrap-theme.css',
                                'vendor/bootstrap/css/bootstrap.css']
                        }]
                }
            },

            // Add/remove vendor prefixes
            autoprefixer: {
                options: {
                    browsers: ['last 2 Chrome versions', 'last 2 Firefox versions']
                },
                vendor: {
                    files: {
                        '<%= pub %>/css/vendor.css': '<%= pub %>/css/vendor.css'
                    }
                },
                app: {
                    files: {
                        '<%= pub %>/css/app.css': '<%= pub %>/css/app.css'
                    }
                }
            },

            // Watcher for css files
            chokidar: {
                cssApp: {
                    files: ['<%= src %>/**/*.styl'],
                    tasks: ['newer:replace', 'stylus:dev', 'autoprefixer:app']
                },
                cssVendor: {
                    files: ['vendor/**/*.css'],
                    tasks: ['concat:cssVendor', 'autoprefixer:vendor']
                }
            }
        }
    };
};