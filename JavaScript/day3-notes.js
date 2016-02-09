//Create a function called slice that takes 3 parameters. An array, starting index
// and final index that duplicates the behavior of the slice method array.
// Recreate Array Slice Function
function slice(ary, startIndex, endIndex) {
  var newArr = [];
  for (var i = startIndex; i < endIndex + 1; i++) {
    newArr.push(ary[i]);
  }
  return newArr;
}

var arr = [1,2,3,4,5];
console.log(slice(arr, 1, 3));


// Player
//Old Function
/*function fireWeapon(player) {
  console.log(player.weapon.name);
}
*/

//New Function using 'this' keyword
function fireWeapon() {
  console.log(this.weapon.name);
}

var player =
{
  name: 'Nick',
  weapon: {
    name: 'Gloc 40',
  },
  fireWeapon: fireWeapon
};


var player2 =
{
  name: 'Freddy',
  weapon: {
    name: '9mm',
  },
  fireWeapon: fireWeapon
};
/*
fireWeapon(player);
fireWeapon(player2);
*/
player.fireWeapon();
player2.fireWeapon();

//Where the function is Invoked not declared that you look for the keyword "this".
//So player and player2 because it's being Invoked.

//Implicit Binding

function fireWeapon() {
  console.log(this.weapon.name);
}

var player =
{
  name: 'Nick',
  weapon: {
    name: 'Gloc 40',
  },
  attack: fireWeapon
};

player.attack();
console.log(player.name);

//Explicit Binding

function fireWeapon(strength, range) {
  console.log(strength);
  console.log(range);
  console.log(this.weapon.name);
}

//method that comes with the fireWeapon function
// If we don't invoke it with call, it will assign 'this' to the global
//window variable.
var player = {
  name: 'nick',
  weapon: {
    name: 'knife'
  },
  attack: fireWeapon
};

fireWeapon.call(player, 10, 5);          //"c" call = commas seperate
fireWeapon.apply(player, [10, 5]);      //"a" apply = array seperate

function multiplierFactory(multiply) {
  return function (valToMultiply) {
    return valToMultiply * multiplyBy;
  }
}

var double = multiplierFactory(2);
console.log(double(5));

function multiplier(multiplyBy) {
  return this.val * multiplyBy;
}
var result = multiplier.bind({val: 10});
console.log(result(2));

//bind will not invoke the multiplier function.

function PlayerCreator(playerName, playerWeapon) {
  var player = {
    name: playerName,
    weapon: playerWeapon
  };

  return player;
}

var player = PlayerCreator('bossdagen', {name: 'pistol'});
console.log(player);
// console.log(player); returns:
/*
[object Object] {
  name: "bossdagen",
  weapon: [object Object] {
    name: "pistol"
  }
}
*/

function PlayerCreator(playerName, playerWeapon) {
  var player = {   //explicitly calling
    name: playerName,
    weapon: playerWeapon,
    fire: function() {
      console.log(this.weapon.name);
    }
  };

  return player; //explicitly returning
}

var player = PlayerCreator('bossdagen', {name: 'pistol'});
var player = PlayerCreator('matador', {name: 'cape'});

console.log(player);
console.log(player2);

//---------------------------PROTOTYPE ---------------------------

function PlayerplayerName, playerWeapon) {
  this.name = playerName;
  this.weapon = playerWeapon;
}

Player.prototype.fire = function() {
  console.log(this.weapon.name);   //returns pistol
};
// introduces 'new' in Invoking
var player = new Player('bossdagen', {name: 'pistol'});

player.fire();  //calls fire function and returns pistol
console.log(player.name); // returns bossdagen
