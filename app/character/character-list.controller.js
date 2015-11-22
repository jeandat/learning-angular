
(function () {
    'use strict';

    angular
        .module('app')
        .controller('CharacterListController', CharacterListController);

    function CharacterListController($log, characterService) {

        var vm = this;
        vm.characters = characterService.characters().$object;

        activate();

        ////////////////

        function activate() {
            $log.debug('CharacterListController instantiated');
        }
    }

})();

