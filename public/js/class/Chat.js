import { Alert } from '../utiles/Alert.js';
const newAlert = new Alert();

export class Chat {
    addMessage(event, socket) {
        event.preventDefault();
        
        let author = document.getElementById('username').value;
        let text = document.getElementById('text').value.trim();
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    
        if(!regex.test(author)){
            newAlert.renderAlert('Ingrese un email valido', 'bg-danger');
            return;
        }
    
        if((!text || text.length === 0 )){
            newAlert.renderAlert('Ingrese un mensaje', 'bg-danger');
            return;
        }
    
        socket.emit('newMessage', {
            author: author,
            message: text,
        });
    
        document.getElementById('username').disabled = true;
        document.getElementById('text').value = "";
        document.getElementById('text').focus();
    
        return;
    }
    
    renderMessages(data) {
        if(typeof data !== 'object' || !data || data.Error) return;

        const chatMessages = data.map((message, index) => {
            return(`<div>
            <strong>${message.author}</strong>
            <span>[${message.date}] :</span>
            <span>${message.message}</span>
            </div>`);
        }).join(" ");
    
        document.getElementById("messages").innerHTML = chatMessages;
        let messageCenter = document.getElementById("messages");
        messageCenter.scrollTop = messageCenter.scrollHeight - messageCenter.clientHeight;
    
        return;
    }
}