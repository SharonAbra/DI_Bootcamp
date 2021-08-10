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

// knex.select('country_id', 'city').from('city')
// .then(data => {
//     console.log(data);
// })
// .catch(e=>{
//     console.log(e);
// })



// knex('city')
// .select('city', 'city_id')
// .where({city_id:88})
// .then(data => {
//     console.log(data);
// })

// knex('city')
// .where({city_id:88})
// .update({city:'Bradford'})
// .returning(['city_id', 'city'])
// .then(data=> {
//     console.log(data);
// })

// knex('country')
// .insert({country:'lalaland'})
// .returning('*')
// .then(data=> {
//     console.log(data);
// })
// .catch(e=> {
//     console.log(e);
// })

knex('country')
.del()
.where({country_id:110})
.then(data=> {
    // console.log(data);
})
.catch(e=> {
    console.log(e);
})