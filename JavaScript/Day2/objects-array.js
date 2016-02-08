var colors = ['Brown', 'Green', 'Purple', 'Red'];

//Alert the second color in the array

colors[1];   //Red

//Add two new string to the end of the array

colors.push('White');
colors.push('Violet');
console.log(colors);    //colors = ['Brown', 'Green', 'Purple', 'Red', 'White', 'Violet']

//Alert the length of the array

colors.length;
colors.length - 1; //gets the last index of the array colors

// Remove the last string from the array and alert it

var removed = colors.pop();  // returns the value of the value removed
console.log(colors);  //colors = ['Brown', 'Green', 'Purple', 'Red', 'White']
console.log(removed); // returns Violet

//Add a new string to the front of the array
        //could cause performance issues if ran within a big array

colors.unshift(removed);
console.log(colors); //colors = ['Violet', 'Brown', 'Green', 'Purple', 'Red', 'White']

//Remove the first string in the array and alert it
removed = colors.shift();
console.log(colors);  //removes 'Violet' again from the array.. the first string

//Combine all the strings in the array into a single strings
var result = colors.join();
console.log(result); //returns "Brown,Green,Purple,Red,White"

var result = colors.join('+')

//Create another string from the array. but separate the values
//  with a plus sign instead of a coma

//Find which index contains the color 'Red'

var indexOfRed = colors.indexOf('Red');
console.log(indexOfRed);   //will return 3

//Create a new array with the 3rd and 4th coors (slice)

var colorsAfterRed = colors.slice(indexOfRed);
var colorsAfterRed = colors.slice(-2);  //you can have negative number.
//Goes from the last index of array and moves up would return ['Red', 'White']
console.log(colorsAfterRed);   //returns a new array ['Red', 'White']
          //Slice creates parameters. slice(index to start at, index to end at but not include)

colors.reverse();   //reverses the array and changes the array doesn't make copy
console.log(colors); //returns ['White', 'Red', 'Purple','Green', 'Brown']

colors.splice(1, 1, "Hot Pink");  //splice(delete at index 1, go only 1 index, add new value)
                    // would remove the 'Green' one


//Create another array with just the last 3 colors - Method 1


//Practice

// 1. Create an array
// 2. Each element in the array is an object
// 3. Each object has a name and age property
// 4. Loop over array
// 5. If age is over 10, display name

var familyArray =
[
  { name: 'Reed', age: 55 },
  { name: 'Susie', age: 50 },
  { name: 'Mason', age: 1 },
  { name: 'Syd', age: 35 }
];

for (var i = 0; i < familyArray.length; i++) {
  if(familyArray[i].age > 10) {
    console.log(familyArray[i].name);
  }
}
