(function(){
  "use Strict"
  angular.module("app").controller("exampleCtrl",
    function($scope){
      $scope.messages = ["Hello", "Hi", "GoodBye"];
  });
})();
