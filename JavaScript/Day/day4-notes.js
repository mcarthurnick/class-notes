//Passing in function as parameter. Separate HOW from the WHAT.

function sayHello(name, greeting) {    //passing in a function ‘greeting'

     console.log(greeting( ) + ‘,’  + name);    //invoking function that is passed in.
}

function englishGreeting( ) {
     return ‘Cheerio’;
}

function spanishGreeting( ) {
     return ‘Hola’;
}

function frenchGreeting( ) {
     return ‘Bonjour’;
}

sayHello(‘Jared’, englishGreeting);    //not invoking function, just passing it in

//_____________________________//           //______________________________//

var ary = [1,2,3,4,5,6,7,8,9];
var total = 0;
for (var i = 0; i < ary.length; i++) {
  total += ary[i] ;
}
console.log(total);

//2 things being done.
    //How = Iterating (Looping)
    //What = Accumulating (+=)

//create function that describes the "How"...

function forEach(ary, action) {  //action = what we are going to do with each element in array
  for (var i = 0; i < ary.length; i++) {
      action(ary[i]);
  }
}

var arrayOfString = ['Iron Man', 'Captain America', 'Hulk'];

//forEach(ary);
forEach(arrayOfString, function(hero) {
  console.log(hero);
});

var total = 0;
forEach(ary, function(num) {
  total += num;
});
console.log(total);


//_____________________________//  NEW     //______________________________//

function forEach(ary, action) {
  for (var i = 0; i < ary.length; i++) {
      action(ary[i]);
  }
}

var player = {
  health: 100,
  hits:
  [
    {location: 'leg', damage: 10 },
    {location: 'arm', damage: 15 },
    {location: 'body', damage: 45 },
  ],
  calculateHealth: function () {
    var self = this;
    forEach(this.hits, function(hit) {
      self.health = self.health - hit.damage
    });
  }
};

player.calculateHealth();
console.log(player.health);


//______________________//  ASYNC VS SYNC //_________________________//

//Synchronous (1 by 1) - waiting for one function or thing to finish doing before it starts
//another Function

//ASynchronous - Sends out multiple requests at the same time. Then when your done...
// invoke this function and pass in the information that was given when request was
//sent out.

          // More Efficient
          // Not waiting for things to happen
          // Disadvantage - Code doesn't flow from top to bottom.
          //Example - setTimeout()

          var ary = [1,2,3,4,5,6,7,8,9];

          var ary2 = {
            [
            val: 1,
            val: 2,
            val: 3,
            val: 4,
            val: 5,
            val: 6,
            val: 7,
            val: 8,
            val: 9
            ]
          }

          function reduce(ary, reducer) { //keep running total or sum of all values
            var total = 0;

            for (var i = 0; i < ary.length; i++) {
              total = reducer(total, ary[i]);
            }
            return total;
           }

          function numberReducer(previousValue, currentItem) { //does the work
            return previousValue + currentItem;
           }

          function objectReducer(previousValue, currentItem) {
            return previousValue + currentItem.val;
          }

          var total = reduce(ary, numberReducer);
          console.log(total);
          total = reduce(ary2, objectReducer);
          console.log(total2);
