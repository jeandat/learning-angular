'use strict';

module.exports = {
    index: {
        dest: '<%= build.pub %>/index.html',
        src: '<%= build.gen %>/index.jade'
    }
};