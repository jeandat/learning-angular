'use strict';

var jadeTemplates = {
    '<%= build.pub %>/js/templates.js': ['src/**/*.jade', '!src/index.jade']
};

module.exports.tasks = {

    // Pre process the only template that is converted to pure html (our main entry).
    jade: {
        index: {
            dest: '<%= build.pub %>/index.html',
            src: '<%= build.gen %>/index.jade'
        }
    },

    // Pre process all other jade templates as an angular module
    html2js: {
        options: {
            base: 'src',
            module: 'templates',
            quoteChar: '\'',
            indentString: '    ',
            singleModule: true,
            jade: {
                // This prevents auto expansion of empty arguments
                // e.g. 'div(ui-view)' becomes '<div ui-view></div>'
                //     instead of '<div ui-view='ui-view'></div>'
                doctype: 'html'
            },
            rename: function (moduleName) {
                return moduleName.replace('.jade', '');
            }
        },
        dev: {
            files: jadeTemplates
        },
        dist: {
            options: {
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true
                }
            },
            files: jadeTemplates
        }
    }
};