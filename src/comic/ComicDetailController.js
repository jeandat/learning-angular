angular.module('app').controller('ComicDetailController', function($log, $routeParams,
                                                                   $scope, comicService){

    $log.debug('Comic Detail Controller', stringify($routeParams));

    var novel = $scope.novel = comicService.graphicNovel($routeParams.id).$object;

    $scope.renderImage = function(){
        var img = novel.images[0];
        var url = img.path + '.' + img.extension;
        $log.debug('Image url: ', url);
        $scope.image = url;
    };

});