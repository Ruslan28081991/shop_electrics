import { Firebase } from "../item/item.firebase";
import { BagModel } from "./bag.model";
import { BagView } from "./bag.view";

export class BagController {
    constructor() {
        this.bagModel = new BagModel();
        this.bagView = new BagView({
            onProductChange: this.handleProductChange
        });
        this.firebase = new Firebase();

        this.displayCart();
        this.handlePriceProducts()
    }

    async loadProduct (productId, count) {
        try {
            const product = await this.firebase.getProductId(productId);
            if(product) {
                product.count = count;
                this.bagView.createProduct(product);
            } else {
                console.error('Товар не найден');
            }
        } catch(error) {
            console.error('Ошибка при загрузке данных о товаре:', error);
        }
    }

    async displayCart() {
        const productsInCart = JSON.parse(window.localStorage.getItem('bagProducts')) || [];
        //
        if(productsInCart.length >= 1) {
            this.bagView.bagProductsNode.innerHTML = `<p class='bag_products_text'>Проверь корзину</p>`
        }
        //
        for (const { id, count } of productsInCart) {
            await this.loadProduct(id, count);
        }
        if(productsInCart.length === 0) {
            this.bagView.bagProductsNode.innerHTML = `<p class='bag_products_text'>Корзина пуста</p>`
        }
    }

    handleProductChange = (productId, change) => {
        let productsInCart = JSON.parse(window.localStorage.getItem('bagProducts')) || [];
        const productIndex = productsInCart.findIndex(p => p.id === productId);
        if (productIndex !== -1) {
            productsInCart[productIndex].count += change;
    
            if (productsInCart[productIndex].count <= 0) {
                productsInCart.splice(productIndex, 1);
                this.bagView.updateProductInView(productId, 0);  
            } else {
                this.bagView.updateProductInView(productId, productsInCart[productIndex].count);
            }

            window.localStorage.setItem('bagProducts', JSON.stringify(productsInCart));
            if (productsInCart.length === 0) {
                this.bagView.clearBag();
                window.localStorage.clear('bagProducts')
                this.bagView.bagProductsNode.innerHTML = `<p class='bag_products_text'>Корзина пуста</p>`
            }
            this.bagView.productsInLocalStorage();
            this.bagView.renderBagImages();
            //
            this.handlePriceProducts();
        } else {
            console.error('Product not found in cart:', productId); 
        }
    }

    handlePriceProducts = () => {
        const products = this.bagView.productsInLocalStorage()
        let totalPrice = 0;
        products.forEach(product => {
            totalPrice += product.price * product.count
        })
        this.bagView.bagSumNode.innerHTML = `Сумма $${(totalPrice).toFixed(2)}`
    }

}