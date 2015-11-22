(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoaderController', LoaderController);

    function LoaderController($scope, $log, $timeout) {

        var vm = this;

        var $loader;

        $scope.$on('loader:show', showLoader);
        $scope.$on('loader:hide', hideLoader);
        $scope.$on('loader:error', showError);

        activate();

        ////////////////

        function activate() {
            $log.debug('LoaderController instantiated');

            // Get a reference to the DOM element after DOMContentLoaded
            $(function () {
                $loader = $('#loader');
            });
        }

        function showLoader() {
            if (!$loader) return;
            $loader.show();
        }

        function hideLoader() {
            if (!$loader) return;
            $loader.hide();
            vm.error = null;
        }

        function showError(event, error) {
            if (!$loader) return;
            vm.error = error.status === 0 ? 'Networking error' : 'Error';
            $loader.show();
            $timeout(function () {
                $loader.hide();
            }, 3000);
        }
    }

})();

