(function () {
    'use strict';

    angular
        .module('app')
        .factory('comicService', comicService);

    function comicService(Restangular, $log) {

        var service = {
            graphicNovels: graphicNovels,
            graphicNovel: graphicNovel
        };

        var Comic = Restangular.all('comics');

        activate();

        return service;

        ////////////////

        function activate(){
            $log.debug('comicService instantiated:', service);
        }

        function graphicNovels() {
            return Comic.getList({format: 'graphic novel'});
        }

        function graphicNovel(id) {
            return Comic.get(id);
        }

    }

})();

