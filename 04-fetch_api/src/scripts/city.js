const url = 'http://localhost:5000/';

class City {
    constructor(name, latitude, longitude, population, key) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = Number(population);
        this.key = Number(key);
    }

    show() {
        return this.name + " " +
            this.latitude + " " +
            this.longitude + " " +
            this.population;
    }

    moveIn(num) {
        this.population += num;
        return this.population;
    }

    moveOut(num) {
        this.population -= num;
        return this.population;
    }

    howBig() {
        switch (true) {
            case this.population > 100000:
                return "City";
            case this.population > 20000:
                return "Large town";
            case this.population > 1000:
                return "Town";
            case this.population > 100:
                return "Village";
            default:
                return "Hamlet";
        }
    }
}

class Community {
    constructor() {
        this.cityList = [];
        this.counter = 1;
    }

    nextKey() {
        return `${this.counter++}`;
    }

    whichSphere(latitude) {
        if (latitude > 0) {
            return "North Hemisphere";
        } else {
            return "South Hemisphere";
        }
    }

    getMostNorthern() {
        let mostNorth = 0;

        for (let i = 0; i < this.cityList.length; i++) {
            if (this.cityList[mostNorth].latitude < this.cityList[i].latitude) {
                mostNorth = i;
            }
        }
        return this.cityList[mostNorth].name;

    }
    getMostSouthern() {
        let mostSouth = 0;

        for (let i = 0; i < this.cityList.length; i++) {
            if (this.cityList[mostSouth].latitude > this.cityList[i].latitude) {
                mostSouth = i;
            }
        }
        return this.cityList[mostSouth].name;

    }
    getPopulation() {
        let totalPop = 0;
        for (let i = 0; i < this.cityList.length; i++) {
            totalPop += this.cityList[i].population;
        }
        return totalPop;

    }
    async createCity(name, latitude, longitude, population) {
        const key = this.nextKey();
        let creCity = new City(name, latitude, longitude, population, key);
        this.cityList.push(creCity);
        let data = await this.postData(url + 'clear');
            data = await this.postData(url + 'all');
            //console.log(data);
            for (let i = 0; i < this.cityList.length; i++) {
                data = await this.postData(url + 'add', this.cityList[i]);
                //console.log(data);
            }
    }

    async deleteCity(cityKey) {
        for (let i = 0; i < this.cityList.length; i++) {
            if (cityKey === this.cityList[i].key) {
                this.cityList.splice(i, 1);  
                await this.postData(url + 'delete', {key:cityKey});              
            }            
        }
    }

    async postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST',     // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',       // no-cors, *cors, same-origin
            cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',         // manual, *follow, error
            referrer: 'no-referrer',    // no-referrer, *client
            body: JSON.stringify(data)  // body data type must match "Content-Type" header
        });
    
        const json = await response.json();    // parses JSON response into native JavaScript objects
        json.status = response.status;
        json.statusText = response.statusText;
        // console.log(json, typeof(json));
        return json;
    }
}

let counter = 1;
function buildCity(name, latitude, longitude, population) {    
    let div = document.createElement('div');
    div.setAttribute('class', "card bg-light md-3");
    div.setAttribute("style", "max-width: 15rem");
    div.setAttribute("id", counter++);

    let div1 = document.createElement('div1');
    div1.setAttribute("class", "card-header");
    div1.setAttribute("style", "text-align: center");
    div1.appendChild(document.createTextNode("City: " + name));
    div.append(div1);

    let div2 = document.createElement('div2');
    div2.setAttribute("class", "card-header");
    div2.setAttribute("style", "text-align: center");
    div2.appendChild(document.createTextNode("Latitude: " + latitude));
    div.append(div2);

    let div3 = document.createElement('div3');
    div3.setAttribute("class", "card-header");
    div3.setAttribute("style", "text-align: center");
    div3.appendChild(document.createTextNode("Longitude: " + longitude));
    div.append(div3);

    let div4 = document.createElement('div4');
    div4.setAttribute("class", "card-header");
    div4.setAttribute("style", "text-align: center");
    div4.appendChild(document.createTextNode("Population: " + population));
    div.append(div4);

    let btn = document.createElement('button');
    btn.setAttribute("id", "idDel");
    btn.setAttribute("class","btn-outline-secondary");
    btn.appendChild(document.createTextNode('Delete'));
    div.append(btn);

    return div;
}

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
export default { City, Community, buildCity };