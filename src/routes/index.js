const path = require('path');
const productRouter = require('./api/products');
const pathToFile = path.resolve(__dirname, '../../public');

module.exports = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(pathToFile));
    app.use('/api/productos', productRouter);
    
    app.set('views', path.join(__dirname, '../Views'))
    app.set('view engine', 'ejs');
    
    app.get('/', async(req, res) => res.render( 'pages/index' ));
}