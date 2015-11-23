'use strict';

var modRewrite = require('connect-modrewrite');
var serveStatic = require('serve-static');

module.exports.tasks = {

    connect: {
        options: {
            base: '<%= pub %>',
            port: 9001,
            debug: true,
            middleware: function (connect, options, middlewares) {
                // Matches everything that does not contain a '.' (period)
                middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]']));
                options.base.forEach(function (base) {
                    console.log('options.base: ', base);
                    middlewares.push(serveStatic(base));
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
    },

    concurrent: {
        options: {
            logConcurrentOutput: true
        },
        // Launch a web server and a watch server.
        serve: {
            tasks: ['connect:dev:keepalive', 'chokidar']
        },
        // Launch a karma server in watch mode for Chrome only and a watch server.
        // When developing a test case for the first time, I launch karma in watch mode and test in chrome only to have
        // a quick feedback.
        wtest: {
            tasks: ['karma:dev_mono_watch', 'chokidar']
        }
    }

};