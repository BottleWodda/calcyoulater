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
let firstOperand;
let secondOperand;
let result;

//Operation functions
function add(num1, num2) {
    num1 = firstOperand;
    num2 = secondOperand;
    parseFloat(num1);
    parseFloat(num2);
    console.log('add');
    return num1 + num2;
}
//
function subtract(num1, num2) {
    num1 = firstOperand;
    num2 = secondOperand;
    console.log('subtract');
    return num1 - num2;
}
//
function multiply(num1, num2) {
    num1 = firstOperand;
    num2 = secondOperand;
    console.log('multiply');
    return num1 * num2;
}
//
function divide(num1, num2) {
    num1 = firstOperand;
    num2 = secondOperand;
    console.log('divide');
    return num1 / num2;
}
//
function operate(num1, operator, num2) {
    operator = operation;
    num1 = firstOperand;
    num2 = secondOperand;
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
            secondOperand = secondOperand += button.value;
            display.innerHTML = secondOperand;
            console.log(secondOperand);
        } else {
            firstOperand = firstOperand += button.value;
            display.innerHTML = firstOperand;
            console.log(firstOperand)
        };
    })
});
//
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.innerHTML = button.value;
        operation = button.value;
        console.log(operation);
    })
});
//
equalsButton.addEventListener('click', () => {
    operate();
    console.log(result);
    display.innerHTML = result;
});
//
clear.addEventListener('click', () => {
    display.innerHTML = '0';
    upperDisplay.innerHTML = '0';
});

