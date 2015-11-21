(function () {
    'use strict';

    angular
        .module('app')
        .controller('ComicDetailController', ComicDetailController);

    function ComicDetailController($log, $routeParams, $scope, comicService, stringify) {

        //var vm = this;
        $scope.novel = comicService.graphicNovel($routeParams.id).$object;
        $scope.renderImage = renderImage;

        activate();

        ////////////////

        function activate() {
            $log.debug('ComicDetailController instantiated', stringify($routeParams));
        }

        function renderImage() {
            var img = $scope.novel.images[0];
            var url = img.path + '.' + img.extension;
            $log.debug('Image url: ', url);
            $scope.image = url;
        }
    }

})();

