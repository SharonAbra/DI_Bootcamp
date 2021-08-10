
const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      port: '5433',
      user : 'postgres',
      password : 'shakshuka2',
      database : 'dvdrental'
    }
  });

  //this function returns a promise
const getAllCountries = () => {
    return knex.select('country_id', 'country').from('country');
}

const createUser = (username,password) => {
  return knex('users')
  .insert({
    // value and key identical so this syntax is possible
    username,
    password
  })
  .returning('*');
}

module.exports = {
  countries: getAllCountries,
  createUser: createUser
}
