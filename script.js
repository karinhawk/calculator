

const numbers = document.querySelectorAll('.calculator-number');
const operators = document.querySelectorAll('.calculator-operator');
const output = document.querySelector('.calculator__output');
const clearButton = document.querySelector('#calculator-AC');
const equals = document.querySelector('.calculator-equals');
console.log(output);


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
         
    })
    })
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
    })
})
console.log(operatorArr);

//this will clear the display and clear the arrays to start over each time!
clearButton.addEventListener("click", (event) => {
    output.textContent = (" ");
    firstNumber = [];
    secondNumber = [];
    operatorArr = [];
    totalArray = [];
});


//when equals- text content is answer
//equals button
//switch case the operators to functions!!!!!!!
//style the text and align on the right hand side maybe






















const addition = (number1, number2) => {
    additionAnswer = number1 + number2;
    return additionAnswer;
}

console.log(addition(2, 6));


const subtraction = (number1, number2) => {
    subtractionAnswer = number1 - number2;
    return subtractionAnswer;
}
console.log(subtraction(12, 1));

const multiplication = (number1, number2) => {
    multiplicationAnswer = number1 * number2;
    return multiplicationAnswer;
}
console.log(multiplication(30, 2));


const division = (number1, number2) => {
    divisionAnswer = number1 / number2;
    return divisionAnswer;
}
console.log(division(40, 2));