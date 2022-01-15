let firstOper = ''
let secondOper = ''
let currentOper = null

const numBtns = document.querySelectorAll('[data-number]');
const operBtns = document.querySelectorAll('[data-operator]');
const equalBtn = document.getElementById('equalBtn')
const pointBtn = document.getElementById('pointBtn')
const clearBtn = document.getElementById('clearBtn')
const currentCalcScreen = document.getElementById('currentScreen')
const lastCalcScreen = document.getElementById('prevScreen')

clearBtn.addEventListener('click', clear);

numBtns.forEach((button) =>
    button.addEventListener('click', () => changeNumber(button.textContent))
)

operBtns.forEach((button) => {
    button.addEventListener('click', () => alert(button.textContent))
});

function changeNumber(number) {
    console.log("CLICKED")
    currentCalcScreen.textContent += number;
}

function clear() {
    currentCalcScreen.textContent = 0;
    lastCalcScreen.textContent = '';
    firstOper = '';
    secondOper = '';
    currentOper = null;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return null;
    }
}

console.log(operate('', 1, 2));