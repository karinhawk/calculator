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
    console.log("is getting here", firstNumber);
  } else {
    secondNumber += inputtedNumber.toString();
    totalOutput = firstNumber + operator + secondNumber;
    output.textContent = totalOutput;
    console.log("is here instead", secondNumber);
  }
};

numbers.forEach(function (number) {
  number.addEventListener("click", handleNumberPress);
});
console.log(firstNumber);
console.log(secondNumber);
console.log(operator); //OPERATORS 

var handleOperatorPress = function handleOperatorPress(event) {
  console.log(event);
  console.log(event.target.value);
  operator = event.target.value;
  totalOutput = firstNumber + operator;
  output.textContent = totalOutput;
};

operators.forEach(function (operator) {
  operator.addEventListener("click", handleOperatorPress);
}); //CLEAR THE DISPLAY!

clearButton.addEventListener("click", function (event) {
  output.textContent = " ";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  totalOutput = "";
}); //switch case function= pull when equals is clicked

var addition = function addition(firstNumber, secondNumber) {
  var additionAnswer = firstNumber + secondNumber;
  output.textContent = additionAnswer;
};

console.log(additionAnswer);

var subtraction = function subtraction(firstNumber, secondNumber) {
  var subtractionAnswer = firstNumber - secondNumber;
  output.textContent = subtractionAnswer;
  return subtractionAnswer;
};

console.log(subtractionAnswer);

var multiplication = function multiplication(firstNumber, secondNumber) {
  var multiplicationAnswer = firstNumber * secondNumber;
  return multiplicationAnswer;
};

console.log(multiplicationAnswer);

var division = function division(firstNumber, secondNumber) {
  var divisionAnswer = firstNumber / secondNumber;
  return divisionAnswer;
};

var handleOperator = function handleOperator() {
  switch (operator) {
    case "+":
      functionToPull = addition;
      break;

    case "-":
      functionToPull = subtraction;
      break;

    case "÷":
      functionToPull = division;
      break;

    case "x":
      functionToPull = multiplication;
      break;
  }
};

equals.addEventListener("click", handleOperator);