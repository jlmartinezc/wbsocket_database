const { options } = require('./db.config.js');
const knex = require('knex')(options);

knex.schema.createTable('messages', table => {
    table.increments('id');
    table.timestamp('date').defaultTo(knex.fn.now())
    table.integer('author')
    table.string('message')
})
.then(() => 'Tabla creada')
.catch((err) => {console.log(err); throw err})
.finally(() => knex.destroy())