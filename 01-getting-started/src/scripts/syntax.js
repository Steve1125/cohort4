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
},
// for/in
forIn: () => {
    let person = {firstname: "Mary", lastname: "Jason", age: 25};
    let txt = "";
    for (let i in person) {
        txt += person[i]+ " ";        
    }
    return txt;
},
// while
while: () => {
    let sum = 0;
    let i= 1;
    while(i < 11){
        sum += i;
        i++;        
    }
    return sum;
},
// do while
dowhile: () => {
    let sum = 0;
    let i = 1;
    do{
        sum += i;
        i++;
    }
    while(i < 11);
    return sum;
},
// forEach (with array and function)
foreach: () => {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let sum = 0;
    let i;
    arr.forEach((i) => {
        sum += i;
    });
    return sum;
},
// Objects / Dictionaries
// declare object
// lookup key to retrieve value
obj: () => {
    function Person(first,last,age){
        this.firstname = first;
        this.lastname = last;
        this.age = age;
    }
    let person = new Person("Mary","Jason",20);
    return person["firstname"]+" "+person["lastname"]+" "+person["age"];
}
};
export default syntax;