const numbers = document.querySelectorAll(".calculator-number");
const operators = document.querySelectorAll(".calculator-operator");
const output = document.querySelector(".calculator__output");
const clearButton = document.querySelector("#calculator-AC");
const equals = document.querySelector(".calculator-equals");
console.log(operators);

//let firstNumber forEach  add eventListener which stores value when click on butt0n

let totalOutput = "";

let firstNumber = "";
let secondNumber = "";
let operator = "";

//NUMBERS
const handleNumberPress = (event) => {
    let inputtedNumber = event.target.value;
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
}

numbers.forEach((number) => {
    number.addEventListener("click", handleNumberPress);
  });

  console.log(firstNumber);
  console.log(secondNumber);
  console.log(operator);

//OPERATORS 

const handleOperatorPress = (event) => {
    console.log(event);
    console.log(event.target.value);
    operator = event.target.value;
    totalOutput = firstNumber + operator;
    output.textContent = totalOutput;
}

operators.forEach((operator) => {
  operator.addEventListener("click", handleOperatorPress)
});



//CLEAR THE DISPLAY!
clearButton.addEventListener("click", (event) => {
  output.textContent = " ";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  totalOutput = "";
});




//switch case function= pull when equals is clicked


const addition = (firstNumber, secondNumber) => {
  let additionAnswer = firstNumber + secondNumber;
  output.textContent = additionAnswer;
};
console.log(additionAnswer);

const subtraction = (firstNumber, secondNumber) => {
  let subtractionAnswer = firstNumber - secondNumber;
  output.textContent = subtractionAnswer;
  return subtractionAnswer;
};
console.log(subtractionAnswer);


const multiplication = (firstNumber, secondNumber) => {
  let multiplicationAnswer = firstNumber * secondNumber;
  return multiplicationAnswer;
};
console.log(multiplicationAnswer);


const division = (firstNumber, secondNumber) => {
  let divisionAnswer = firstNumber / secondNumber;
  return divisionAnswer;
};

const handleOperator = () => {

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
    }
   
    equals.addEventListener("click", handleOperator);

