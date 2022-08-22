const numbers = document.querySelectorAll(".calculator-number");
const operators = document.querySelectorAll(".calculator-operator");
const output = document.querySelector(".calculator__output");
const clearButton = document.querySelector("#calculator-AC");
const equals = document.querySelector(".calculator-equals");
const calculator = document.querySelector(".calculator");

//let firstNumber forEach  add eventListener which stores value when click on butt0n

//set the variables as strings to be able to put things into them later
let totalOutput = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = 0;

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
        totalOutput = `${firstNumber} ${operator} ${secondNumber}`;
        output.textContent = totalOutput;
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", handleNumberPress);
});

//OPERATORS 
const handleOperatorPress = (event) => {
    operator = event.target.value;
    if (firstNumber === "") {
        firstNumber = result;
    }
    totalOutput = `${firstNumber} ${operator}`;
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
    calculator.style.transform = "none";
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
const handleImmaturity = () => {
    if (firstNumber == 5318008) {
        calculator.style.transform = 'rotate(180deg)';
        setTimeout(function () {
            alert("That's really immature...");
        }, 1000);
        } else if (firstNumber == "") {
        calculator.style.transform = 'rotate(0deg)';
    }
}


//switch case function= pull when equals is clicked
//parse float to turn string numbers into numbers and allow for decimal calculations
const handleOperator = () => {

    switch (operator) {
        case "+":
            result = addition(parseFloat(firstNumber), parseFloat(secondNumber));
            output.textContent = result;
            break;
        case "-":
            result = subtraction(parseFloat(firstNumber), parseFloat(secondNumber));
            output.textContent = result;
            break;
        case "÷":
            result = division(parseFloat(firstNumber), parseFloat(secondNumber));
            output.textContent = result;
            break;
        case "x":
            result = multiplication(parseFloat(firstNumber), parseFloat(secondNumber));
            output.textContent = result;
            break;
        case "%":
            result = percentageConversion(parseFloat(firstNumber));
            output.textContent = result;
    }
    firstNumber = "";
    secondNumber = "";
    operator = "";
    totalOutput = "";
}

equals.addEventListener("click", handleImmaturity);
equals.addEventListener("click", handleOperator);


