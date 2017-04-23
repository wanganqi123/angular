    angular.module('routeJs',['ngRoute'])
            .config(['$routeProvider', function($provider1){
                $provider1
                        .when('/c',{templateUrl:'view/cc.html'})
                        .when('/a',{
                            templateUrl:'view/aa.html',
                            controller:"ctrl"
                        })
                        .when('/b',{templateUrl:'view/bb.html',
                            controller:"ctrl"
                    })
                        .otherwise({redirectTo:'/'});
            }]);
      app.controller("ctrl",function($scope,$location){
          $scope.goToUrl=function(path) {
          $location.path(path);
      }

      })      
