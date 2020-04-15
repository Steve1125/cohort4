class City {
    constructor(name, latitude, longitude, population) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population
    }

    show() {
        return this.name + " " +
            this.latitude + " " +
            this.longitude + " " +
            this.population;
    }

    movedIn(num) {
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
    }

    whichSphere(latitude) {
        // for (let i = 0; i < this.cityList.length; i++) {
        //     if (this.cityList[i].latitude > 0) {
        //         return "North Hemisphere";
        //     } else {
        //         return "South Hemisphere";
        //     }
        // }
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
    createCity(name, latitude, longitude, population) {
        let creCity = new City(name, latitude, longitude, population);
        this.cityList.push(creCity);
    }
    deleteCity(cityName) {
        for (let i = 0; i < this.cityList.length; i++) {
            if (cityName === this.cityList[i].name) {
                this.cityList.splice(i, 1);
            }
        }

    }
}
export default { City, Community };