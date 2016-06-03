function askForName(question, failureMessage) {
    var names = prompt(question);
    console.log(names);
    while (names == null) {
        alert(failureMessage);
        names = prompt(question);
    }
    return names;
}

var names = askForName("What is your mom\'s name?", "Please enter a valid name with no special characters.");

alert("Welcome " + names + ". You are the coolest.")
    
var pizza = confirm("Do you like pizza?")

if (pizza == true) {
    alert("You're a respectable person.")
} else {
    alert("You're a dispicable person.")
}