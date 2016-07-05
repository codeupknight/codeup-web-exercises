"use strict";

var userName = ""



// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
while (userName === "") {
	userName = prompt("What is your name?");
}

// TODO: Show an alert message that welcomes the user based on their input.
alert("Greeting, " + userName + "!");

// TODO: Ask the user if they like pizza.
var confirmed = confirm("Do you like pizza?");


//       Based on their answer show a creative alert message.

if (confirmed) {
	alert("Brilliant.");
} else {
alert("Dumb.");
}