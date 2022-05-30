import { Chat } from './class/Chat.js';
import { Products } from './class/Products.js';

const socket = io.connect();

const newChat = new Chat(socket);
const newProducts = new Products();

const chat = document.getElementById('messageCenter'); 
const products = document.getElementById('addProduct');

chat.addEventListener('submit', (event) => newChat.addMessage(event, socket));
products.addEventListener('submit', (event) => newProducts.addProduct(event, socket));

socket.on('messages', (data) => newChat.renderMessages(data));
socket.on('products', (data) => newProducts.renderProducts(data));