'use strict';

module.exports = {
    options: {
        browsers: ['last 2 Chrome versions', 'last 2 Firefox versions']
    },
    vendor: {
        //options: {
        //    diff: '<%= build.pub %>/css/vendor.patch'
        //},
        files: {
            '<%= build.pub %>/css/vendor.css': '<%= build.pub %>/css/vendor.css'
        }
    },
    app: {
        //options: {
        //    diff: '<%= build.pub %>/css/app.patch'
        //},
        files: {
            '<%= build.pub %>/css/app.css': '<%= build.pub %>/css/app.css'
        }
    }
};