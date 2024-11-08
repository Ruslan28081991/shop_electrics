import { ItemModel } from "./item.model";
import { ItemView } from "./item.view";
import { Firebase } from "./item.firebase";

export class ItemController {
    constructor() {
        this.itemModel = new ItemModel({
            onNewProduct: this.handleModel
        });
        this.itemView = new ItemView({
            onNewItem: this.handleView
        });
        this.firebase = new Firebase();
    }

    async pullFirebase() { 
        try {
            const products = await this.firebase.pull();
            this.itemModel.set(products);
            this.itemView.render(this.itemModel.get())
        } catch (error) {
            console.error('Ошибка при загрузке данных из Firebase:', error)
        }
    }   

    async getOrder() {
        try {
            const orders = await this.firebase.getOrder();
            this.itemView.renderOrders(orders)
        } catch(error) {
            console.error('Ошибка при загрузке данных из Firebase:', error)
        }
    }

    handleModel = (products) => {
        this.itemView.render(products)
    }

    handleView = (product) => {
            this.itemModel.add(product);
            this.firebase.add(product)
    }    
}