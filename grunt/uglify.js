'use strict';

module.exports = {
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

};