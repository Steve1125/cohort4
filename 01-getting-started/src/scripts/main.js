import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

const calculator = document.querySelector('.calculator_container');
//console.log(calculator);
const keys = calculator.querySelector('.calculator_keys');
//console.log(keys);
const display = document.querySelector('.display');
//console.log(display.textContent);
let operator;

keys.addEventListener('click',e => {
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayNum = display.textContent;
        //console.log(action);

        if(!action){//number key;
            if(display.textContent === '0'){
                //console.log(keyContent);
                display.textContent = keyContent;
            }else {
                display.textContent = displayNum + keyContent;
                //console.log(display.textContent);
            }       
        }else {//action key
            if(action === 'decimal'){
                display.textContent = displayNum + ".";        
            }
            if(action === 'add'){
                display.textContent = displayNum + "+";
                operator = "+";
            }
            if(action === 'subtract'){
                display.textContent = displayNum + "-";
                operator = "-";
            }
            if(action === 'multiply'){
                display.textContent = displayNum + "x";
                operator = "x";
            }
            if(action === 'divide'){
                display.textContent = displayNum + "/";
                operator = "/";
            }
        }
         
        if(action === 'calculate'){
            //console.log(displayNum);
            const  firstValue = displayNum.split(operator)[0];
            //console.log(firstValue);
            const secondValue = displayNum.split(operator)[1];
            //console.log(secondValue);
            if (operator === "+"){
                display.textContent = functions.add(parseFloat(firstValue),parseFloat(secondValue));
            }else if (operator === "-"){
                display.textContent = functions.subtract(parseFloat(firstValue),parseFloat(secondValue));
            }else if (operator === "x"){
                display.textContent = functions.multiply(parseFloat(firstValue),parseFloat(secondValue));
            }else if (operator === "/"){
                display.textContent = functions.divide(parseFloat(firstValue),parseFloat(secondValue));
            }
        }
        if(action === 'clear'){
            display.textContent = "";
        }
    }
})