import syntax from './syntax.js'
//Number
test('add 2 numbers', () =>{
    expect(syntax.addNum(1,2)).toBe(3);
});
//String
test('convert string to upper case', () => {
    expect(syntax.upperString("abc")).toBe("ABC");
});

//boolean
test('is number odd', () => {
    expect(syntax.isOdd(3)).toBe(true);
});

//array
test('length of array', () => {
    let arr = [1,2,3,4];
    expect(syntax.lenOfArr(arr)).toBe(4);
});

//objects
test('fullname of Person', () => {
    let Person = {firstName: "Mary", lastName: "Jason", age: 30};
    expect(syntax.nameOfPerson(Person.firstName,Person.lastName)).toBe("Mary Jason");
});

//undefined
test('check if it is undefined', () => {
    expect(syntax.isUndefined(undefined)).toBe(undefined);
});

//if / else
test('test if else', () => {
    expect(syntax.ifelseTest(10)).toBe("small");
});

//add to the front

test('adds value to the begining of array', () =>{
    expect(syntax.addTofront([2,3,4],1)).toStrictEqual([1,2,3,4]);
});
//add to the end
test('adds value to the end of array', () =>{
    expect(syntax.addToend([2,3,4],1)).toStrictEqual([2,3,4,1]);
});

//update values
test('change the value of array', () =>{
    let arr = ["a","b","c"];
    expect(syntax.changeArr(arr,"d")).toStrictEqual(["d","b","c"]);
});

//for loop
test('using for loop to calculate', () => {
    expect(syntax.forTest()).toBe(55);
});

//for in
test('for in loop', () => {
    expect(syntax.forIn()).toBe("Mary Jason 25 ");
});

//while
test('while loop test', () => {
    expect(syntax.while()).toBe(55);
});

//do while
test('do while test', () => {
    expect(syntax.dowhile()).toBe(55);
});

//for each
test('for each loop', () => {
    expect(syntax.foreach()).toBe(55);
});

//lookup key to retrieve value of object
test('lookup key to retrieve value', () => {
    expect(syntax.obj()).toBe("Mary Jason 20");
})