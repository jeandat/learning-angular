'use strict';

module.exports.tasks = {

    copy: {
        build: {
            files: [{
                dest: '<%= build.pub %>',
                src: ['CONCLUSIONS.MD'],
                expand: true
            }]
        }
    }

};