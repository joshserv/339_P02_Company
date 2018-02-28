'use strict';


//TESTING

console.log("JavaScript is running.");

var width = window.innerWidth;

console.log("Window width: " + width + "px");


//QUERY SELECTION
var hamburger = document.querySelector("#hamburger");

var navUL = document.querySelector("#main-nav ul");

if(width < 800) {
    console.log("Window is less than 600px, activating hamburger");
    
    navUL.classList.add("hidden");
}

hamburger.addEventListener("click",
                          
    function(){
        console.log("hamburger has been clicked");
    
        navUL.classList.toggle("hidden");
    }
)