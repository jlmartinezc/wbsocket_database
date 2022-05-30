const Products = require('../controllers/Products');
const ProductsService = require('../models/ProductService');

const dataService = new ProductsService();
const newProduct = new Products(dataService);

const products = ( async(socket, io) => {   
    socket.emit('products', await newProduct.getProducts());
    socket.on('newProduct', async () => io.sockets.emit('products', await newProduct.getProducts())); 
});

module.exports = products
  