const DB = require('./db.js');

const getCities = (id) => {
    return new Promise((resolve, reject) => {
        cities = [];
        DB.getAllCities()
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].country_id == id) {
                    cities.push(data[i].city);
                }
            }
        resolve(cities);
        })
    })
    
}
module.exports = {
    getCities
  }
