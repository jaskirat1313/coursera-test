(function () {
  'use strict';
  
  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);
  
  MsgController.$inject = ['$scope', '$filter'];
  function MsgController($scope, $filter) {
    $scope.name = "Jaskirat";
    $scope.stateOfBeing = "hungry";
    $scope.cookieCost =.45;
  
    $scope.sayMessage = function () {
        var msg="Jaskirat likes to eat healthy snacks at night!"
        var output= $filter('uppercase')(msg);
        return output;
    };
  
    $scope.feedJaskirat = function () {
      $scope.stateOfBeing = "fed";
    };
  }
  
  })();