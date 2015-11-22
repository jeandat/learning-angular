(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    function HomeController($http, $log) {

        var vm = this;
        vm.conclusions = '';
        vm.showConclusions = showConclusions;

        activate();

        ////////////////

        function activate() {
            $log.debug('HomeController instantiated');
        }

        function showConclusions() {
            $http.get('CONCLUSIONS.MD').then(function (data) {
                vm.conclusions = data.data;
            });
        }

    }

})();

