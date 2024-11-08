import { InfoView } from "./info.view";
import { Firebase } from "../item/item.firebase";

export class InfoController {
    constructor() {
        this.infoView = new InfoView();
        this.firebase = new Firebase();

        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('productId');
        if(productId) {
            this.loadProduct(productId);
        } 
    }

    async loadProduct(productId) {
        const product = await this.firebase.getProductId(productId);
        if(product) {
            this.infoView.renderInfo(product);
        } else {
            this.infoView.infoNode.innerHTML = 'Упс, ошибка. Такого товара нет.'
            
            console.error('Товар не найден');
        }
    } catch(error) {
        console.error('Ошибка при загрузке данных о товаре:', error);
    }

}