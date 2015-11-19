(function () {
    'use strict';

    angular
        .module('app')
        .factory('characterService', characterService);

    function characterService ($log, Restangular) {

        var service = {
            characters: characters
        };

        var Character = Restangular.all('characters');

        function characters(){
            return Character.getList();
        }

        return service;
    }

})();

