(function(){
    'use strict';
angular.module('myFirstApp', [])
.controller('myFirstController', function($scope){

$scope.name="jaskirat";
$scope.hello= function (){
return "hello";
}
})
})();