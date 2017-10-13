angular.module('MyApp', ['ui.router'])
    .config(['$locationProvider','$urlRouterProvider', '$stateProvider' ,function($locationProvider,$urlRouterProvider,$stateProvider) {
        console.log("We are here");
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('any', {
                url: '/',
                templateUrl: '../views/log.html',
                controller: function($rootScope,$state){
                    console.log("OKKK");
                }
            })
            .state('reg', {
            url: '/',
            templateUrl: '../views/reg.html',
            controller:function($rootScope,$state){
                console.log("OKKK");
            }
        });
    }]);
