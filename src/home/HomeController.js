angular.module('app').controller('HomeController', function($scope, $http, $log){

    $log.debug('Home Controller');

    $scope.showConclusions = function(){

        $http.get('CONCLUSIONS.MD').then(function(data){
            $scope.conclusions = data.data;
        });

    };


});