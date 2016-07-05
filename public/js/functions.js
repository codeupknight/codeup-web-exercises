"use strict";


(function() {
	var name1 = prompt("What is your name?");
	while (name1 == null || name1 === '') {
		name1 = prompt("You will be vaporized immediately if you do not enter your name.");
	} 
	while (name1.length < 2) {
		name1 = prompt("I don't believe that's your name. Please enter another.");
			do { name1 = prompt("You will be vaporized immediately if you do not enter your name.");
			} while (name1 === null || name1 === ''); 
	}
	alert("Hello " + name1 + ", I see you've arrived.");

	var random = Math.floor((Math.random()*100)+1);
	alert((random % 2 !== 0) ? "You have " + random + " seconds to live." : "You will survive for another " + random + " years.")
})();