

$location         //secitons in url
$q      //promises  --> run a function, when the function is done   .then (Then do this)
$http  // Making API calls
$watch  //Already in the $scope

//Digest Cycle - Watching for changes in the view of Angular site.
//Watches for changes on the inputData, when it sees a change, it fires the function

//app.js file
myApp.controller('FirstCtrl', function($scope, ourSvc, $location) {
  $scope.items=[];

  $scope.$watch('inputData', function() {     //if inputData changes run this function
    var newItem = $scope.inputData;
    if(newItem && newItem[newItem.length - 1] == ',') {
      var withoutComma = newItem.substring(0, newItem.length - 1);
      $scope.items.push(withoutComma);
      $scope.inputData = '';
    }
  }, true);   // true needed if your watching subitems in object (Not recommended to use $watch)
})
// $watchCollection would watch a collection to check if items where being removed or added.
//   This would not watch deep into an object

//Example for $watch


//index.html file
<body>
  <main class='main-wrapper' ng-controller='FirstCtrl'>
    <input ng-model="inputData"></input>
  </main>
</body>
