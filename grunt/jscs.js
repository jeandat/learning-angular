'use strict';

module.exports = {
    options: {
        config: '.jscsrc',
        reporter: require('jscs-stylish').path
    },
    build:{
        src: ['grunt/*.js', 'src/**/*.js']
    }
};