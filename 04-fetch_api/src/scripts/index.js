import city from './city.js'


const contrl = new city.Community();

document.body.addEventListener('click', async (e) => {
    if (e.target.getAttribute("id") === "idCity") {
        if (idInputCn.value != "" && idInputLa.value != "" &&
            idInputLo.value != "" && idInputPo.value != "") {
            const el = city.buildCity(idInputCn.value, idInputLa.value, idInputLo.value, idInputPo.value);
            console.log(el);
            e.target.parentElement.insertBefore(el, el.nextSibling);

            contrl.createCity(idInputCn.value, idInputLa.value, idInputLo.value, idInputPo.value);

            idInputCn.value = "";
            idInputLa.value = "";
            idInputLo.value = "";
            idInputPo.value = "";
            //console.log(contrl.cityList[0]);
            // let data = await city.postData(url + 'clear');
            // data = await city.postData(url + 'all');
            // console.log(data);
            // for (let i = 0; i < contrl.cityList.length; i++) {
            //     data = await city.postData(url + 'add', contrl.cityList[i]);
            //     console.log(data);
            }
    }

    if(e.target.getAttribute("id") === "idDel"){
        let node = e.target.parentElement;
        node.remove(node.childNodes);
        // console.log(node);
        // console.log(node.childNodes);
        // console.log(contrl.cityList.length);
        contrl.deleteCity(Number(node.getAttribute("id")));
        // console.log(contrl.cityList.length);
    }

    if (e.target.getAttribute("id") === "idTotal") {
        idInput.value = contrl.getPopulation();
    }
    
    if (e.target.getAttribute("id") === "idMostS") {
        idInputS.value = contrl.getMostSouthern();
    }
    
    if (e.target.getAttribute("id") === "idMostN") {
        idInputN.value = contrl.getMostNorthern();
    }
})