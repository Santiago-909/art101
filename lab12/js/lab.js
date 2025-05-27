// index.js - Lab 9 
// Author: Santiago Meza
// Date: 5-13-2025

for (i=0; i<=200;i++){ 
  let str = ""; 
  if (i % 3 ==0){
    str +="Fizz";
  }
   if (i % 5 ==0){
    str +="Buzz";
  }
   if (i % 7 ==0){
    str +="Boom";
  }
  if (!str){ 
  str = i;
  }
  else {
    str +="!";
  }
  console.log(str);
 $("#output").append("<p class='num'>" + str + "</p>");
}


				
			









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
