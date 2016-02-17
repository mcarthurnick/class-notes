app.service('peopleService', function(errorHandler, $http){
  var baseUrl = 'https://WhereAreAllThePeople.com/api/getAllPeople/';



})


  this.getUser = function(id) {
    return $http.get(baseUrl + id).then(function(response) {
      if(response !== 200) {
        alert("crap, didn't work. Try again")
      }
      return response.data.name
    })
  }





  // --------------------- FILE FROM BEN ON LECTURE  --------------------- //

  // We are injecting $http as a dependency
app.service('peopleService', function(errorHandler, $http){
  var baseUrl = 'https://WhereAreAllThePeople.com/api/getAllPeople/';
    this.getAnyPeople = function(peopleNum) {
      return $http.get(baseUrl + peopleNum).then(function(response) {
        if(response.status !== 200) {
          alert('crappy error handeling but hey we are strapped on time')
        }
        return response.data.people;
        // The following function is another way we can check for errors
      }, function(data, status, headers, config) {
        errorHandler(data);
      })
  }
    this.getUser = function(id) {
        return $http.get(baseUrl + id).then(function(response) {
            if(response !== 200) {
                alert("crap didn't try again")
            }
            return response.data.name
        })
    }
  this.updatePeople = function(name, id) {
   return $http ({
      method: 'PUT',
      url: baseUrl + id + '/?name=' + name
     //https://WhereAreAllThePeople.com/api/getAllPeople/456/?name=PeterLopez

    }).then(function(response) {
     if(response.status !== 200) {
       alert('crappy error handeling but hey we are strapped on time')
     }
     response.data;
   })
  }
  this.addPeople = function(personObj) {
    return $http({
      method: 'POST',
      url: baseUrl,
      data: personObj
    }).then(function (response) {
     //debug to see what you got back in the response
      //var abc = 123; add breakpoint
    })
  }
  this.delete = function(id) {
    return $http({
      method: 'DELETE',
      url: baseUrl + id
    }).then(function(response) {
      //debug to see what you got back in the response
      //var abc = 123; add breakpoint
    })
  }
});
