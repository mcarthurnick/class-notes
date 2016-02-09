//write a function for every number between 1 - 100, every multile of 3 return fizz
//multiple of 5 return buzz, multiple of 3 and 5 return fizz buzz.

for(i = 0; i <= 20; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log("fizzBuzz");
  }else if(i % 3 === 0){
    console.log("fizz");
  }else if(i % 5 === 0){
    console.log("buzz");
  }else{
    console.log(i);
  }
}
