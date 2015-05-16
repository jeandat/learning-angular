angular.module('app', ['ngRoute', 'templates', 'restangular', 'btford.markdown'])


    // App routes
    .config(function ($routeProvider, $locationProvider, RestangularProvider, $httpProvider, $compileProvider) {

        // Remove angular debug info in DOM when compiling for production
        $compileProvider.debugInfoEnabled('@@env' === 'dev');


        // Disable hashbang mode if possible
        $locationProvider.html5Mode(true);


        // Define app routes
        $routeProvider
            .when('/', {
                templateUrl: 'home/home',
                controller: 'HomeController'
            })
            .when('/comic', {
                templateUrl: 'comic/comicList',
                controller: 'ComicListController'
            })
            .when('/comic/:id', {
                templateUrl: 'comic/comicDetail',
                controller: 'ComicDetailController'
            })
            .when('/character', {
                templateUrl: 'character/characterList',
                controller: 'CharacterListController'
            })
            .otherwise('/');


        // Restangular configuration

        // All xhr requests url will have this prefix
        RestangularProvider.setBaseUrl('http://gateway.marvel.com:80/v1/public');

        // All xhr requests will contain the apikey parameter
        RestangularProvider.setDefaultRequestParams({apikey: '0a52dbf67ba6feb10084654c8a41e770'});

        // Define which property in JSON responses contains functional data
        RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response) {

            var results = data && data.data && data.data.results;

            var parseError = function(res){
                if(!data){
                    res.status = response.status;
                    return res;
                }
                else if(data.data && !results){
                    res.status = data.data.code;
                    res.message = data.data.status;
                    return res;
                }
                else{
                    return res;
                }
            };

            var res;

            switch(operation){
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


        // This http interceptor defines a basic loader mechanism based only on networking activity.
        $httpProvider.interceptors.push(function($rootScope) {
            return {
                request: function(config) {
                    $rootScope.$broadcast('loader:show');
                    return config;
                },

                responseError: function(rejection){
                    $rootScope.$broadcast('loader:error', rejection);
                    return rejection;
                },

                response: function(response) {
                    $rootScope.$broadcast('loader:hide');
                    return response;
                }
            };
        });

    })


    // App version from package.json
    .constant('version', '@@version')


    // Simple hint that angular has started
    .run(function ($log) {

        $log.info('App started');

    });



// Global utility function
window.stringify = function(value){
    return JSON.stringify(value, null, '    ');
};