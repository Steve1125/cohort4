const syntax = {
// define attributes / variables
// number
addNum: (num1, num2) => {
    return num1 + num2;
},
// string
upperString: (str) => {
    return str.toUpperCase();    
},
// boolean
isOdd: (num) => {
    if ((num%2) !== 0) {
        return true;}
    else {
        return false;
    }
},
// array
lenOfArr: (arr) => {
    return arr.length;
},
// dictionary / objects
nameOfPerson: (firstName,lastName) => {
    return firstName + " " +lastName;
},
// undefined
isUndefined: (num) => {
    return num;
},
// sample if / else
ifelseTest: (num) => {
    if (num > 20) {
        return "large";
    }else {
        return "small";
    }
},
// functions
// parameters
// returns
// arrays
// add to the front
addTofront: (arr, num) => {
    arr.unshift(num);
    return arr;    
},
// add to the end
addToend: (arr, num) => {
    arr.push(num);
    return arr;
},
// update values
changeArr: (arr,str) => {
    arr[0] = str;
    return arr;
},
// loops 
// for
forTest: () => {
    let sum = 0;
    for (let i = 1; i < 11; i++){
        sum += i;
    }
    return sum;
}
// for/in
// while
// do while
// forEach (with array and function)
// Objects / Dictionaries
// declare object
// lookup key to retrieve value
};
export default syntax;