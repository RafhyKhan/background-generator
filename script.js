
var css = document.querySelector("h3");  //selecting the header title
var color1 = document.querySelector(".color1");  //get class from html
var color2 = document.querySelector(".color2");  //get class from html
var body = document.getElementById("gradient");


console.log(body);

function setGradient(){
//we are writing in html, body, style, bacground tag the following:
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";  //the DOM
}



color1.addEventListener("input", setGradient); //we grab the color values when u use color wheel
//than launch function Set Gradient

color2.addEventListener("input", setGradient);  //we grab the color values when u use color wheel
//than launch function set Gradient
//we dont include setGradiunt() because you launch that function EVERYTIME!

//Could instead of Action and EVent listeners, just do it on HTML code with oninput, but that doesnt allow for more flexibility



