"use strict";

var numbers = document.querySelectorAll(".calculator-number");
var operators = document.querySelectorAll(".calculator-operator");
var output = document.querySelector(".calculator__output");
var clearButton = document.querySelector("#calculator-AC");
var equals = document.querySelector(".calculator-equals");
console.log(operators); //let firstNumber forEach  add eventListener which stores value when click on butt0n
//set the variables as strings to be able to put things into them later

var totalOutput = "";
var firstNumber = "";
var secondNumber = "";
var operator = ""; //NUMBERS
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
}; //switch case function= pull when equals is clicked
//parse float to turn string numbers into numbers and allow for decimal calculations


var handleOperator = function handleOperator() {
  switch (operator) {
    case "+":
      additionResult = addition(parseFloat(firstNumber), parseFloat(secondNumber));
      output.textContent = additionResult;
      break;

    case "-":
      subtractionResult = subtraction(parseFloat(firstNumber), parseFloat(secondNumber));
      output.textContent = subtractionResult;
      break;

    case "÷":
      divisionResult = division(parseFloat(firstNumber), parseFloat(secondNumber));
      output.textContent = divisionResult;
      break;

    case "x":
      multiplicationResult = multiplication(parseFloat(firstNumber), parseFloat(secondNumber));
      output.textContent = multiplicationResult;
      break;

    case "%":
      percentageResult = percentageConversion(parseFloat(firstNumber));
      output.textContent = percentageResult;
  }

  firstNumber = "";
  secondNumber = "";
  operator = "";
  totalOutput = "";
};

equals.addEventListener("click", handleOperator);