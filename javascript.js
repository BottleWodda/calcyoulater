//Variables
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const display = document.querySelector('.display')
const backSpace = document.querySelector('#back');
const decimal = document.querySelector('#decimalPoint');
//
let displayValue;
let operation = null;
let firstOperand = [];
let firstNumber;
let secondOperand = [];
let secondNumber = false;
let result;

//Operation Functions
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

//Button Events
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
        decimal.disabled = false; 
        display.textContent = button.value;
        if (secondNumber !== false) {
            operate();
            operation = button.value;  
            firstNumber = result.toFixed(8);
            secondOperand.length = 0;   
            display.textContent = result;        
        } else {
            operation = button.value;
        }
    })
});
//
equalsButton.addEventListener('click', () => {
    decimal.disabled = false; 
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
    firstNumber = result.toFixed(8);
    operation = null;
    secondNumber = false;
    }
});
//
clear.addEventListener('click', () => {
    decimal.disabled = false; 
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
    if (operation !== null) {
        secondOperand.pop();
        secondNumber = secondOperand.join('');
        display.textContent = secondNumber;
    } else {
        firstOperand.pop();
        firstNumber = firstOperand.join('');
        display.textContent = firstNumber;
    };
});
//
decimal.addEventListener('click', () => {
    if (display.textContent.includes('.')) {
        decimal.disabled = true; 
    } 
});
//Keyboard Support... TBC
window.addEventListener('keydown', function(e) {
    const keys = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if(!keys) return;
    console.log(keys);
});