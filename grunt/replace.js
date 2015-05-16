'use strict';

// Remplace les tokens de la forme '@@something'.
module.exports = function (grunt, config) {
    var patterns = config.patterns;
    return {
        build: {
            options: {
                patterns: [{
                    json: patterns
                }]
            },
            filter: 'isFile',
            expand: 'true',
            cwd: 'src',
            src: ['**'],
            dest: '<%= build.gen %>'
        }
    };
};