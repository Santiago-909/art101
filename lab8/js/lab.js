// index.js - Lab 8 
// Author: Santiago Meza
// Date: 5-6-2025






// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}




// add button to challenge section 
$(".challenge").append("<button id='button challenge'>Make Special</button>"); 


$(".Problems").append("<button id='button challenge'>Make Special</button>"); 

$(".Reflection").append("<button id='button challenge'>Make Special</button>"); 

// add a click listener to the challenge button
$("#challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("#challenge");
});


// let's get this party started
main();
