"use strict";

var numbers = document.querySelectorAll(".calculator-number");
var operators = document.querySelectorAll(".calculator-operator");
var output = document.querySelector(".calculator__output");
var clearButton = document.querySelector("#calculator-AC");
var equals = document.querySelector(".calculator-equals");
console.log(operators); //let firstNumber forEach  add eventListener which stores value when click on butt0n

var totalOutput = "";
var firstNumber = "";
var secondNumber = "";
var operator = ""; //NUMBERS

var handleNumberPress = function handleNumberPress(event) {
  var inputtedNumber = event.target.value;

  if (operator === "") {
    firstNumber += inputtedNumber.toString();
    totalOutput = firstNumber;
    output.textContent = totalOutput;
  } else {
    secondNumber += inputtedNumber.toString();
    totalOutput = firstNumber + operator + secondNumber;
    output.textContent = totalOutput;
  }
};

numbers.forEach(function (number) {
  number.addEventListener("click", handleNumberPress);
}); //   console.log(firstNumber);
//   console.log(secondNumber);
//   console.log(operator);
//OPERATORS 

var handleOperatorPress = function handleOperatorPress(event) {
  console.log(event);
  console.log(event.target.value);
  operator = event.target.value;
  totalOutput = firstNumber + operator;
  output.textContent = totalOutput;
};

operators.forEach(function (operator) {
  operator.addEventListener("click", handleOperatorPress);
}); //CLEAR THE DISPLAY AND ALL STRINGS!

clearButton.addEventListener("click", function (event) {
  output.textContent = " ";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  totalOutput = "";
});
console.log(firstNumber);
console.log(secondNumber);

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
}; //switch case function= pull when equals is clicked


var handleOperator = function handleOperator() {
  switch (operator) {
    case "+":
      additionResult = addition(parseInt(firstNumber), parseInt(secondNumber));
      output.textContent = additionResult;
      break;

    case "-":
      subtractionResult = subtraction(parseInt(firstNumber), parseInt(secondNumber));
      output.textContent = subtractionResult;
      break;

    case "÷":
      divisionResult = division(parseInt(firstNumber), parseInt(secondNumber));
      output.textContent = divisionResult;
      break;

    case "x":
      multiplicationResult = multiplication(parseInt(firstNumber), parseInt(secondNumber));
      output.textContent = multiplicationResult;
      break;
  }
};

equals.addEventListener("click", handleOperator);