function multiplierFactory(multiplyBy) {
  function multiplier(valueToMultiply) {
    return multiplyBy * valueToMultiply;
  }
  return multiplier;
}


var double = multiplierFactory(2);

console.log(double(4));
console.log(double(4));
