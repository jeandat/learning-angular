(function () {
    'use strict';

    angular
        .module('app')
        .controller('ComicListController', ComicListController);

    function ComicListController($log, $scope, comicService) {

        //var vm = this;
        $scope.novels = comicService.graphicNovels().$object;

        activate();

        ////////////////

        function activate() {
            $log.debug('ComicListController instantiated');
        }
    }

})();

