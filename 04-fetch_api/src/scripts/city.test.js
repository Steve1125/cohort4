import city from './city.js'

test('city class test', () => {
    console.log('in the city test');
    const clCity = new city.City("Calgary", 51, -114, 1300000, "k1");
    const clCity1 = new city.City("Red Deer", 51, -115, 14000, "k2");
    console.log(clCity.show());
    console.log(clCity1.show());
    expect(clCity.show()).toBe("Calgary 51 -114 1300000");
    expect(clCity1.show()).toBe("Red Deer 51 -115 14000");

    expect(clCity.movedIn(10000)).toBe(1310000);
    expect(clCity1.movedIn(1000)).toBe(15000);
    //expect(clCity1.movedIn(6001)).toBe(20001);
    console.log(clCity.show());
    console.log(clCity1.show());

    expect(clCity.moveOut(20000)).toBe(1290000);
    expect(clCity1.moveOut(2000)).toBe(13000);
    //expect(clCity1.moveOut(14900)).toBe(100);
    console.log(clCity.show());
    console.log(clCity1.show());

    expect(clCity.howBig()).toBe("City");
    expect(clCity1.howBig()).toBe("Town");
    console.log(clCity.howBig());
    console.log(clCity1.howBig());
});

test('community test',()=>{
    console.log("in the community test");
    const clCom= new city.Community();
    clCom.createCity("Calgary", 51, -114, 1300000);
    clCom.createCity("Auckland",-36,174,1657000);
    console.log(clCom);
    
    console.log(clCom.cityList.length);
    expect(clCom.cityList.length).toBe(2);
    expect(clCom.cityList[0].name).toBe("Calgary");
    expect(clCom.cityList[0].latitude).toBe(51);
    expect(clCom.cityList[0].longitude).toBe(-114);
    expect(clCom.cityList[0].population).toBe(1300000);

    console.log(clCom.whichSphere(clCom.cityList[0].latitude));
    console.log(clCom.whichSphere(clCom.cityList[1].latitude));

    expect(clCom.whichSphere(clCom.cityList[0].latitude)).toBe("North Hemisphere");
    expect(clCom.whichSphere(clCom.cityList[1].latitude)).toBe("South Hemisphere");

    console.log(clCom.getMostNorthern());
    expect(clCom.getMostNorthern()).toBe("Calgary");

    console.log(clCom.getMostSouthern());
    expect(clCom.getMostSouthern()).toBe("Auckland");

    console.log(clCom.getPopulation());
    expect(clCom.getPopulation()).toBe(2957000);

    clCom.deleteCity(2);
    console.log(clCom.cityList.length);
    console.log(clCom.cityList);
    expect(clCom.cityList.length).toBe(1);
    expect(clCom.cityList[0].name).toBe("Calgary");
    expect(clCom.cityList[0].latitude).toBe(51);
    expect(clCom.cityList[0].longitude).toBe(-114);
    expect(clCom.cityList[0].population).toBe(1300000);
    
});

test('create city',()=>{

    const el = city.buildCity("Calgary",51,-114,1300000);
    //console.log(el.children[0].textContent);
    expect(el.children[0].textContent).toBe("City: Calgary");
    expect(el.children[1].textContent).toBe("Latitude: 51");
    expect(el.children[2].textContent).toBe("Longitude: -114");
    expect(el.children[3].textContent).toBe("Population: 1300000");

});

global.fetch = require('node-fetch');

const url = 'http://localhost:5000/';

test('test fetch', async() => {
    const cities = [
        {"key":1, "city":"Calgary", "lat":51.05, "long":-114.05},
        {"key":2, "city":"Edmonton", "lat":53.55, "long":-113.49},
        {"key":3, "city":"Red Deer", "lat":52.28, "long":-113.81}
    ]

    const contl = new city.Community();
    // Check that the server is running and clear any data
    let data = await contl.postData(url + 'clear');

    data = await contl.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);

    data = await contl.postData(url + 'add', cities[0]);
    expect(data.status).toEqual(200);

    data = await contl.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].city).toBe("Calgary");

    // add a second with the same key which should be an error
    data = await contl.postData(url + 'add', cities[0]);
    console.log(data);
    expect(data.status).toEqual(400);

    // add a second which should be ok
    data = await contl.postData(url + 'add', cities[1]);
    expect(data.status).toEqual(200);

    data = await contl.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(2);
    expect(data[1].city).toBe("Edmonton");

    data = await contl.postData(url + 'read', {key:2});
    console.log(data);
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].city).toBe("Edmonton");

    data = await contl.postData(url + 'update', {key:1, city:"Regina"});
    expect(data.status).toEqual(200);

    data = await contl.postData(url + 'read', {key:1});
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].city).toBe("Regina");

    data = await contl.postData(url + 'delete', {key:1});
    expect(data.status).toEqual(200);

    data = await contl.postData(url + 'read', {key:1});
    expect(data.status).toEqual(400);
    
    //expect(data[1].city).toBe("Calgary");
})

// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'POST',     // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors',       // no-cors, *cors, same-origin
//         cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow',         // manual, *follow, error
//         referrer: 'no-referrer',    // no-referrer, *client
//         body: JSON.stringify(data)  // body data type must match "Content-Type" header
//     });

//     const json = await response.json();    // parses JSON response into native JavaScript objects
//     json.status = response.status;
//     json.statusText = response.statusText;
//     // console.log(json, typeof(json));
//     return json;
// }



