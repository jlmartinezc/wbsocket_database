const { options } = require('../config/db/products/db.config');
const knex = require('knex')(options);

class ProductService {
    constructor(){}    

    async getProducts(){
        try{
            return await knex.from('products').select('*')
            .then((data) => data)
            .catch((err) => {console.log(err); throw err})
            // .finally(() => knex.destroy());            
        }
        catch(err){
            return {'Error': err};
        }  
    }

    async saveProducts(products){
        try{
            await knex('products').insert(products)
            .then(() => console.log('Producto insertado'))
            .catch((err) => {console.log(err); throw err})
            // .finally(() => knex.destroy()); 
        }
        catch(err){
            return {'Error': err};
        }  
    }
}

module.exports = ProductService;