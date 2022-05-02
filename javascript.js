//Variables
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const display = document.querySelector('.display')
const upperDisplay = document.querySelector('.upperDisplay');
const backSpace = document.querySelector('#back');
//
let displayValue;
let operation = null;
let firstOperand = [];
let firstNumber;
let secondOperand = [];
let secondNumber = false;
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
        display.textContent = button.value;
        if (secondNumber !== false) {
            operate();
            operation = button.value;  
            firstNumber = result;
            secondOperand.length = 0;   
            display.textContent = result;        
        } else {
            operation = button.value;
        }
    })
});
//
equalsButton.addEventListener('click', () => {
    operate();
    if (secondNumber == 0 && operation == '/') {
        secondOperand.length = 0;
        secondNumber = false;
        display.textContent = '>:('
        alert("Divide by a different number. 0 was such a stupid choice.")
    } else if (secondNumber == false) {
        return
    } else {    
    display.textContent = result;
    secondOperand.length = 0;
    firstNumber = result;
    operation = null;
    secondNumber = false;
    }
});
//
clear.addEventListener('click', () => {
    display.textContent = '0';
    upperDisplay.textContent = '0';
    operation = null;
    firstNumber = null;
    secondNumber = false;
    firstOperand.length = 0;
    secondOperand.length = 0;
});
//
backSpace.addEventListener('click', () => {
    display.textContent = 'hi';
})
