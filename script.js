const calcBtns = document.querySelectorAll('[data-numbers]');
const operatorBtns = document.querySelectorAll('[data-operator]');
const currentScreen = document.getElementById('calcScreen');

calcBtns.forEach((button) => 
    button.addEventListener('click', () => changeNum(button.textContent))
)

function changeNum(number){
    currentScreen.textContent += number;
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    switch(operator){
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
