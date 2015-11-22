(function () {
    'use strict';

    angular
        .module('app')
        .config(appConfig)
        .config(routeConfig)
        .config(restConfig)
        .config(httpConfig);

    function appConfig($compileProvider) {
        // Remove angular debug info in DOM when compiling for production
        $compileProvider.debugInfoEnabled('@@env' === 'dev');
    }

    function routeConfig($routeProvider, $locationProvider) {

        // Disable hashbang mode if possible
        $locationProvider.html5Mode(true);


        // Define app routes
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.jade',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .when('/comic', {
                templateUrl: 'comic/comic-list.jade',
                controller: 'ComicListController',
                controllerAs: 'vm'
            })
            .when('/comic/:id', {
                templateUrl: 'comic/comic-detail.jade',
                controller: 'ComicDetailController',
                controllerAs: 'vm'
            })
            .when('/character', {
                templateUrl: 'character/character-list.jade',
                controller: 'CharacterListController',
                controllerAs: 'vm'
            })
            .otherwise('/');

    }

    // Restangular configuration
    function restConfig(RestangularProvider) {

        // All xhr requests url will have this prefix
        RestangularProvider.setBaseUrl('http://gateway.marvel.com:80/v1/public');

        // All xhr requests will contain the apikey parameter
        RestangularProvider.setDefaultRequestParams({apikey: '0a52dbf67ba6feb10084654c8a41e770'});

        // Define which property in JSON responses contains functional data
        RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response) {

            var results = data && data.data && data.data.results;

            var parseError = function (res) {
                if (!data) {
                    res.status = response.status;
                    return res;
                }
                else if (data.data && !results) {
                    res.status = data.data.code;
                    res.message = data.data.status;
                    return res;
                }
                else {
                    return res;
                }
            };

            var res;

            switch (operation) {
                case 'getList':
                    res = parseError([]);
                    return res.status != null ? res : results;
                case 'get':
                    res = parseError({});
                    return res.status != null ? res : results[0];
                default:
                    res = parseError({});
                    return res.status != null ? res : data.data;
            }
        });

        // Define which property in JSON responses contains the self link
        RestangularProvider.setRestangularFields({
            selfLink: 'resourceURI'
        });

    }

    function httpConfig($httpProvider) {

        // This http interceptor defines a basic loader mechanism based only on networking activity.
        $httpProvider.interceptors.push(function ($rootScope) {
            return {
                request: function (config) {
                    $rootScope.$broadcast('loader:show');
                    return config;
                },

                responseError: function (rejection) {
                    $rootScope.$broadcast('loader:error', rejection);
                    return rejection;
                },

                response: function (response) {
                    $rootScope.$broadcast('loader:hide');
                    return response;
                }
            };
        });
    }

})();

