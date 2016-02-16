angular.module('devMtIn').controller('homeCtrl', function($scope) {
  $scope.myProfile = {
    name: 'Nick McArthur'
    , friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
  }
});
