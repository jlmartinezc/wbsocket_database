import { Alert } from '../utiles/Alert.js';
const newAlert = new Alert();

export class Products {
    addProduct(event, socket){
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const data = Array.from(formData.entries());
        let product = data.reduce((info, [key, value]) => ({...info, [key]: value,}), {});
        const isEmptyProduct = Object.values(product).some(element => element.trim() == '');
    
        if(isEmptyProduct){
            newAlert.renderAlert('Ingrese todos los campos del producto', 'bg-danger');
            return;
        }
    
        product = JSON.stringify(product);
    
        const url = '/api/productos';
        const headerConfig = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
    
        const request = new Request(url, {
            method: 'POST',
            body: product,
            mode: 'cors', 
            headers: headerConfig
        });
    
        fetch(request)
        .then(() => {  
            newAlert.renderAlert('Producto agregado', 'bg-success');
            socket.emit('newProduct');
        })
    
        document.getElementById('title').value = "";
        document.getElementById('price').value = "";
        document.getElementById('thumbnail').value = "";
    
        return;
    }
    
    renderProducts(data) {
        if(typeof data !== 'object' || !data) return;

        const allProduts = data.map((product, index) => {
            return(`
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>
                    <img src="${product.thumbnail}">
                </td>
            </tr>`);
        }).join(" ");
    
        document.getElementById('allProducts').innerHTML = allProduts;
    
        return;
    }
}