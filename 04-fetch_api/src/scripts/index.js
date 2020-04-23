import city from './city.js'

idCity.addEventListener('click',(e) => {
    const el = city.buildCity("Calgary",51,-114,1300000);
    console.log(el);
    e.target.parentElement.insertBefore(el, el.nextSibling);
    
})