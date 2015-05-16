angular.module('app').factory('characterService', function ($log, Restangular) {

    var Character = Restangular.all('characters');

    return {
        characters: function(){
            return Character.getList();
        }
    };

});