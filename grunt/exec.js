'use strict';

module.exports = {
    protractor: 'node node_modules/protractor/bin/protractor test/protractor.conf.js',
    protractor_travis: 'node node_modules/protractor/bin/protractor test/protractor.conf.js --params.browsers firefox'
};