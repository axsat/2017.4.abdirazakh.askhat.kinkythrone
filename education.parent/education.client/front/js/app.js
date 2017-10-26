// angular.module('MyApp', ['ui.router','ngCookies','btford.socket-io', 'ngMessages','mgcrea.ngStrap'])
angular.module('MyApp', ['ui.router'])
    .config(['$locationProvider','$urlRouterProvider', '$stateProvider' ,function($locationProvider,$urlRouterProvider,$stateProvider) {
        console.log("We are here");
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('regState', {
                url: '/',
                templateUrl: '../views/register.html',
                controller: function($scope,$rootScope,$state,$http){
                    $scope.mainSelectedId = null;
                    $scope.disButtons = false;
                    $scope.whoRegisters="user";
                    $scope.list=function(){
                        $http({
                            method: 'POST',
                            url: 'http://localhost:1314/education/api/mycode/listAdmin'
                        }).then(function successCallback(response) {
                            console.log("Http request run");


                            $scope.data = response.data;


                            console.log(response.data);
                        }, function errorCallback(response) {
                        });
                    }

                    $scope.whoRegistersFunc = function (who) {

                        $scope.whoRegisters=who;
                        switch (who){
                            case 0:
                                $scope.whoRegisters="admin";
                                console.log('Admin');
                                break;
                            case 1:
                                $scope.whoRegisters="author";
                                console.log('Author');
                                break;
                            case 2:
                                $scope.whoRegisters="user";
                                console.log('User');
                                break;
                            case 3:
                                $scope.whoRegisters="moderator";
                                console.log('Moderator');
                                break;

                        }
                    }

                    $scope.register = function () {
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
                        console.log($scope.selectedBirthDate);
                        $http.post("http://localhost:1314/education/api/mycode/addAdmin",data,{
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
                        $rootScope.username=$scope.selectedUserName;
                        $rootScope.password=$scope.selectedPassword;
                        $rootScope.email=$scope.selectedEmail;

                        $state.go('adminPage');
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
            })
            .state('adminPage', {
                url: '/ad',
                templateUrl: '../views/adminPersonalPage.html',
                controller: function($scope,$rootScope,$state,$http){
                    $scope.name = "Stranger ";
                    $scope.id="";
                    $scope.username="";
                    $scope.surname="";
                    $scope.birthDate="";
                    $scope.telephone="";
                    $scope.email="";
                    $scope.address="";
                    $scope.mainGenre="";
                    $scope.avatar="";
                    $scope.works="";
                    console.log($rootScope.username);
                    $scope.selectedUserName=$rootScope.username;
                    $scope.selectedPassword=$rootScope.password;
                    $scope.selectedEmail=$rootScope.email;
                    $scope.uuid="";

                    $scope.check = function () {
                        var dataCheck = {
                            "username" : $scope.selectedUserName,
                            "email" : $scope.selectedEmail,
                            "password" : $scope.selectedPassword,
                        };

                        $http.post("http://localhost:1314/education/api/mycode/checkWhoLoggedIn",dataCheck,{
                            headers:{
                                'Content-Type': "x-www-form-urlencoded"
                            }
                        }).then(function(response){
                            console.log(dataCheck);
                            console.log(response.data.split("\"")[1].split(","));
                            $scope.response=response.data.split("\"")[1].split(",");
                            $scope.uuid=$scope.response[2];
                            $scope.username=$scope.response[3];
                            $scope.name=$scope.response[4];
                            $scope.surname=$scope.response[5];
                            $scope.birthDate=$scope.response[6];
                            $scope.telephone=$scope.response[7];
                            $scope.email=$scope.response[8];
                            $scope.address=$scope.response[9];
                            $scope.mainGenre=$scope.response[10];
                            $scope.avatar=$scope.response[11];
                            $scope.works=$scope.response[12];
                            console.log($scope.id);
                        });
                    }

                    $scope.check();


                }
            })
            .state('authorList', {
                url: '/editAuthors',
                templateUrl: '../views/editAuthors.html',
                controller: function($scope,$rootScope,$state,$http){
                    $scope.errors = "";
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
