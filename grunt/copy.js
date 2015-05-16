'use strict';

module.exports = {
    build: {
        files: [{
                dest: '<%= build.pub %>',
                src: ['CONCLUSIONS.MD'],
                expand: true
            }]
    }
};