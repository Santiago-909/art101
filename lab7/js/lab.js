// index.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page. 
// Author: Santiago Meza
// Date: 5-11-2025


// array of my numbers
const numArray = [2, 19, 74, 66, 909] 
console.log("My Array", numArray)

// function that will multiply numbers by 7.2
function paperbackWriter (x) { 
  return (x * 7.2)
} 

//function testing
paperbackWriter (4) 

paperbackWriter (909) 
console.log("909", paperbackWriter(909))

paperbackWriter (8)

//will sort numbers based on the paperbackWriter function
numArray.map(paperbackWriter)

// new anon function that divides numbers by 0.9
var result = numArray.map(function(x){ 
  return x % 0.9 ;
}) 
console.log("Divided by 0.9", result)
//names variable



var mapResults = numArray.map (paperbackWriter); 


//shows results

console.log ("Results" , mapResults)


$("#output").html(mapResults)

















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
