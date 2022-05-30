const { options } = require('./db.config.js');
const knex = require('knex')(options);

knex.schema.createTable('products', table => {
    table.increments('id');
    table.string('title')
    table.integer('price')
    table.string('thumbnail')
})
.then(() => 'Tabla creada')
.catch((err) => {console.log(err); throw err})
.finally(() => knex.destroy())