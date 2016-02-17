myApp.service('ourSvc', function() {
  this.reallyLike = [];
  this.kindOfLike = [];

  this.addNewArtist = function(artistObj) {
    var artist = buildArtist(artistObj.name, artistObj.genre, artistObj.score);
    if(artistObj.score >= 50) {
      this.reallyLike.push(artist);
    }
    else if (artistObj.score < 50) {
      this.kindOfLike.push(artist);
    }
  }
    //constructor function for our artist object
    function buildArtist(name, genre, score) {
      return {
        name: $scope.name,
        genre: $scope.genre,
        score: $scope.score
      }
    }
  }

})
