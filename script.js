const numbers = document.querySelectorAll(".calculator-number");
const operators = document.querySelectorAll(".calculator-operator");
const output = document.querySelector(".calculator__output");
const clearButton = document.querySelector("#calculator-AC");
const equals = document.querySelector(".calculator-equals");
console.log(operators);

//let firstNumber forEach  add eventListener which stores value when click on butt0n

//set the variables as strings to be able to put things into them later
let totalOutput = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";


//NUMBERS
//
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


//OPERATORS 

const handleOperatorPress = (event) => {
    operator = event.target.value;
    totalOutput = firstNumber + operator;
    output.textContent = totalOutput;
}

operators.forEach((operator) => {
    operator.addEventListener("click", handleOperatorPress)
});



//CLEAR THE DISPLAY AND ALL STRINGS!
clearButton.addEventListener("click", (event) => {
    output.textContent = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    totalOutput = "";
});


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

const percentageConversion = (a) => {
    let percentageAnswer = a / 100;
    return percentageAnswer;
}

//switch case function= pull when equals is clicked
//parse float to turn string numbers into numbers and allow for decimal calculations
const handleOperator = () => {

    switch (operator) {
        case "+":
            additionResult = addition(parseFloat(firstNumber), parseFloat(secondNumber));
            output.textContent = additionResult;
            break;
        case "-":
            subtractionResult = subtraction(parseFloat(firstNumber), parseFloat(secondNumber));
            output.textContent = subtractionResult;
            break;
        case "÷":
            divisionResult = division(parseFloat(firstNumber), parseFloat(secondNumber));
            output.textContent = divisionResult;
            break;
        case "x":
            multiplicationResult = multiplication(parseFloat(firstNumber), parseFloat(secondNumber));
            output.textContent = multiplicationResult;
            break;
        case "%":
            percentageResult = percentageConversion(parseFloat(firstNumber));
            output.textContent = percentageResult;
    }
    firstNumber = "";
    secondNumber = "";
    operator = "";
    totalOutput = "";
}

equals.addEventListener("click", handleOperator);