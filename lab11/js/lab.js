// index.js - Lab 9 
// Author: Santiago Meza
// Date: 5-13-2025






// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

function whatBeatle(num) { 
  let remainder = num % 4; 
  let str = "";
  if (remainder == 0) { 
  str = "Ringo Starr: Funny, quirky, loveable.  You like to spread peace and love everywhere you go."; 
  } else if (remainder == 1){ 
    str = "George Harrison: Quiet, wise, generous.  You have a calming spirit."; 
  } else if (remainder == 2){ 
    str = "John Lennon: Rebellious, outspoken, witty.  You aren't afraid to speak your mind."; 
  } else if (remainder == 3){ 
    str = "Paul McCartney: Charming, gentle, charismatic.  You love to spread joy to those around you.";
  }
  return str;
  }

$("#button").click(function(){ 
  let name = $("#input").val()
  console.log(name);
  let nameLength = name.length; 
  console.log(nameLength); 
  let beatle = whatBeatle(nameLength); 
  console.log(beatle);
  $(".input-output").html("<h2>" + beatle + "</h2>")
})









// let's get this party started
main();
