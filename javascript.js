//Variables
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const display = document.querySelector('.display')
const upperDisplay = document.querySelector('.upperDisplay');
//
let displayValue;
let operation = null;
let firstOperand = [];
let firstNumber;
let secondOperand = [];
let secondNumber;
let result;

//Operation functions
function add(num1, num2) {
    return +num1 + +num2;
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
    num1 = firstNumber;
    num2 = secondNumber;
    if (operator == '+') {
        return result = add(num1, num2);
    } else if (operator == '-') {
        return result = subtract(num1, num2);
    } else if (operator == '*') {
        return result = multiply(num1, num2);
    } else {
        return result = divide(num1, num2);
    }
}

//Button events
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (operation !== null) {
            secondOperand.push(button.value);
            secondNumber = secondOperand.join('');
            display.innerHTML = secondNumber;
        } else {
            firstOperand.push(button.value);
            firstNumber = firstOperand.join('');
            display.innerHTML = firstNumber;
        };
    })
});
//
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        operation = button.value;
        display.innerHTML = button.value;
        if (secondNumber !== NaN) {
            secondOperand.length = 0;
        }
    })
});
//
equalsButton.addEventListener('click', () => {
    operate();
    display.innerHTML = result;
    secondOperand.length = 0;
    firstNumber = result;
    operation = null; //could fuck shit up later
});
//
clear.addEventListener('click', () => {
    display.innerHTML = '0';
    upperDisplay.innerHTML = '0';
    operation = null;
    firstOperand.length = 0;
    secondOperand.length = 0;
});        