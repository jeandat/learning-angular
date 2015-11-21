
(function () {
    'use strict';

    angular
        .module('app')
        .controller('CharacterListController', CharacterListController);

    function CharacterListController($log, characterService, $scope) {

        //var vm = this;
        $scope.characters = characterService.characters().$object;

        activate();

        ////////////////

        function activate() {
            $log.debug('CharacterListController instantiated');
        }
    }

})();

