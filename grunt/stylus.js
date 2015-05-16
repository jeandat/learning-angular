'use strict';

var files = {
    '<%= build.pub %>/css/app.css': ['<%= build.gen %>/**/*.styl']
};

module.exports = {
    options:{
        paths: ['src/common/styles/']
    },
    dev:{
        options:{
            compress:false
        },
        files:files
    },
    dist:{
        files:files
    }
};