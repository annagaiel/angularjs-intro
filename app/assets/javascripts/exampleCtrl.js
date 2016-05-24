(function(){
  "use Strict"
  angular.module("app").controller("exampleCtrl",
    function($scope){
      $scope.messages = ["Hello", "Hi", "GoodBye"];

      $scope.alertMe = function(message){
        alert(message);
      }

      $scope.addMessage = function(message){
        $scope.messages.push(message)
      }

      window.$scope = $scope;
  });
})();
