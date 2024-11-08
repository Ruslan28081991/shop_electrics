import { v4 as uuidv4 } from 'uuid';
import { Firebase } from '../item/item.firebase';

export class CheckoutModel {
    constructor(currentUser) {
        this.currentUserId = currentUser.id;
        this.firebase = new Firebase();
    }

    placeOrder = async (orderDetails) => {
        const orderId = uuidv4();
        const orderData = {
            ...orderDetails,
            orderId,
            // userId: this.currentUserId,
            createAt: new Date(),
        };
        console.log(orderData)
        await this.firebase.saveOrder(orderData);
    }

    async getOrder(orderId) {
        const order = await this.firebase.getOrder(orderId)
        if(order && order.userId === this.currentUserId) {
            return order;
        } else {
            throw new Error("Доступ запрещен")
        }
    }

} 