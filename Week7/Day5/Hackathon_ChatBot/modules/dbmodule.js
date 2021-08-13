// initiate connection with database

const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      port: '5433',
      user : 'postgres',
      password : 'shakshuka2',
      database : 'chatbot'
    }
  });

  // retrieve triggers data
const getTriggers = () => {
  return knex.select('trigger_body', 'trigger_group').from('triggers');
}
  // retrieve responses data
const getResponses = () => {
    return knex.select('response_body', 'response_group').from('responses');
}

// prepare functions for export
module.exports = {
  triggers: getTriggers,
  responses: getResponses
}
