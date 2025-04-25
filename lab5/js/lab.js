// index.js - Lab 6 javascript
// Author: Santiago Meza
// Date: 4-24-2025

// Constants

// Functions

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


// Define Variables
myTransport = ["car", "bus", "walking", "bike", "run"]; 

//create obeject for my main ride 
myMainRide = {
  make: "Volkswagen", 
  model: "Jetta", 
  color: "Gray", 
  year: 2006, 
  // here's our function
  age: function () {
      return 2025 - this.year; 
  }
} 


// output
document.writeln("Kinds of Transportation I use: ", myTransport, "<br>");
//cool trick to let us write into the document  
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>"); 
