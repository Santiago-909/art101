// index.js - Lab 8 
// Author: Santiago Meza
// Date: 5-6-2025


// array of my numbers
const numArray = [2, 19, 74, 66, 909] 

// function that will multiply numbers by 7.2
function paperbackWriter (x) { 
  return (x * 7.2)
} 

//function testing
paperbackWriter (4) 

paperbackWriter (909) 

paperbackWriter (8)

//will sort numbers based on the paperbackWriter function
numArray.map(paperbackWriter)

// new anon function that divides numbers by 0.9
numArray.map(function(x){ 
  return x % 0.9 ;
}) 

//names variable
var mapResults = numArray.map (paperbackWriter); 


//shows results
console.log ("Results" , mapResults)













// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
