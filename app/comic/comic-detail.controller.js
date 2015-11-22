(function () {
    'use strict';

    angular
        .module('app')
        .controller('ComicDetailController', ComicDetailController);

    function ComicDetailController($log, $routeParams, comicService, stringify) {

        var vm = this;
        vm.novel = comicService.graphicNovel($routeParams.id).$object;
        vm.renderImage = renderImage;

        activate();

        ////////////////

        function activate() {
            $log.debug('ComicDetailController instantiated', stringify($routeParams));
        }

        function renderImage() {
            var img = vm.novel.images[0];
            var url = img.path + '.' + img.extension;
            $log.debug('Image url: ', url);
            vm.image = url;
        }
    }

})();

