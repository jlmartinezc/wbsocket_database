class Chat{
    constructor(chatProvider) {
        this.chatProvider = chatProvider;
    }

    async getChat(){
        try{
            let allMessages = await this.chatProvider.getMessages();
            
            return allMessages;
        }catch(err){
            return {'Error' : err};
        }
    }

    async createChat(data){        
        return await this.chatProvider.saveMessage(data)
        .then(() => "El producto fue creado exitosamente")
        .catch(error => "Ocurrio un fallo al crear el producto");        
    }
}

module.exports = Chat;
