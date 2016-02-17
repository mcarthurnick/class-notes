angular.module('devMtIn').service('profileService', function() {
  var baseUrl = 'http://connections.devmounta.in/';

  this.saveProfile = function(profile) {
    return $http({ // Requests that your profile be added to the database
      method: 'POST'
    , url: baseUrl + 'api/profiles/'
    , data: profile
    })
    .then(function(profileResponse) { // What to do after a response comes back from the server.
    localStorage.setItem('profileId', JSON.stringify({ profileId: profileResponse.data._id })); // Save our unique _id to local storage
    console.log(profileResponse);
    })
    .catch(function(err) {
      console.error(err);
    });
  }

  this.deleteProfile = function() {
  localStorage.removeItem('profile', this.checkForProfile())
}

  this.checkForProfile = function() {
  if (localStorage.getItem('profile')) {
    return JSON.parse(localStorage.getItem('profile'));
  }
}

});
