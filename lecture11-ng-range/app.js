(function(){
    'use strict';
    var shoppingList1=[
        "array","string","abc", "sdf"
    ];
    var shoppingList2 = [
        {
          name: "Milk",
          quantity: "2"
        },
        {
          name: "Donuts",
          quantity: "200"
        },
        {
          name: "Cookies",
          quantity: "300"
        },
        {
          name: "Chocolate",
          quantity: "5"
        }
      ];
    angular.module('repeatApp', [])
    .controller('repeatController', repeatController);
    
    repeatController.$inject = ['$scope'];
    function repeatController($scope) 
    {
        
        $scope.shoppingList1=shoppingList1;
        $scope.shoppingList2=shoppingList2;
    
    $scope.addToList=function(){
        var newItem={
            name: $scope.newItemName,
            quantity: $scope.newItemQuantity
          };
      
          $scope.shoppingList2.push(newItem);
        };
    }
})();