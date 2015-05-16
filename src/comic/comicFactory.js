angular.module('app').factory('comicService', function ($log, Restangular) {

    var Comic = Restangular.all('comics');

    return {
        graphicNovels: function(){
            return Comic.getList({format: 'graphic novel'});
        },
        graphicNovel: function(id){
            return Comic.get(id);
        }
    };

});