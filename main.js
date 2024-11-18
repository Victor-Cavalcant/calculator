
const one = document.getElementById('one');
const two = document.getElementById('two'); 
const three = document.getElementById('three'); 
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const x = document.getElementById('x');
const dot = document.getElementById('dot');
const divide = document.getElementById('divide');
const zero = document.getElementById('0');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
const display = document.querySelector('.display');

const oneValue = '1';
const twoValue = '2';
const threeValue = '3';
const fourValue = '4';
const fiveValue = '5';
const sixValue = '6';
const sevenValue = '7';
const eightValue = '8';
const nineValue = '9';
const zeroValue = '0';
const plusValue = '+';
const minusValue = '-';
const xValue = 'x';
const dotValue = '.';
const divideValue = '÷';
const equalValue = '=';
const clearValue = 'C';
const displayValue = display.value;

let number1 = display.value;
let number2 = display.value;
let operator = '';

one.addEventListener('click', () => {
    display.value += oneValue;
})

two.addEventListener('click', () => {
    display.value += twoValue;
})

three.addEventListener('click', () => {
    display.value += threeValue;
})

four.addEventListener('click', () => {
    display.value += fourValue;
})

five.addEventListener('click', () => {
    display.value += fiveValue;
})

six.addEventListener('click', () => {
    display.value += sixValue;
})

seven.addEventListener('click', () => {
    display.value += sevenValue;
})

eight.addEventListener('click', () => {
    display.value += eightValue;
})

nine.addEventListener('click', () => {
    display.value += nineValue;

})

zero.addEventListener('click', () => {
    display.value += zeroValue;
})

clear.addEventListener('click', () => {
    display.value = '';
})

plus.addEventListener('click', () => {
    display.value += plusValue;
    operator = plusValue;
    console.log(operator);
   
    
})


minus.addEventListener('click', () => {
    number1 = display.value;
    display.value += minusValue;
    operator = minusValue;
    console.log(operator);
})

x.addEventListener('click', () => {
    number1 = display.value;
    display.value += xValue;
    operator = xValue;
    console.log(operator);
})

dot.addEventListener('click', () => {
    display.value += dotValue;
})

divide.addEventListener('click', () => {
    number1 = display.value;
    display.value += divideValue;
    operator = divideValue;
    console.log(operator);
})






function operate(operator, number1, number2) {
    if (operator === '+') {
        return number1 + number2;
    } else if (operator === '-') {
        return number1 - number2;
    } else if (operator === 'x') {
        return number1 * number2;
    } else if (operator === '÷') {
        return number1 / number2;
    }
}