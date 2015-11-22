(function () {
    'use strict';

    angular
        .module('app')
        .controller('ComicListController', ComicListController);

    function ComicListController($log, comicService) {

        var vm = this;
        vm.novels = comicService.graphicNovels().$object;

        activate();

        ////////////////

        function activate() {
            $log.debug('ComicListController instantiated');
        }
    }

})();

