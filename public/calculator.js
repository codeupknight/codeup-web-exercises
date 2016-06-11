var numberButtonVar = document.getElementsByClassName("numberButton");
var operatorButtonVar = document.getElementsByClassName("operatorButton");
var numberInputOne = 0;
var numberInputTwo = 0;
var operatorButtonValue;
var visibleInput = document.getElementById("display");
(function populateButtons() {
	for (var i = 0; i < numberButtonVar.length; i++) {
		if (i < (numberButtonVar.length - 1)) {
			numberButtonVar[i].innerHTML = i + 1;
		} else {
			numberButtonVar[i].innerHTML = 0;
		}
	}
})();
function numberButtonListener() {
	var numberButtonValue = this.getAttribute("data-value");
	visibleInput.value += numberButtonValue;
	numberInputOne = numberInputOne + numberButtonValue;
	console.log(numberInputOne);
}
function operatorButtonListener() {
	operatorButtonValue = this.innerHTML;
	visibleInput.value += " " + operatorButtonValue + " ";
	for (var i = 0; i < numberButtonVar.length; i++	) {
		numberButtonVar[i].removeEventListener('click', numberButtonListener, false);
		numberButtonVar[i].addEventListener('click', numberButtonListenerTwo, false);
	}
}
function numberButtonListenerTwo() {
	var numberButtonValue = this.getAttribute("data-value");
	visibleInput.value += numberButtonValue;
	numberInputTwo = parseInt(numberInputTwo + numberButtonValue);
}
function equalButtonListener() {
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
	numberInputOne = "";
	numberInputTwo = "";
	operatorButtonValue = "";
}
function clearButtonListener() {
	visibleInput.value = '';
	numberButtonVar[i].addEventListener('click', numberButtonListener, false);
	numberButtonVar[i].removeEventListener('click', numberButtonListenerTwo, false);
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
document.getElementById("equalButton").addEventListener('click', equalButtonListener, false)
document.getElementById("clearButton").addEventListener('click', clearButtonListener, false)