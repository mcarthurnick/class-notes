angular.module('devMtIn').controller('homeCtrl', function($scope, profileService) {
  $scope.editing = false;
  $scope.myProfile = profileService.checkForProfile();
  $scope.sortOptions = [{
    display: 'Ascending'
    , value: false
  },
  {
    display: 'Descending'
    , value: true
  }];

  $scope.saveProfile = function(profile) {
    profileService.saveProfile(profile)
  }

  $scope.deleteProfile = function() {
    profileService.deleteProfile()
    }


});
