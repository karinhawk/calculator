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
   } else {
    secondNumber += inputtedNumber.toString();
    totalOutput = firstNumber + operator + secondNumber;
    output.textContent = totalOutput;
   }
}

numbers.forEach((number) => {
    number.addEventListener("click", handleNumberPress);
  });

//   console.log(firstNumber);
//   console.log(secondNumber);
//   console.log(operator);

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



//CLEAR THE DISPLAY AND ALL STRINGS!
clearButton.addEventListener("click", (event) => {
  output.textContent = " ";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  totalOutput = "";
});

console.log(firstNumber);
console.log(secondNumber);


const addition = (a, b) => {
  let additionAnswer = a + b;
  return additionAnswer;
};


const subtraction = (a, b) => {
  let subtractionAnswer = a - b;
  return subtractionAnswer;
};



const multiplication = (a, b) => {
  let multiplicationAnswer = a * b;
  return multiplicationAnswer;
};



const division = (a, b) => {
  let divisionAnswer = a / b;
  return divisionAnswer;
};

//switch case function= pull when equals is clicked
const handleOperator = () => {

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
    }
   
    equals.addEventListener("click", handleOperator);

