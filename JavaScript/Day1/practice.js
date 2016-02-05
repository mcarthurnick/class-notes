//takes 2 number parameters and adds them together
function addNum(num1, num2) {
  return num1 + num2;
}

//takes the addNum return and squares it.
function newNumSquared(newNum) {
  return newNum * newNum;
}

//invokes addNum function and adds the numbers together
var newNum = addNum(10,15);

//takes the value returned from addNum function and puts it as the
//parameter for the newNumberSquared variable and returns it to total.
var total = newNumSquared(newNum);

//prints the answer to the console
console.log("Your squared number is " + total);
