//Variables
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clear = document.querySelector('.clear');
let displayValue;
let operation;
let firstOperand;
let secondOperand = 2; //need to figure out how to store next click as second operand
let result;

//Operation functions
function add(num1, num2) {
    parseFloat(num1);
    parseFloat(num2);
    return num1 + num2;
}
//
function subtract(num1, num2) {
    return num1 - num2;
}
//
function multiply(num1, num2) {
    return num1 * num2;
}
//
function divide(num1, num2) {
    return num1 / num2;
}
//
function operate(num1, operator, num2) {
    operator = operation;
    num1 = firstOperand;
    num2 = secondOperand;
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
}

//Button events
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelector('.display').innerHTML = button.value;
        firstOperand = parseFloat(button.value);
        console.log(firstOperand);
    })
});
//
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        document.querySelector('.display').innerHTML = button.value;
        operation = button.value;
        console.log(operation);
    })
});
//
equalsButton.addEventListener('click', () => {console.log(operate())});


//test