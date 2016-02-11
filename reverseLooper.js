function reversedLooper(arr){
  var sub = 2 // hoisted to top, so might as well declare here
  for(var i = arr.length -1; i >= 0; i--){
  // for the length of the array (minus one)
  // loop backwards
    arr[i] = arr[i] - sub // set each index to that index minus our variable up there
    var sub = sub - 1 // then change that variable before we run the loop again
  }
  return arr // finally, return the array

console.log(reversedLooper([9,5,7,5,21,987654321]));
