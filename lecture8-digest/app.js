(function () {
    'use strict';
    
    angular.module('CounterApp', [])
    .controller('CounterController', CounterController);

    CounterController.$inject=['$scope'];
    function CounterController($scope){
        $scope.oncesCounter=0;
        $scope.counter=0;

        $scope.showTheNumberOfWatchers= function(){
        console.log("# of watchers", $scope.$$watchersCount);
};
$scope.countOnce =function(){
    $scope.oncesCounter=1;

};
$scope.upCounter =function(){
    $scope.counter++;

}; 
$scope.$watch(function(){
    console.log("Digest Loop Fired!")
});
// $scope.$watch('oncesCounter', function(newValue, oldValue){
//     console.log("oldValue:", oldValue);
//     console.log("newValue:", newValue);

// });
// $scope.$watch('counter', function(cnewValue, coldValue){
//     console.log("coldValue:", coldValue);
//     console.log("cnewValue:", cnewValue);

// });
    }
    
})();