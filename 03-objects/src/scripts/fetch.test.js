import functions from './fetch.js'

test('working in the test', ()=>{
    console.log("working in the test");
    console.log(functions.getFirstName());
    expect(functions.getFirstName()).toBe("Maricica");

    console.log(functions.getAllFirstNames());
    expect(functions.getAllFirstNames().length).toBe(5);
    expect(functions.getAllFirstNames()[0]).toBe("Maricica");
    expect(functions.getAllFirstNames()).toStrictEqual([ 'Maricica', 'Nishant', 'Nicuță', 'Barbara', 'Stanca' ]);
});



