// index.js - Lab 9 
// Author: Santiago Meza
// Date: 5-13-2025

// go to https://yesno.wtf/api 

const ajaxObj = { 
  url: "https://yesno.wtf/api", 
  // data {},
  type: "GET",
  dataType: "json"
}


// when a user clicks on the button 
$("#sumbuton").click(function() { 
  console.log("click!");
  // use a jQuery AJAX call to fetch output 
  $.ajax(ajaxObj)
     // callback for success
  .done(function(data){
    console.log("Success!");
    console.log(data);
    // extract answer from data 
     let answer = data.answer;
    // extract image from data 
    let imageURL = data.image; 
    //build image html 
    let imageHTML = "<img src= ' " + imageURL +"'>";
    // insert the output in the output div 
    
    $("#output").html("<h1>" + answer);
     $("#output").append(imageHTML);
    
  })
  // callback for failure 
  .fail(function( xhr, status, errorThrown )  
  { 
      console.log(errorThrown + "Status:" + status);
  
  });
        

})
				
			









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
