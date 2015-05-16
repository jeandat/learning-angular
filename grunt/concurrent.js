'use strict';

module.exports = {
    options: {
        logConcurrentOutput: true
    },
    // Launch a web server and a watch server
    serve: {
        tasks: ['connect:dev', 'chokidar']
    },
    // Launch a karma server in watch mode for Chrome only and a watch server
    wtest: {
        tasks: ['karma:dev_mono_watch', 'chokidar']
    }
};