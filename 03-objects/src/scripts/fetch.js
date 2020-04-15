const data = [
    { "name": "Maricica", "surname": "Ghinea", "gender": "female", "region": "Romania" },
    { "name": "Nishant", "surname": "Bhattarai", "gender": "male", "region": "Nepal" },
    { "name": "Nicuță", "surname": "Lotru", "gender": "male", "region": "Romania" },
    { "name": "Barbara", "surname": "Schneider", "gender": "female", "region": "United States" },
    { "name": "Stanca", "surname": "Grigoriu", "gender": "female", "region": "Romania" }
]

const functions = {

    getFirstName: () => {
        //console.log("in the function getFirstName");
        return data[0].name;
    },

    getAllFirstNames: () => {
        // let arr = [];
        // for (let i = 0; i < data.length; i++) {
        //     arr.push(data[i].name);
        // }
        // return arr;
        return data.map((d,i,x)=>d.name);
    }
}

export default functions;