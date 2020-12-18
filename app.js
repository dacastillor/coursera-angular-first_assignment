(function (){
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) { //binder
    $scope.foodElements = "";
    $scope.foodResult = "";
    $scope.boxStyle = ""; //service that controls answer box style
    $scope.checkLunch = function(){
      var foodArray = $scope.foodElements.split(',');
      var foodCount = 0;//counts valid food elements
      if (foodArray == "") {//checks if user has not entered any value
        $scope.foodResult = "Please enter data first";
        $scope.boxStyle = "border: 1px solid red; color:red";
      }else{
        for (var i = 0; i < foodArray.length; i++) {//loop that counts food elements
          if (foodArray[i].trim().length == 0) {//checks if element is blank space or empty
          }else{
            foodCount = ++foodCount;//valid food element found
          }
        }
        if (foodCount > 0 && foodCount <= 3){//between 1 to 3 food elements
          $scope.foodResult = "Enjoy!";
          $scope.boxStyle = "border: 1px solid green; color:green";
        }else if (foodCount > 3){//more than four food elements
          $scope.foodResult = "Too much!";
          $scope.boxStyle = "border: 1px solid green; color:green";
        }else{ //only white space elements registered in array
          $scope.foodResult = "Only blank spaces will not be counted as valid food elements, Try Again";
          $scope.boxStyle = "border: 1px solid gray; color:gray";
        }
      }
    }
  }
})();
