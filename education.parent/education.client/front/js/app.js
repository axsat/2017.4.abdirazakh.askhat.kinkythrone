// angular.module('MyApp', ['ui.router','ngCookies','btford.socket-io', 'ngMessages','mgcrea.ngStrap'])
angular.module('MyApp', ['ui.router'])
    .config(['$locationProvider','$urlRouterProvider', '$stateProvider' ,function($locationProvider,$urlRouterProvider,$stateProvider) {
        console.log("We are here");
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('any', {
                url: '/',
                templateUrl: '../views/users.html',
                controller: function($scope,$rootScope,$state,$http){
                    $scope.mainSelectedId = null;
                    $scope.disButtons = true;
                    $scope.list=function(){
                        $http({
                            method: 'POST',
                            url: 'http://localhost:1314/education/api/mycode/list'
                        }).then(function successCallback(response) {
                            console.log("Http request run");


                            $scope.data = response.data;


                            console.log("nlknlk"+response.data[0].username);
                        }, function errorCallback(response) {
                        });
                    }
                    $scope.myFunc = function(id) {
                        if($scope.mainSelectedId==id){
                            $scope.mainSelectedId=null;
                            $scope.selectedBirthDate=null;
                            $scope.selectedSurname=null;
                            $scope.selectedName=null;
                            $scope.selectedTelephone=null;
                            $scope.selectedAddress=null;
                            $scope.selectedEmail=null;
                            $scope.selectedUserName=null;
                            $scope.selectedPassword=null;
                            $scope.selectedMainGenre=null;
                            $scope.selectedAvatar=null;
                            $scope.disButtons=true;
                        }
                        else {
                            $scope.mainSelectedId = id;
                            $scope.disButtons = false;
                            for (var i = 0; i < $scope.data.length; i++) {
                                if ($scope.data[i].id == $scope.mainSelectedId) {
                                    $scope.mainSelectedId=$scope.data[i].id;
                                    $scope.selectedBirthDate=$scope.data[i].birthDate;
                                    $scope.selectedSurname=$scope.data[i].surname;
                                    $scope.selectedName=$scope.data[i].name;
                                    $scope.selectedTelephone=$scope.data[i].telephone;
                                    $scope.selectedAddress=$scope.data[i].address;
                                    $scope.selectedEmail=$scope.data[i].email;
                                    $scope.selectedPassword=$scope.data[i].password;
                                    $scope.selectedUserName=$scope.data[i].username;
                                    $scope.selectedMainGenre=$scope.data[i].mainGenre;
                                    $scope.selectedAvatar=$scope.data[i].avatar;
                                }
                            }
                        }
                        console.log("We select id: "+id);
                    }
                    $scope.delete = function (id) {
                        var data = {
                            "id" : ""+id
                        };

                        $http.post("http://localhost:1314/education/api/mycode/delete",data,{
                                headers:{
                                    'Content-Type': "x-www-form-urlencoded"
                                }
                        }).then(function(response){
                            console.log(data);
                            console.log(response.data);
                            $scope.mainSelectedId=null;
                            $scope.selectedBirthDate=null;
                            $scope.selectedSurname=null;
                            $scope.selectedName=null;
                            $scope.selectedTelephone=null;
                            $scope.selectedAddress=null;
                            $scope.selectedEmail=null;
                            $scope.selectedUserName=null;
                            $scope.selectedPassword=null;
                            $scope.selectedMainGenre=null;
                            $scope.selectedAvatar=null;
                            $scope.disButtons=true;
                            $scope.list();
                        });
                    }
                    $scope.add = function () {
                        var data = {
                            "id" : "",
                            "username" : $scope.selectedUserName,
                            "name" : $scope.selectedName,
                            "surname" : $scope.selectedSurname,
                            "birthDate" : $scope.selectedBirthDate,
                            "telephone" : $scope.selectedTelephone,
                            "email" : $scope.selectedEmail,
                            "address" : $scope.selectedAddress,
                            "password" : $scope.selectedPassword,
                            "mainGenre" : $scope.selectedMainGenre,
                            "avatar" : $scope.selectedAvatar
                        };

                        $http.post("http://localhost:1314/education/api/mycode/add",data,{
                            headers:{
                                'Content-Type': "x-www-form-urlencoded"
                            }
                        }).then(function(response){
                            console.log(data);
                            console.log(response.data);
                            $scope.mainSelectedId=null;
                            $scope.selectedBirthDate=null;
                            $scope.selectedSurname=null;
                            $scope.selectedName=null;
                            $scope.selectedTelephone=null;
                            $scope.selectedAddress=null;
                            $scope.selectedEmail=null;
                            $scope.selectedUserName=null;
                            $scope.selectedPassword=null;
                            $scope.selectedMainGenre=null;
                            $scope.selectedAvatar=null;
                            $scope.disButtons=true;
                            $scope.list();
                        });
                    }
                    $scope.edit = function () {
                        var data = {
                            "id" : $scope.mainSelectedId,
                            "username" : $scope.selectedUserName,
                            "name" : $scope.selectedName,
                            "surname" : $scope.selectedSurname,
                            "birthDate" : $scope.selectedBirthDate,
                            "telephone" : $scope.selectedTelephone,
                            "email" : $scope.selectedEmail,
                            "address" : $scope.selectedAddress,
                            "password" : $scope.selectedPassword,
                            "mainGenre" : $scope.selectedMainGenre,
                            "avatar" : $scope.selectedAvatar
                        };

                        $http.post("http://localhost:1314/education/api/mycode/add",data,{
                            headers:{
                                'Content-Type': "x-www-form-urlencoded"
                            }
                        }).then(function(response){
                            console.log(data);
                            console.log(response.data);
                            $scope.mainSelectedId=null;
                            $scope.selectedBirthDate=null;
                            $scope.selectedSurname=null;
                            $scope.selectedName=null;
                            $scope.selectedTelephone=null;
                            $scope.selectedAddress=null;
                            $scope.selectedEmail=null;
                            $scope.selectedUserName=null;
                            $scope.selectedPassword=null;
                            $scope.selectedMainGenre=null;
                            $scope.selectedAvatar=null;
                            $scope.disButtons=true;
                            $scope.list();
                        });
                    }

                    $scope.mainSelectedId=null;
                    $scope.selectedBirthDate=null;
                    $scope.selectedSurname=null;
                    $scope.selectedName=null;
                    $scope.selectedTelephone=null;
                    $scope.selectedAddress=null;
                    $scope.selectedEmail=null;
                    $scope.selectedUserName=null;
                    $scope.selectedPassword=null;
                    $scope.selectedMainGenre=null;
                    $scope.selectedAvatar=null;

                    $scope.list();
                }
            });
    }]);
