/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);



/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1*number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);



/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1/number2;

const divideNumbers = () => {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
let numericValue = document.querySelector('#').addEventListener('click', GetTotalDue )

let numbersArr = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
const numbers= document.querySelector('#array');
numbers.textContent = numbersArr.join(' , ');

/* Output Odds Only Array */
const odds = document.querySelector('#odds');
odds.textContent = numbersArr.filter(num => num % 2 !==0).join(' , ');

/* Output Evens Only Array */
const evens = document.querySelector('#evens');
evens.textContent = numbersArr.filter(num => num % 2 ===0).join(' , ');

/* Output Sum of Org. Array */
const sum = document.querySelector('#sumOfArray');
sum.textContent = numbersArr.reduce((total, num) => total + num);

/* Output Multiplied by 2 Array */
const mul = document.querySelector('#multiplied');
mul.textContent = numbersArr.map((x) => x*2);

/* Output Sum of Multiplied by 2 Array */
const sumOfMul = document.querySelector('#sumOfMultiplied');
sumOfMul.textContent = numbersArr.map ((x) =>x*2).reduce((total, num) => total + num);