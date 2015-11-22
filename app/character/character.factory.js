(function () {
    'use strict';

    angular
        .module('app')
        .factory('characterService', characterFactory);

    function characterFactory ($log, Restangular) {

        var service = {
            characters: characters
        };

        var Character = Restangular.all('characters');

        activate();

        return service;

        ////////////////

        function activate(){
            $log.debug('characterService instantiated:', service);
        }

        function characters(){
            return Character.getList();
        }
    }

})();

