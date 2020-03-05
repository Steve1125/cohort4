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

//Canadian Taxes
idIncome.addEventListener('change', (() => {
    let in1 = functions.income1(48535);    
    let in2 = functions.income2(48534);
    let in3 = functions.income3(53404);
    let in4 = functions.income4(63895);
    // console.log(in1);
    // console.log(in2);
    // console.log(in3);
    // console.log(in4);
    if(idIncome.value >= 0 && idIncome.value <= 48535){
        idTax.textContent = functions.income1(idIncome.value);
    }else if (idIncome.value > 48535 && idIncome.value <= 97069){        
        idTax.textContent = functions.income2(idIncome.value-48535)+in1;
    }else if (idIncome.value >97069 && idIncome.value <= 150473){        
        idTax.textContent = functions.income3(idIncome.value-97069)+in1+in2;
    }else if (idIncome.value > 150473 && idIncome <= 214368){        
        idTax.textContent = functions.income4(idIncome.value-150473)+in1+in2+in3;
    }else {
        idTax.textContent = functions.income5(idIncome.value-214368)+in1+in2+in3+in4;
    }
    
}));

//100D Working with Arrays
let arr = [];
const input = document.getElementById("idInput");
//console.log(input);
idAdd.addEventListener('click', () => {     
    if(isNaN(input.value)){
        message.textContent = "the input is not a valid number";
    }else if(input.value !== ""){
        arr.push(input.value);
        message.textContent = "the number has been added to the array";        
        console.log(arr);              
    }    
});

idShow.addEventListener('click', () => {
    input.value = arr.toString();
    console.log(input.value);
});

idTotal.addEventListener('click', () => {
    let sum = 0;
    for(var i=0;i<arr.length;i++){
        sum += Number(arr[i]);
    }
    input.value = sum;
    console.log(arr);
    console.log(sum);    
});

idClear.addEventListener('click', () => {
    input.value = "";
    message.textContent = "";
});

//100C Working with Dictionaries
function Province(code, name) {
    this.code = code;
    this.name = name;
}
let Province1 = new Province("ab", "Alberta");
let Province2 = new Province("sk", "Saskatchewan");
let Province3 = new Province("bc", "British Columbia");
let Province4 = new Province("on", "Ontario");
//console.log(Object.values(Province1));
//console.log(Province1.code);

let inputDict = document.getElementById("idDict");
     
idLookup.addEventListener('click', () => {
     console.log(inputDict.value);
     if(inputDict.value === Province1.code){
         msg.textContent = Province1.name;
         console.log(msg.textContent);
     }else if (inputDict.value === Province2.code){
         msg.textContent = Province2.name;
     }else if (inputDict.value === Province3.code){
         msg.textContent = Province3.name;
     }else if (inputDict.value === Province4.code){
         msg.textContent = Province4.name;
     }    
})