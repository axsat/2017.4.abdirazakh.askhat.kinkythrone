angular.module('MyApp', ['ui.router'])
    .config(['$locationProvider','$urlRouterProvider', '$stateProvider' ,function($locationProvider,$urlRouterProvider,$stateProvider) {
        console.log("We are here");
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('any', {
                url: '/',
                templateUrl: '../views/log.html',
                controller: function($scope,$rootScope,$state,$http){
                    console.log("OKKK");
                    $scope.val = "lmlm";
                    $http({
                        method: 'GET',
                        url: 'http://localhost:1314/education/api/client/list'
                    }).then(function successCallback(response) {
                        // $scope.model = response.data.clientInfoList[0].name;
                        console.log(response.data.clientInfoList[0]);
                        console.log(response.data.clientInfoList[1]);
                    }, function errorCallback(response) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
                }
            })
    }]);
