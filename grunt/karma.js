module.exports = {
    options: {
        configFile: 'test/karma.conf.js'
    },
    // Everyone should have at least this three browsers when testing.
    dev: {
        browsers: ['Chrome', 'Firefox']
    },
    // Can be useful when developing a unit test to accelerate feedback until the test is rock solid.
    // Of course, nothing should be committed until the test succeed in all browsers.
    'dev_mono_watch':{
        browsers: ['Chrome'],
        singleRun: false
    },
    // On my machine, I also have Firefox 24 which is in the scope of this project too.
    // Unfortunately, it is not possible to test it without specifying an explicit path.
    // Another solution is to write a multi-platform script which will search the binary for all platforms,
    // too expensive nonetheless.
    jean:{
        browsers: ['Chrome', 'Firefox', 'Opera', '/Applications/Firefox24.app/Contents/MacOS/firefox-bin']
    },
    // Travis configuration
    travis:{
        browsers: ['Chrome_travis_ci', 'Firefox']
    }
};