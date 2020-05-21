(function () {
    'use strict';
    
    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);
    
    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
      $scope.name = "Jaskirat";
      $scope.stateOfBeing = "hungry";
    
      $scope.sayMessage = function () {
        return "Jaskirat likes to eat healthy snacks at night!";
      };
    
      $scope.feedJaskirat = function () {
        $scope.stateOfBeing = "fed";
      };
    }
    
    })();