//DOM elements : These are all the DOM elements we are gonna need 

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generate = document.getElementById('generate'); 
const clipboardEl = document.getElementById('clipboard');

//Setting UP the Events

generate.addEventListener('click',()=>{
    const length = +lengthEl.value; 
const hasLower = lowercaseEl.checked;
const hasUpper = uppercaseEl.checked;
const hasNumber = numbersEl.checked;
const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
})

// object of functions

const randomFunc = {   
    lower : getRandomLower,
    upper : getRandomUpper,
    number : getRandomNumber,
    symbol : getRandomSymbol
}

//Generate password function
function generatePassword(lower, upper, number, symbol, length){
// 1. we need to Init pass var
// 2. Filter out unchecked types
// 3. Loop over length then, call generator fun for each type
// 4. Assign final pw to the pw var and return

let generatedPassword = '' ;

const typesCount = lower + upper + number + symbol;

console.log('typesCount:', typesCount);

const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

console.log('typesArr: ',typesArr);

if(typesCount === 0){
return '';
}
for (let i=0; i<length; i += typesCount){
    
}
}

//Generator Functions 
//Charater sets - https://www.w3schools.com/html/html_charset.asp

function getRandomLower(){
return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
    
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]<>/,.'
    return symbols[Math.floor(Math.random()*symbols.length)];
}
// console.log(getRandomSymbol());