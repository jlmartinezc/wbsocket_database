const { options } = require('../config/db/chats/db.config.js');
const knex = require('knex')(options);

class ChatService {
    constructor(){}    

    async getMessages(){
        try{
            return await knex.from('messages').select('*')
            .then((data) => data)
            .catch((err) => {console.log(err); throw err})
            // .finally(() => knex.destroy());            
        }
        catch(err){
            return {'Error': err};
        }  
    }

    async saveMessage(products){
        try{
            await knex('messages').insert(products)
            .then(() => console.log('Mensaje insertado'))
            .catch((err) => {console.log(err); throw err})
            // .finally(() => knex.destroy()); 
        }
        catch(err){
            return {'Error': err};
        }  
    }
}

module.exports = ChatService;