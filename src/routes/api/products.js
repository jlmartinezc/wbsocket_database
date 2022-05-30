const { Router } = require('express');
const Products = require('../../controllers/Products')
const ProductsService = require('../../models/ProductService');

const router = Router();

const dataService = new ProductsService();
const newProduct = new Products(dataService);

router.get('/', async(req, res) => res.send( await newProduct.getProducts() ));
router.post('/', async(req, res) => res.send( await newProduct.createProduct(req.body) ));

module.exports = router;