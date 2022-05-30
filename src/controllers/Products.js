class Products {
    constructor(productProvider) {
        this.productProvider = productProvider;
    }

    async getProducts(){
        try{
            let allProducts = await this.productProvider.getProducts()
            .then((data) => data)
            .catch(error => {Error: 'Ocurrio un fallo al crear el producto'});  

            if(allProducts == '' || allProducts == undefined && allProducts == null){
                return {'Error': 'No se encontró ningún producto'}
            }           

            if(allProducts.Error) return allProducts

            return allProducts;
        }catch(err){
            return {'Error' : err};
        }
    }

    async createProduct(data){        
        return await this.productProvider.saveProducts(data)
        .then(() => "El producto fue creado exitosamente")
        .catch(error => "Ocurrio un fallo al crear el producto");        
    }
}

module.exports = Products;
