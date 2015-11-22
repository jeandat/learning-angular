(function () {
    'use strict';

    angular
        .module('app')
        .directive('comicListItem', comicListItem);

    function comicListItem() {

        var directive = {
            restrict: 'E',
            templateUrl: 'comic/comic-list-item.jade'
        };

        return directive;
    }

})();

