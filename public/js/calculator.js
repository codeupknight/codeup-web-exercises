var numberButtonVar = document.getElementsByClassName("numberButton");
var operatorButtonVar = document.getElementsByClassName("operatorButton");
var numberInputOne = "";
var numberInputTwo = "";
var operatorButtonValue = "";
var visibleInput = document.getElementById("display");

function numberButtonListener() {
	var numberButtonValue = this.getAttribute("data-value");
	visibleInput.value += numberButtonValue;
	numberInputOne = numberInputOne + numberButtonValue;
	console.log(numberInputOne);
}
function operatorButtonListener() {
	if (numberInputOne !== "" || numberInputTwo !== "" && operatorButtonVar === "") {
		operatorButtonValue = this.innerHTML;
		visibleInput.value += " " + operatorButtonValue + " ";
		for (var i = 0; i < numberButtonVar.length; i++	) {
			numberButtonVar[i].removeEventListener('click', numberButtonListener, false);
			numberButtonVar[i].addEventListener('click', numberButtonListenerTwo, false);
		}
		for (var i = 0; i < operatorButtonVar.length; i++	) {
		operatorButtonVar[i].removeEventListener('click', operatorButtonListener, false);
		}
	}
}
function numberButtonListenerTwo() {
	var numberButtonValue = this.getAttribute("data-value");
	visibleInput.value += numberButtonValue;
	numberInputTwo = parseInt(numberInputTwo + numberButtonValue);
	console.log(numberInputTwo);
}
function equalButtonListener() {
	numberInputOne = visibleInput.value;
		switch (operatorButtonValue) {
		case "+" :
			visibleInput.value = parseInt(numberInputOne) + parseInt(numberInputTwo)
			break;
		case "-" :
			visibleInput.value = parseInt(numberInputOne) - parseInt(numberInputTwo)
			break;
		case "*" :
			visibleInput.value = parseInt(numberInputOne) * parseInt(numberInputTwo)
			break;
		case "/" :
			visibleInput.value = parseInt(numberInputOne) / parseInt(numberInputTwo)
			break;
		}
}

function clearButtonListener() {
	numberInputOne = "";
	numberInputTwo = "";
	visibleInput.value = "";
	for (var i = 0; i < numberButtonVar.length; i++	) {
		numberButtonVar[i].addEventListener('click', numberButtonListener, false);
		numberButtonVar[i].removeEventListener('click', numberButtonListenerTwo, false);
	}
	for (var i = 0; i < operatorButtonVar.length; i++	) {
		operatorButtonVar[i].addEventListener('click', operatorButtonListener, false);
	}
}

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

document.getElementById("equalButton").addEventListener('click', equalButtonListener, false);
document.getElementById("clearButton").addEventListener('click', clearButtonListener, false);