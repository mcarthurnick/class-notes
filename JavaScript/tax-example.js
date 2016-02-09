// Functions are fundamental to JavaScript, and take on multiple
// roles.  They can be stand-alone functions, they can be methods when assigned to a property of an object, or they can serve as a constructor for other objects.

// A simple function
function calculateTax(amount) {
  return amount * 0.10;
}

var totalTax = calculateTax(10.00);
console.log(totalTax);

// Becomes a method when we assign it to a property on an object
var order = {
  calculateTax: calculateTax
};

totalTax = order.calculateTax(20.00);
console.log(totalTax);

// Suppose we're working with order objects, that have an amount
// property
var order1 = {
  amount: 10.00
};

var order2 = {
  amount: 20.00
};

// And we want to create a family of functions to do
// calculations on order objects?
var Order = {};
Order.calculateTax = function (order) {
  return order.amount * 0.10;
};

Order.calculateTotal = function (order, tax) {
  return order.amount + tax;
};

// Now, calculate the tax and total for order1
var order1Tax = Order.calculateTax(order1);
var order1Total = Order.calculateTotal(order1, order1Tax);
console.log('Order1 Total: ' + order1Total + ', Order1 Tax: ' + order1Tax);

// All functions, when they're called/invoked, are assigned a
// "receiver".  The receiver is available inside the function using
// the keyword "this"
// We can change our order calculation functions to use "this"
Order.calculateTax = function () {
  return this.amount * 0.10;
};

Order.calculateTotal = function (tax) {
  return this.amount + tax;
};

// Implicit Binding
order1.calculateTax = Order.calculateTax;
order1.calculateTotal = Order.calculateTotal;

order1Tax = order1.calculateTax();
order1Total = order1.calculateTotal(order1Tax);
console.log('Order1 Total: ' + order1Total + ', Order1 Tax: ' + order1Tax);

// Why does this work?
// A function's receiver ('this'), is determined when
// the function is called, NOT when it's defined.

// What if we just call the method directly on Order?
var taxAmount = Order.calculateTax(); // this bound to Order object - no amount property.
console.log('Tax Amount: ' + taxAmount);

// In practice, you can expect "this" to be the object the method
// was called with.

// We can also bind a function's receiver explicitly using the call
// and apply methods of a function. (Remember, functions are
// objects, and have properties and methods).
var order2Tax = Order.calculateTax.call(order2);
var order2Total = Order.calculateTotal.call(order2, order2Tax);
console.log('Order2 Total: ' + order2Total + ', Order2 Tax: ' + order2Tax);

// Apply allows us to pass arguments using an array.  Let's redefine the
// calculateTax with some additional parameters
Order.calculateTax = function (includeCity, includeLocal) {
  var total = this.amount * 0.10;
  if (includeCity) {
    total = total + this.amount * 0.01;
  }
  if (includeLocal) {
    total = total + this.amount * 0.005;
  }

  return total;
};

var taxOptions = [true, false];
order2Tax = Order.calculateTax.apply(order2, taxOptions);

// The same function, using call
order2Tax = Order.calculateTax.call(order2, true, false);

// We can also explicitly bind a function's receiver using the bind method
// Bind doesn't invoke the function, rather it creates a new function that
// when invoked, 'this' is already bound.
var order2TaxCalculator = Order.calculateTax.bind(order2);

// Now we can invoke this new function
order2Tax = order2TaxCalculator(true, false);
console.log('Order2 Tax: ' + order2Tax);

// Bind creates a new function
console.log('Are functions the same? ' + (order2TaxCalculator === Order.calculateTax));

// We can even provide one or more (or all!) of the additional parameters
// when we call bind
order2TaxCalculator = Order.calculateTax.bind(order2, true);

// Now when we invoke the new function, we only have to provide arguments
// for the remaining parameters.  The first parameter is already bound to true
order2Tax = order2TaxCalculator(false);
console.log('Order2 Tax: ' + order2Tax);

// This is called "function Currying" and can be used with any function
// Even functions that don't rely on its receiver (this)
function multiplier(multiplyBy, num) {
  return num * multiplyBy;
}

var double = multiplier.bind(null, 2); // Just pass null for receiver
console.log('10 doubled is ' + double(10));

// Using what we've learned about explicit binding, let's create a 'constructor'
// function that creates new Order objects for us, with our calculation methods.
function OrderConstructor(amount) {
  this.amount = amount;
  this.calculateTax = Order.calculateTax;
  this.calculateTotal = Order.calculateTotal;

  return this;
}

var empty = {};
var order3 = OrderConstructor.call(empty, 30.00);
var order3Tax = order3.calculateTax(true, false);
var order3Total = order3.calculateTotal(order3Tax);
console.log('Order3 Total: ' + order3Total + ', Order3 Tax: ' + order3Tax);

// Fortunately, we've already learned an easier way of doing this using the 'new'
// keyword.  When we call new on a function, JavaScript creates a new object
// and implicitly assigns it to the function's receiver.  It also implicitly
// returns that new object from the function.  Combined with what we know
// about a functions prototype object, we can rewrite the OrderConstructor
// function
function NewOrderConstructor(amount) {
  this.amount = amount;
}

NewOrderConstructor.prototype = {
  calculateTax: Order.calculateTax,
  calculateTotal: Order.calculateTotal
};

var order4 = new NewOrderConstructor(40.00);
var order4Tax = order4.calculateTax(true, false);
var order4Total = order4.calculateTotal(order3Tax);
console.log('Order4 Total: ' + order4Total + ', Order4 Tax: ' + order4Tax);
