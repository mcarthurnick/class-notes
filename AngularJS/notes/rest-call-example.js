// Whatever API you are hitting goes here

// This is Async programming yo!!

// When we call any of these methods we are going to be reveiving a javascript promise

//$http.get
//$http.put
//$http.post
//$http.delete

//http.cat  --- show Nicole

//We don't know how long this request is going to take so we need a promise so we can fire a function when the data

var promise = $http.get('https://AnyUrlCanGoHere.com/get/dogs');

promise.then(function(results) {
  var status = dogs.status;
  var data = dogs.data;
})

//same as above

$http.get('https://AnyUrlCanGoHere.com/get/dogs')
  .then(function(results) {
    if(results.status === 200) {
      var status = dogs.status;
      var data = dogs.data;
    }
  })

//this is the same things as the above example except we are passing in an object
