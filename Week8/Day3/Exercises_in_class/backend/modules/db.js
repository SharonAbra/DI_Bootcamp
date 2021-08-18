const knex = require('knex');
require('dotenv/config');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port: '5433',
    user : 'postgres',
    password : process.env.POSTGRES_PASSWORD,
    database : 'dvdrental'
  }
});

const getAllCountries = () => {
    return db.select('country_id','country').from('country');
  }

const getAllCities = () => {
    return db.select('country_id', 'city').from('city');
  }

module.exports = {
  getAllCountries,
  getAllCities
}
