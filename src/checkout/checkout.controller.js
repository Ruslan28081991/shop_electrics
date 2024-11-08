import { Firebase } from '../item/item.firebase';
import { CheckoutModel } from './checkout.model';
import { CheckoutView } from './checkout.view';

export class CheckoutController {
    constructor() {
        this.checkoutModel = new CheckoutModel({ id: this.currentUserId });
        this.checkoutView = new CheckoutView({
            onProduct: this.handleView
        });
        this.firebase = new Firebase();

        this.init();
    }

    async init() {
        let products = JSON.parse(window.localStorage.getItem('bagProducts')) || [];
        for(const product of products) {
            if(!product.title) {
                const firebaseProduct = await this.firebase.getProductId(product.id);
                if(firebaseProduct) {
                    Object.assign(product, firebaseProduct)
                }
            }
        }
        this.checkoutView.render(products)
    }

    handleView = (products) => {
        this.checkoutView.addOrderNode.addEventListener('click', () => {
            const orderDetails = {
                products,
                address: {
                    fullname: document.querySelector('.adress_fullname').textContent,
                    street: document.querySelector('.adress_street').textContent,
                    city: document.querySelector('.adress_city').textContent,
                    tel: document.querySelector('.adress_number').textContent,
                },
                paymentMethod: document.querySelector('.pay_text').textContent
            };
            this.checkoutModel.placeOrder(orderDetails)
        });
    }
}