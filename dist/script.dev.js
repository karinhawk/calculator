"use strict";

//const output = document.querySelector(".calculator__output")
// const handleReset = (event) => {
//     output.innerHTML = " ";
// }
// const clickButton = (percentage) => {
//     let clickedButton = 
//     switch (clickedButton) {
//     }
//     //switch case time! switch case = button clicked
//     // output = output.innerhtml
// }
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