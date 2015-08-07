'use strict';

var modRewrite = require('connect-modrewrite');

module.exports = {
    options: {
        base: '<%= build.pub %>',
        port: 9001,
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
    dev: {
        options: {
            open: true
        }
    },
    test: {
        options: {
            open: false
        }
    }
};