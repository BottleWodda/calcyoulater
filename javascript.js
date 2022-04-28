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
            display.textContent = secondNumber;
        } else {
            firstOperand.push(button.value);
            firstNumber = firstOperand.join('');
            display.textContent = firstNumber;
        };
    })
});
//
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.innerHTML = button.value;
        if (secondNumber !== NaN) {
            operate();
            operation = button.value;  
            firstNumber = result;
            secondOperand.length = 0;           
        } else {
            operation = button.value;
        }
        //if first number and second number are both valued,       
        //operate on them and store result in firstNumber.
        //remove value of secondNumber/secondOperand
        //else operation = button value
    })
});
//
equalsButton.addEventListener('click', () => {
    operate();
    display.textContent = result;
    secondOperand.length = 0;
    firstNumber = result;
    operation = null;
});
//
clear.addEventListener('click', () => {
    display.textContent = '0';
    upperDisplay.textContent = '0';
    operation = null;
    firstOperand.length = 0;
    secondOperand.length = 0;
});

