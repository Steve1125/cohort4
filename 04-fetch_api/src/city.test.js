import city from './city.js'

test('city test', () => {
    console.log('in the city test');
    const clCity = new city.City("Calgary", 51, -114, 1300000);
    const clCity1 = new city.City("Red Deer", 51, -115, 14000);
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
})

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

    clCom.deleteCity("Auckland");
    console.log(clCom.cityList.length);
    console.log(clCom.cityList);
    expect(clCom.cityList.length).toBe(1);
    expect(clCom.cityList[0].name).toBe("Calgary");
    expect(clCom.cityList[0].latitude).toBe(51);
    expect(clCom.cityList[0].longitude).toBe(-114);
    expect(clCom.cityList[0].population).toBe(1300000);
    
})