
(function () {
    'use strict';

    angular
        .module('app')
        .controller('CharacterListController', CharacterListController);

    function CharacterListController($log, characterService, $scope) {

        activate();

        ////////////////

        function activate() {
            $log.debug('Character List Controller');
            $scope.characters = characterService.characters().$object;
        }
    }

})();

