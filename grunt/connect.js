'use strict';

var modRewrite = require('connect-modrewrite');

module.exports = {
    options: {
        port: 9001,
        base: '<%= build.pub %>',
        debug: true,
        middleware: function (connect, options, middlewares) {
            // Matches everything that does not contain a '.' (period)
            middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]']));
            options.base.forEach(function (base) {
                console.log('options.base: ', base);
                middlewares.push(connect.static(base));
            });
            return middlewares;
        }
    },
    keepalive: {
        options:{
            keepalive: true,
            open: true
        }
    },
    singlerun:{
        keepalive: false
    }
};