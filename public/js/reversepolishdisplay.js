var numberButtonVar = document.getElementsByClassName("numberButton");
var operatorButtonVar = document.getElementsByClassName("operatorButton");
var visibleInput = document.getElementById("display");
var numbersInput = [];
var operatorsInput = [];
var dataOutput = "";
var numbersInputHolder = [];

//assign data values and listeners
document.getElementById("equalButton").addEventListener('click', equalButtonListener, false);
document.getElementById("clearButton").addEventListener('click', clearButtonListener, false);
for (var i = 0; i < numberButtonVar.length; i++	) {
	numberButtonVar[i].addEventListener('click', numberButtonListener, false);
	if (i === (numberButtonVar.length - 1)) {
		numberButtonVar[i].setAttribute("data-value", 0)
	} else {
		numberButtonVar[i].setAttribute("data-value", Number(i+1))
	}
}
for (var i = 0; i < operatorButtonVar.length; i++	) {
	operatorButtonVar[i].addEventListener('click', operatorButtonListener, false);
}

//do the math
function equalButtonListener () {
	operatorButtonListener();
	while (numbersInput.length != 1) {
		switch (operatorsInput[0]) {
		case "+" :
			dataOutput = parseInt(numbersInput[0]) + parseInt(numbersInput[1]));
			numbersInput.splice(0, 2);
			numbersInput.unshift(dataOutput);
			operatorsInput.shift(0);
			break;
		case "-" :
			dataOutput = parseInt(numbersInput[0]) - parseInt(numbersInput[1])
			numbersInput.splice(0, 2);
			numbersInput.push(dataOutput);
			operatorsInput.shift(0);
			break;
		case "*" :
			dataOutput = parseInt(numbersInput[0]) * parseInt(numbersInput[1])
			numbersInput.splice(0, 2);
			numbersInput.push(dataOutput);
			operatorsInput.shift(0);
			break;
		case "/" :
			dataOutput = parseInt(numbersInput[0]) / parseInt(numbersInput[1])
			numbersInput.splice(0, 2);
			numbersInput.unshift(dataOutput);
			operatorsInput.shift(0);	
			break;
		}
	}
	var finalOutput = numbersInput[0];
	visibleInput.value = finalOutput.toFixed(3);
}
//define button listeners
function numberButtonListener() {
	visibleInput.value += this.innerHTML;
	numbersInputHolder += this.innerHTML;
	for (var i = 0; i < operatorButtonVar.length; i++	) {
		operatorButtonVar[i].addEventListener('click', operatorButtonListener, false);
	}
}
function operatorButtonListener() {
	if (numbersInput!== "") {
		visibleInput.value += " " + this.innerHTML + " ";
		operatorInputValue = this.innerHTML;
		for (var i = 0; i < operatorButtonVar.length; i++	) {
		operatorButtonVar[i].removeEventListener('click', operatorButtonListener, false);
		}
	if (operatorInputValue !== undefined) {
		operatorsInput.unshift(operatorInputValue);
	}
	numbersInput.unshift(numbersInputHolder);
	numbersInputHolder = [];
	operatorsInputValue = "";
	console.log(operatorsInput);
	console.log(numbersInput);
	}
}
function clearButtonListener() {
	numbersInput = [];
	operatorsInput = [];
	dataOutput = "";
	numbersInputHolder = [];
	visibleInput.value = "";
	for (var i = 0; i < numberButtonVar.length; i++	) {
		numberButtonVar[i].addEventListener('click', numberButtonListener, false);
		numberButtonVar[i].removeEventListener('click', numberButtonListenerTwo, false);
	}
	for (var i = 0; i < operatorButtonVar.length; i++	) {
		operatorButtonVar[i].addEventListener('click', operatorButtonListener, false);
	}
}

