const numbers = document.querySelectorAll(".calculator-number");
const operators = document.querySelectorAll(".calculator-operator");
const output = document.querySelector(".calculator__output");
const clearButton = document.querySelector("#calculator-AC");
const equals = document.querySelector(".calculator-equals");
console.log(operators);

//let firstNumber forEach  add eventListener which stores value when click on butt0n

let totalArray = [];

let firstNumber = [];
let secondNumber = [];

numbers.forEach((number) => {
  number.addEventListener("click", () => {
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

let operatorArr = [];
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    operatorArr.push(operator.value);
    totalArray.push(operator.value);
    output.textContent = totalArray.join("");
    return operatorArr;
  });
});
console.log(operatorArr);

//this will clear the display and clear the arrays to start over each time!
clearButton.addEventListener("click", (event) => {
  output.textContent = " ";
  firstNumber = [];
  secondNumber = [];
  operatorArr = [];
  totalArray = [];
});




//switch case function= pull when equals is clicked

const handleOperator = () => {

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
}

equals.addEventListener("click", handleOperator);

const addition = (firstNumber, secondNumber) => {
  let additionAnswer = firstNumber + secondNumber;
  output.textContent = additionAnswer;
  return additionAnswer;
};
console.log(additionAnswer);

const subtraction = (firstNumber, secondNumber) => {
  let subtractionAnswer = firstNumber - secondNumber;
  output.textContent = subtractionAnswer;
  return subtractionAnswer;
};
console.log(subtractionAnswer);


const multiplication = (number1, number2) => {
  let multiplicationAnswer = number1 * number2;
  return multiplicationAnswer;
};


const division = (number1, number2) => {
  let divisionAnswer = number1 / number2;
  return divisionAnswer;
};

