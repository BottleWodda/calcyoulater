const add = (...num) => num.reduce((a, b) => (a + b));

const subtract = (...num) => num.reduce((a, b) => (a - b));

const multiply = (...num) => num.reduce((a, b) => (a * b));

const divide = (...num) => num.reduce((a, b) => (a / b));

const displayValue = '';

function operate(...num) {
    const operator = ['+', '-', '*', '/'];

    if (operator == '+') {
        return add(...num);
    } else if (operator == '-') {
        return subtract(...num);
    } else if (operator == '*') {
        return multiply(...num);
    } else {
        return divide(...num);
    }
}

const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        operate(...num = button.id);
        document.getElementById('display').innerHTML = button.id;
    })
});


console.log(operate(12 + 7 - 5 * 3))

function clear() {

}