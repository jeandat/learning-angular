angular.module('app').controller('ComicListController', function($log, $scope, comicService){

    $log.debug('Comic List Controller');

    $scope.novels = comicService.graphicNovels().$object;

});