"use strict";

var numbers = document.querySelectorAll(".calculator-number");
var operators = document.querySelectorAll(".calculator-operator");
var output = document.querySelector(".calculator__output");
var clearButton = document.querySelector("#calculator-AC");
var equals = document.querySelector(".calculator-equals");
var calculator = document.querySelector(".calculator"); //let firstNumber forEach  add eventListener which stores value when click on butt0n
//set the variables as strings to be able to put things into them later

var totalOutput = "";
var firstNumber = "";
var secondNumber = "";
var operator = "";
var result = 0; //NUMBERS
//

var handleNumberPress = function handleNumberPress(event) {
  var inputtedNumber = event.target.value;

  if (operator === "") {
    firstNumber += inputtedNumber.toString();
    totalOutput = firstNumber;
    output.textContent = totalOutput;
  } else {
    secondNumber += inputtedNumber.toString();
    totalOutput = "".concat(firstNumber, " ").concat(operator, " ").concat(secondNumber);
    output.textContent = totalOutput;
  }
};

numbers.forEach(function (number) {
  number.addEventListener("click", handleNumberPress);
}); //OPERATORS 

var handleOperatorPress = function handleOperatorPress(event) {
  operator = event.target.value;

  if (firstNumber === "") {
    firstNumber = result;
  }

  totalOutput = "".concat(firstNumber, " ").concat(operator);
  output.textContent = totalOutput;
};

operators.forEach(function (operator) {
  operator.addEventListener("click", handleOperatorPress);
}); //CLEAR THE DISPLAY AND ALL STRINGS!

clearButton.addEventListener("click", function (event) {
  output.textContent = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  totalOutput = "";
  calculator.style.transform = "none";
});

var addition = function addition(a, b) {
  var additionAnswer = a + b;
  return additionAnswer;
};

var subtraction = function subtraction(a, b) {
  var subtractionAnswer = a - b;
  return subtractionAnswer;
};

var multiplication = function multiplication(a, b) {
  var multiplicationAnswer = a * b;
  return multiplicationAnswer;
};

var division = function division(a, b) {
  var divisionAnswer = a / b;
  return divisionAnswer;
};

var percentageConversion = function percentageConversion(a) {
  var percentageAnswer = a / 100;
  return percentageAnswer;
};

var handleImmaturity = function handleImmaturity() {
  if (firstNumber == 5318008) {
    calculator.style.transform = 'rotate(180deg)';
    setTimeout(function () {
      alert("That's really immature...");
    }, 1000);
  } else if (firstNumber == "") {
    calculator.style.transform = 'rotate(0deg)';
  }
}; //switch case function= pull when equals is clicked
//parse float to turn string numbers into numbers and allow for decimal calculations


var handleOperator = function handleOperator() {
  switch (operator) {
    case "+":
      result = addition(parseFloat(firstNumber), parseFloat(secondNumber));
      output.textContent = result;
      break;

    case "-":
      result = subtraction(parseFloat(firstNumber), parseFloat(secondNumber));
      output.textContent = result;
      break;

    case "÷":
      result = division(parseFloat(firstNumber), parseFloat(secondNumber));
      output.textContent = result;
      break;

    case "x":
      result = multiplication(parseFloat(firstNumber), parseFloat(secondNumber));
      output.textContent = result;
      break;

    case "%":
      result = percentageConversion(parseFloat(firstNumber));
      output.textContent = result;
  }

  firstNumber = "";
  secondNumber = "";
  operator = "";
  totalOutput = "";
};

equals.addEventListener("click", handleImmaturity);
equals.addEventListener("click", handleOperator);