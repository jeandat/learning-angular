'use strict';

var files = {
    '<%= build.pub %>/js/templates.js': ['src/**/*.jade', '!src/index.jade']
};

module.exports = {
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
        files: files
    },
    dist: {
        options:{
            htmlmin: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }
        },
        files: files
    }
};