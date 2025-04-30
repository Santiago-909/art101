// index.js - Lab 7 
// Author: Santiago Meza
// Date: 4-29-2025

// Constants

// a function that takes user input and sorts the letters of their name
function sortUserName (){
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);
  //split string to array
  var nameArray = userName.split(''); 
  console.log("nameArray =", nameArray); 
  //sort the array 
  var nameArraySort = nameArray.sort(); 
  console.log("nameArraySort =", nameArraySort); 
  //join array back to a string
  var nameSorted = nameArraySort.join(''); 
  console.log("nameSorted=", nameSorted); 
  return nameSorted;
}


//output
document.writeln("Heyo, I took the name you gave me at the beginning and I've fixed it, here it is: ", 
    sortUserName(), "</br");



















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
