import { count } from 'firebase/firestore';
import addCart from '/addCart.png';

export class InfoView {
    constructor() {
        this.backNode = document.querySelector('.back');
        this.infoNode = document.querySelector('.info');
        this.bagNode = document.querySelector('.bag');
        this.bagBtnNode = document.querySelector('.info_bag_btn')


        this.backNode.addEventListener('click', this._back);
        this.bagBtnNode.addEventListener('click', this._bag);


       
        this.renderBagImages();
    }

    _back = () => {
        window.location.href = '/shop_electrics/index.html'
    }

    _bag = () => {
        window.location.href = '/shop_electrics/bag.html'
    }

    renderInfo = (product) => {
        if(!product) {
            this.infoNode.innerHTML = "Упс, ошибка. Такого товара нет."
        } else {
            const CURRENCY = '$';
            this.infoNode.innerHTML = `
                <div class='container_info'>
                    <div class="info_img_box">
                        <img class="info_img" src='/shop_electrics/${product.imgURL}'>
                    </div>
                    <p class="info_title">${product.title}</p>
                    <p class="info_series">${product.series}</p>
                    <div class="rating">
                        <span class="star filled">&#9733</span>
                        <span class="star filled">&#9733</span>
                        <span class="star filled">&#9733</span>
                        <span class="star filled">&#9733</span>
                        <span class="star half-filled">&#9733</span>
                        <span class="star filled">4.5 / 5</span>
                    </div>
                    <p class="info_price">${CURRENCY} ${product.price}</p>
                    <p class="info_short">${product.descriptionShort}</p>
                   
                    <button class="info_btn">
                        <img src="${addCart}"> В корзину
                    </button>
                    <div class="info_line"></div>
                    <h2 class="info_description">Описание</h2>
                    <p class="info_desc">${product.description}</p>
                </div>
            `;
            this.infoBtnNode = document.querySelector('.info_btn');
            this.infoBtnNode.addEventListener('click', () => {
                let productsInLocalStorage = JSON.parse(window.localStorage.getItem('bagProducts')) || [];
                const existingProductIndex = productsInLocalStorage.findIndex(p => p.id === product.id);
                if(existingProductIndex !== -1) {
                    productsInLocalStorage[existingProductIndex].count += 1;
                } else {
                    productsInLocalStorage.push({
                        id: product.id,
                        count: 1,
                        img: product.imgURL,
                        price: product.price
                    })
                }
                window.localStorage.setItem('bagProducts', JSON.stringify(productsInLocalStorage));
                this.renderBagImages();
            })
        }
    }

    productsWithLocalStorage() {
        let productsInCarts = JSON.parse(window.localStorage.getItem('bagProducts'));
        return productsInCarts;
    }

    imgWithLocalStorage() {
        let productsInCarts = JSON.parse(window.localStorage.getItem('bagProducts')) || [];
        const images = productsInCarts.map(product => product.img).filter(Boolean);
        return images;
    }

    renderBagImages() {
        this.bagNode.innerHTML = '';
        const products = this.imgWithLocalStorage();

        products.forEach(img => {
            const imgElement = document.createElement('img');
            imgElement.className = 'bag_img';
            imgElement.src = `/shop_electrics/${img}`;
            this.bagNode.appendChild(imgElement);
        });
    }
}