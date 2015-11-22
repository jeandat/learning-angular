(function () {
    'use strict';

    angular
        .module('app')
        .controller('NavbarController', NavbarController);

    function NavbarController($location, $log) {

        var vm = this;
        vm.isActive = isActive;

        activate();

        ////////////////

        function activate() {
            $log.debug('NavbarController instantiated');
        }

        function isActive(path) {
            return $location.path() === path ? 'active' : '';
        }
    }

})();

