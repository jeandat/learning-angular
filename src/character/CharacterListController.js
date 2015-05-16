angular.module('app').controller('CharacterListController', function($log, characterService, $scope){

    $log.debug('Character List Controller');

    $scope.characters = characterService.characters().$object;

});