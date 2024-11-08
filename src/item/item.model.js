import galaxyLogo from '/galaxy.png?url';
import appleWatch from '../../public/watch.png';
import { v4 as uuidv4 } from 'uuid';

export class ItemModel {
    constructor({
        onNewProduct
    }) {
        this.products = [];

        this.onNewProduct = onNewProduct;
    }

   

    add(details) {
        const product = {
            imgURL: details.imgURL,
            title: details.title,
            series: details.series,
            price: details.price,
            description: details.description,
            descriptionShort: details.descriptionShort,
            rating: details.rating,
            id: uuidv4()
        }
        this.products.push(product);
        this.onNewProduct(this.products)
        
        return product
        
    }

    get() {
        return this.products;
    }

    set(products) {
        this.products = products;
    }


}