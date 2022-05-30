const Messages = require('../controllers/Chat')
const messageService = require('../models/ChatService');

const dataService = new messageService();
const newMessages = new Messages(dataService);

const chat = ( async(socket, io) => {   
    socket.emit('messages', await newMessages.getChat());
    socket.on('newMessage', async data => {
        await newMessages.createChat(data);
        io.sockets.emit('messages', await newMessages.getChat());
    });
});

module.exports = chat