"use strict";

//give values to buttons
//buttons array
//link each button to array index?
//loop through array??
//make show up on output
//calculations
var numbers = document.querySelectorAll('.calculator-number'); //let firstNumber forEach  add eventListener which stores value when click on butt0n

var firstNumber = [];
numbers.forEach(function (number) {
  number.addEventListener("click", function (event) {
    firstNumber.push(event.target.value);
  });
});
console.log(firstNumber);
console.log(numbers);
var output = document.getElementById('calculator-AC');
console.log(output);

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