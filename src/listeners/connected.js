const chatEvent = require('../event/chat');
const productEvent = require('../event/product');

module.exports = async(io) => {
    io.on("connection", async (socket) =>  {
        console.log('Un cliente se ha conectado!');
        chatEvent(socket, io);
        productEvent(socket, io);
    })
}