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
let firstNumber = null;
let result;
let totalOperation = [];

// Operation Functions
const add = (...num) => num.reduce((a, b) => (a + b));
const subtract = (...num) => num.reduce((a, b) => (a - b));
const multiply = (...num) => num.reduce((a, b) => (a * b));
const divide = (...num) => num.reduce((a, b) => (a / b));
//
function operate(...num) {
    operator = operation;
    if (operator == '+') {
        return result = add(...num);
    } else if (operator == '-') {
        return result = subtract(...num);
    } else if (operator == '*') {
        return result = multiply(...num);
    } else {
        return result = divide(...num);
    }
}

//Button events
//
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        firstOperand.push(button.value);
        firstNumber = firstOperand.join('');
        display.innerHTML = firstNumber;
        operation = null;
    })
});
//
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.innerHTML = button.value;
        operation = button.value;
        totalOperation.push(firstNumber, operation)
        firstOperand.length = 0;
    })
});
//
equalsButton.addEventListener('click', () => {
    if (operation == null) {
        totalOperation.push(firstNumber);
    }
    result = operate(totalOperation.join(''));
    display.innerHTML = result;
    operation = null;
});
//
clear.addEventListener('click', () => {
    display.innerHTML = '0';
    upperDisplay.innerHTML = '0';
    operation = null;
    firstOperand.length = 0;
    totalOperation.length = 0;
});
