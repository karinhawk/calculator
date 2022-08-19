"use strict";

var numbers = document.querySelectorAll(".calculator-number");
var operators = document.querySelectorAll(".calculator-operator");
var output = document.querySelector(".calculator__output");
var clearButton = document.querySelector("#calculator-AC");
var equals = document.querySelector(".calculator-equals");
console.log(operators); //let firstNumber forEach  add eventListener which stores value when click on butt0n

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
}); //switch case function= pull when equals is clicked

var handleOperator = function handleOperator() {
  switch (operators) {
    case totalArray.includes("+"):
      functionToPull = addition;
      break;

    case totalArray.includes("-"):
      functionToPull = subtraction;
      break;

    case totalArray.includes("÷"):
      functionToPull = division;
      break;

    case totalArray.includes("x"):
      functionToPull = multiplication;
      break;
  }
};

equals.addEventListener("click", handleOperator);

var addition = function addition(firstNumber, secondNumber) {
  var additionAnswer = firstNumber + secondNumber;
  output.textContent = additionAnswer;
  return additionAnswer;
};

console.log(additionAnswer);

var subtraction = function subtraction(firstNumber, secondNumber) {
  var subtractionAnswer = firstNumber - secondNumber;
  output.textContent = subtractionAnswer;
  return subtractionAnswer;
};

console.log(subtractionAnswer);

var multiplication = function multiplication(number1, number2) {
  var multiplicationAnswer = number1 * number2;
  return multiplicationAnswer;
};

var division = function division(number1, number2) {
  var divisionAnswer = number1 / number2;
  return divisionAnswer;
};