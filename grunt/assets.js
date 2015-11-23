'use strict';

module.exports.tasks = {

    copy: {
        build: {
            files: [{
                dest: '<%= pub %>',
                src: ['CONCLUSIONS.MD'],
                expand: true
            }]
        }
    }

};