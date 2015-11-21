(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    function HomeController($scope, $http, $log) {

        //var vm = this;
        $scope.conclusions = '';
        $scope.showConclusions = showConclusions;

        activate();

        ////////////////

        function activate() {
            $log.debug('HomeController instantiated');
        }

        function showConclusions() {
            $http.get('CONCLUSIONS.MD').then(function (data) {
                $scope.conclusions = data.data;
            });
        }

    }

})();

