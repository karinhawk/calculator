"use strict";

var numbers = document.querySelectorAll('.calculator-number');
var operators = document.querySelectorAll('.calculator-operator');
var output = document.querySelector('.calculator__output');
var clearButton = document.querySelector('#calculator-AC');
var equals = document.querySelector('.calculator-equals');
console.log(output); //let firstNumber forEach  add eventListener which stores value when click on butt0n

var totalArray = [];
var firstNumber = [];
var secondNumber = [];
numbers.forEach(function (number) {
  number.addEventListener("click", function () {
    if (!totalArray.includes(operators)) {
      firstNumber.push(number.value);
      totalArray.push(number.value);
      output.textContent = totalArray.join("");
      return firstNumber;
    } else {
      secondNumber.push(number.value);
      totalArray.push(number.value);
      output.textContent = totalArray.join("");
      return secondNumber;
    }
  });
});
console.log(totalArray);
console.log(firstNumber);
console.log(secondNumber);
var operatorArr = [];
operators.forEach(function (operator) {
  operator.addEventListener("click", function () {
    operatorArr.push(operator.value);
    totalArray.push(operator.value);
    output.textContent = totalArray.join("");
    return operatorArr;
  });
});
console.log(operatorArr); //this will clear the display and clear the arrays to start over each time!

clearButton.addEventListener("click", function (event) {
  output.textContent = " ";
  firstNumber = [];
  secondNumber = [];
  operatorArr = [];
  totalArray = [];
}); //when equals- text content is answer
//equals button
//switch case the operators to functions!!!!!!!
//style the text and align on the right hand side maybe

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