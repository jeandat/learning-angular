(function () {
    'use strict';

    angular
        .module('app')
        .run(function ($log) {
            // Simple hint that angular has started
            $log.info('App started');
        });

})();