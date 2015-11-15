'use strict';

module.exports = function (grunt, config) {

    var patterns = config.patterns;

    return {
        tasks: {

            clean: {
                build: {
                    src: ['<%= build.root %>/']
                },
                doc: {
                    src: ['doc']
                },
                test: {
                    src: ['doc/test']
                }
            },

            bump: {
                options: {
                    files: ['package.json', 'bower.json'],
                    commitFiles: ['package.json', 'bower.json'],
                    pushTo: 'origin'
                }
            },

            // Remplace les tokens de la forme '@@something'.
            replace: {
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
            }
        }
    };
};

