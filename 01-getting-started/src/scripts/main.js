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
        // if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide'){
        //     const firstValue = displayNum;
        //     console.log(firstValue);                    
        
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
// let n1;
// let n2;
// let operator;

// num1.addEventListener('click',() => {
//     rlt.textContent += "1";
// });

// num2.addEventListener('click',() => {
//     rlt.textContent += "2";
// });

// num3.addEventListener('click',() => {
//     rlt.textContent += "3";
// });

// num4.addEventListener('click',() => {
//     rlt.textContent += "4";
// });

// num5.addEventListener('click',() => {
//     rlt.textContent += "5";
// });

// num6.addEventListener('click',() => {
//     rlt.textContent += "6";
// });

// num7.addEventListener('click',() => {
//     rlt.textContent += "7";
// });

// num8.addEventListener('click',() => {
//     rlt.textContent += "8";
// });

// num9.addEventListener('click',() => {
//     rlt.textContent += "9";
// });

// num0.addEventListener('click',() => {
//     rlt.textContent += "0";
// });

// operatordot.addEventListener('click',() => {
//     rlt.textContent += ".";
// });

// operatorplus.addEventListener('click',() => {
//     number1=rlt.textContent;
//     operator = "+";
//     rlt.textContent += "+";
// });

// operatorminus.addEventListener('click',() => {
//     number1=rlt.textContent;
//     operator = "-";
//     rlt.textContent += "-";
// });

// operatormulti.addEventListener('click',() => {
//     number1=rlt.textContent.value;
//     operator = "*";
//     rlt.textContent += "*";
// });

// operatordiv.addEventListener('click',() => {
//     number1=rlt.textContent.value;
//     operator = "/";
//     rlt.textContent += "/";
// });

//  operatorequal.addEventListener('click',() => {
//      var r = rlt.textContent.split(n1)[1];
//      n2=r.substring(1);
//      console.log(n1);
//      console.log(r);
//      if(operator === "+"){
//          rlt.textContent = functions.add(parseFloat(n1),parseFloat(n2));
//         }
     

//  });