module.exports = function (grunt) {

    // Utility function
    global.stringify = function (object) {
        return JSON.stringify(object, null, '    ');
    };

    // Load grunt tasks on demand
    require('jit-grunt')(grunt);

    // Will print the time taken by each task at the end of the process
    require('time-grunt')(grunt);


    // Current task name
    var taskName = grunt.cli.tasks && grunt.cli.tasks[0] || 'default';


    // Load patterns file in conf/ folder.
    // You can choose which conf file will be loaded from `conf/`  folder with option `patterns`.
    // Example: `grunt --patterns dist` will load `conf/dist.js`
    // Default value is `dev`.
    var patternsFileName = grunt.option('patterns');
    // If not provided...
    if (!patternsFileName) {
        // ... shorcut to use the dev file for default task, and dist file for the dist one.
        // So, writing `grunt dist` is equivalent to `grunt dist --patterns dist`
        patternsFileName = taskName === 'dist' ? 'dist' : 'dev';
    }
    grunt.verbose.writeln('Will use patterns inside file conf/' + patternsFileName + '.js');
    var patterns = require('./conf/' + patternsFileName + '.js');
    grunt.verbose.writeln('Patterns: ' + stringify(patterns));


    // Vendors libraries are concatenated during the concat task processing.
    // You can define an option to precise which version of a lib should be used : normal or minified.
    // If option min is true and a minified version of the library is available, it will be used.
    // Default value is false.
    // Example :
    // * `grunt --min` will concatenate the minified version of vendors files
    // * `grunt --no-min' is the opposite
    // So writing `grunt <aTask>` is equivalent to `grunt <aTask> --no-min`
    var min = grunt.option('min');
    // If not provided...
    if (min == null) {
        // ... and building for production (dist task), default is true
        if (taskName === 'dist') {
            // For coherence in case someone else read this option.
            grunt.option('min', true);
            min = true;
        }
        // ... for development, default is false
        else {
            min = false;
        }
    }
    min && grunt.verbose.writeln('Will use the minified version of libraries when available');

    var options = {
        config: {
            src: "grunt/*.js"
        },
        src: 'app',
        build: {
            root: 'build',
            gen: 'build/tmp',
            pub: 'build/public'
        },
        patterns: patterns,
        min: min ? '.min' : ''
    };

    // Loads the various task configuration files
    var configs = require('load-grunt-configs')(grunt, options);

    grunt.initConfig(configs);

    // Register task aliases from aliases.yaml.
    grunt.verbose.writeln('Loading aliases…');
    yaml = require('js-yaml');
    fs = require('fs');
    var _ = require('lodash');
    var aliases = yaml.safeLoad(fs.readFileSync('grunt/aliases.yaml', 'utf8'));
    grunt.verbose.writeln('Aliases: ' + stringify(aliases) + '\n');
    _.forEach(aliases, function (value, key) {
        grunt.verbose.writeln('Registered task ' + key + ': ' + value + '\n');
        grunt.registerTask(key, value);
    });
};