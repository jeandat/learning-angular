angular.module('app').controller('NavbarController', function($scope, $location){

    $scope.isActive = function(path){
        return $location.path() === path ? 'active' : '';
    };

});