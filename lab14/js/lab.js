// index.js - Lab 9 
// Author: Santiago Meza
// Date: 5-13-2025


// ajax obj
const ajaxObj = {
  url: "https://corsproxy.io/?https://xkcd.com/info.0.json",
  data: {},
  type: "GET",
  dataType: "json"
};

// button listener
$("button").click(function(){
  // call ajax
  $.ajax(ajaxObj)
  // success callback
  .done(function(data){
    console.log(data);
    // pull out relevant data from results
    let title = data.title;
    let num = data.num;
    let desc = data.transcript;
    let imageUrl = data.img;
    // put data in output
    $("#output").html(`<h2>${title}</h2>`);
    $("#output").append(`<img src='${imageUrl}' />`);
    $("#output").append(`<p class='date'>Comic: ${num}</p>`);
    $("#output").append(`<p class='desc'>${desc}</p>`);
  })
  // fail callback
  .fail(function(xhr, status, error) { 
    // Error handler
    console.error(error); 
  })
  
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
