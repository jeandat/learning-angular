angular.module('app').controller('LoaderController', function ($scope, $log, $timeout) {

    $log.debug('Loader Controller');

    var $loader;

    // Get a reference to the DOM element after DOMContentLoaded
    $(function(){
        $loader = $('#loader');
    });

    $scope.$on('loader:show', function () {
        if(!$loader) return;
        $loader.show();
    });

    $scope.$on('loader:hide', function () {
        if(!$loader) return;
        $loader.hide();
        $scope.error = null;
    });

    $scope.$on('loader:error', function (event, error) {
        if(!$loader) return;
        $scope.error = error.status === 0 ? 'Networking error' : 'Error';
        $loader.show();
        $timeout(function(){$loader.hide();}, 3000);
    });

});