import domfuncs from './domfunc.js'

test("Does the dom functions work", () => {
    console.log("we are in the tests");
    const element = domfuncs.buildCard();
    expect(element).toBeTruthy();
});

test("Does the addBefore function work?", () => {
    const group = document.createElement("div");
    const element = domfuncs.buildCard("Card 1");
    group.appendChild(element);
    console.log(group);
    console.log(group.children[0].textContent);
    console.log(element.parentElement);

    expect(group.children.length).toBe(1);

    const txt = "New Stuff";
    domfuncs.addBefore(element,txt);
    console.log(group.children[0].textContent);
    console.log(group.children[1].textContent);
    expect(group.children.length).toBe(2);

    expect(group.children[0].textContent.substr(0,9)).toBe(txt);
    expect(group.children[1].textContent.substr(0,6)).toBe("Card 1");
});

test("Does the addAfter function work", () => {
    const group = document.createElement("div");
    const element = domfuncs.buildCard("Card 2");
    group.appendChild(element);
    console.log(group);
    console.log(group.children)
    console.log(group.children[0].textContent);
    console.log(element.parentElement);

    expect(group.children.length).toBe(1);

    const txt = "New Stuff";
    domfuncs.addAfter(element,txt);
    console.log(group.children[0].textContent);
    console.log(group.children[1].textContent);
    expect(group.children.length).toBe(2);

    expect(group.children[0].textContent.substr(0,6)).toBe("Card 2");
    expect(group.children[1].textContent.substr(0,9)).toBe(txt);
})