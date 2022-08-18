"use strict";

var numbers = document.querySelectorAll('.calculator-number');
var operators = document.querySelectorAll('.calculator-operator');
var output = document.querySelector('.calculator__output');
var clearButton = document.querySelector('#calculator-AC');
console.log(output); //let firstNumber forEach  add eventListener which stores value when click on butt0n

var firstNumber = [];
numbers.forEach(function (number) {
  number.addEventListener("click", function () {
    firstNumber.push(number.value);
    output.textContent = firstNumber.join("");
    return firstNumber;
  });
});
console.log(firstNumber);
var secondNumber = [];
numbers.forEach(function (number) {
  number.addEventListener("click", function () {
    secondNumber.push(number.value);
    output.textContent = secondNumber.join("");
    return secondNumber;
  });
});
console.log(secondNumber);
var operatorArr = [];
operators.forEach(function (operator) {
  operator.addEventListener("click", function () {
    operatorArr.push(operator.value);
    output.textContent = operatorArr.join(" ");
    return operatorArr;
  });
});
console.log(operatorArr); //this will clear the display and clear the arrays to start over each time!

clearButton.addEventListener("click", function (event) {
  output.textContent = " ";
  firstNumber = [];
  secondNumber = [];
  operatorArr = [];
});

var addition = function addition(number1, number2) {
  additionAnswer = number1 + number2;
  return additionAnswer;
};

console.log(addition(2, 6));

var subtraction = function subtraction(number1, number2) {
  subtractionAnswer = number1 - number2;
  return subtractionAnswer;
};

console.log(subtraction(12, 1));

var multiplication = function multiplication(number1, number2) {
  multiplicationAnswer = number1 * number2;
  return multiplicationAnswer;
};

console.log(multiplication(30, 2));

var division = function division(number1, number2) {
  divisionAnswer = number1 / number2;
  return divisionAnswer;
};

console.log(division(40, 2));