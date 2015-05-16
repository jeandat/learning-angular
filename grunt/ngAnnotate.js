'use strict';

module.exports = {
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
};