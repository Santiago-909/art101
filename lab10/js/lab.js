// index.js - Lab 9 
// Author: Santiago Meza
// Date: 5-13-2025

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}


// click listener for button
$("#submit").click(function(){
  // get value of input field
const userName = $("#user-name").val();
// now let's sort it
userNameSorted = sortString(userName);
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});






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
