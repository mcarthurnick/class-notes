function Player(playerName, playerWeapon) {
  this.name = playerName;
  this.weapon = playerWeapon;
}

Player.prototype.fire = function() {
  console.log(this.weapon.name);   //returns pistol
};
// introduces 'new' in Invoking
var player = new Player('bossdagen', {name: 'pistol'});

player.fire();  //calls fire function and returns pistol
console.log(player.name);
