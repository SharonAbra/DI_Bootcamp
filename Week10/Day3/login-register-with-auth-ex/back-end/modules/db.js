const knex =require('knex');

module.exports = {
  db: knex({
    client:'pg',
    connection:{
      host:'127.0.0.1',
      user:'postgres',
      password:'123456',
      database:'postgres'
    }
  })
}
