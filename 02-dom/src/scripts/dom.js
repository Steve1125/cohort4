document.getElementById("idDiv").addEventListener("click", e => {
    //console.log("You clicked");
    console.log(e.target.textContent);
})

const x = document.getElementById("idOl");
document.getElementById("idShow").addEventListener("click", e => {
    //console.log("clicked show button");
    let a = x.children;
    console.log(a);
})

document.getElementById("idAdd").addEventListener("click",e => {
    //console.log("clicked add button");
    let b = document.createElement("li");
    x.appendChild(b);

})

import domfuncs from './domfunc.js'
let counter = 0;

document.body.addEventListener("click", e => {
    //console.log(e.target.textContent);
    //console.log(e.target.nodeName);
    if(e.target.nodeName === 'BUTTON') {
        console.log(e.target.textContent);
    }

    if(e.target.textContent === 'Add Before'){
        domfuncs.addBefore(e.target.parentElement,"Card "+ counter++);
        //console.log(e.target.parentElement);
    }

    if(e.target.textContent === 'Add After'){
        domfuncs.addAfter(e.target.parentElement,"Card "+ counter++);
    }

    if(e.target.textContent === 'Delete'){
        domfuncs.delete(e.target.parentElement);
    }

})