import { v4 as uuidv4 } from 'uuid';

export class CheckoutView {
    constructor({ onProduct }) {
        this.backNode = document.querySelector('.back');
        this.checkoutContainerNode = document.querySelector('.checkout_container');
    
        this.onProduct = onProduct;

        this.backNode.addEventListener('click', this._back)
    }

    _back = () => {
        window.location.href = 'bag.html'
    }

    render = (products) => {
        if(products.length === 0) {
            this.checkoutContainerNode.innerHTML = '<p class="checkout_title">В заказе нет товаров</p>'
        } else {
            this.checkoutContainerNode.innerHTML = `
                <div class="checkout_summa">
                    <h2 class="summa_title">Сумма</h2>
                    <div class="summa_box">
                        <p class="suma_product_title">Товары:</p>
                        <span class="summa_product">$ ${this.handlePriceProducts()}</span>
                    </div>
                    <div class="summa_box">
                        <p class="summa_delivery_title">Доставка:</p>
                        <span class="summa_delivery">$6.99</span>
                    </div>
                    <div class="summa_box">
                        <p class="summa_price_title">Стоимость:</p>
                        <span class="summa_price">$ ${this.handleTotal()}</span>
                    </div>
            
                    <button class="summa_btn">Разместить заказ</button>
                </div>

                <div class="adress">
                    <h2 class="adress_title">Адрес доставки</h2>
                    <div class="adress_container">
                        <div class="adress_data">
                            <p class="adress_fullname">Витя Иванов</p>
                            <p class="adress_street">Ленинградский проспект, 27</p>
                            <p class="adress_city">Москва</p>
                            <p class="adress_number">+7 999 999 99 99</p>
                        </div>
                        <div class="adress_change">
                            <button class="adress_btn">Изменить</button>
                        </div>
                    </div>
                </div>

                <div class="adress_popup">
                    <form class="adress_popup_box">
                        <label class="adress_label" for="popup_fullname">Имя
                            <input 
                                id="popup_fullname" 
                                type="text" 
                                placeholder="Витя Иванов"
                                required>
                        </label>
                        <label class="adress_label" for="popup_street">Улица, дом
                            <input 
                                id="popup_street" 
                                type="text" 
                                placeholder="Ленинградский проспект, 27"
                                required>
                        </label>
                        <label class="adress_label" for="popup_city">Город
                            <input 
                                id="popup_city" 
                                type="text" 
                                placeholder="Москва"
                                required>
                        </label>
                        <label class="adress_label" for="popup_tel">Телефон
                            <input 
                                id="popup_tel" 
                                type="tel" 
                                value="+7"
                                placeholder="+7 999 999 99 99"
                                pattern="^\+7\d{10}$"
                                maxlength="12"
                                title="Номер телефона должен начинаться с +7 и содержать 11 цифр"
                                inputmode="numeric"
                                oninput="this.value = this.value.replace(/[^0-9+]/g, '')"
                                required
                                >
                        </label>
                        <button class="adress_popup_btn">Сохранить</button>
                    </form>
                </div>

                <div class="pay">
                    <h2 class="pay_title">Способ оплаты</h2>
                    <div class="pay_container">
                        <div class="pay_data">
                            <p class="pay_text">
                                <img class="pay_cart_img" src="./public/pay_cart.png" alt="Карта">
                                Оплата картой при получении
                            </p>
                        </div>
                        <div class="pay_change">
                            <button class="pay_btn">Изменить</button>
                        </div>
                    </div>
                </div>

                <div class="pay_popup">
                    <form class="pay_popup_box">
                        <label class="pay_label_cart" for="pay_cart"> 
                            Оплата картой при получении
                            <input 
                                type="radio" 
                                name="payment" 
                                id="pay_cart"
                                class="square-radio">
                            <span class="custom-radio"></span>
                        </label>
                        <label class="pay_label_cash" for="pay_cash"> 
                            Оплата наличными при получении
                            <input 
                                type="radio" 
                                name="payment" 
                                id="pay_cash"
                                class="square-radio">
                            <span class="custom-radio"></span>
                        </label>
                        <button class="pay_popup_btn">Сохранить</button>
                    </form>
                </div>

                <div class="checkout_products">
                <p class="checkout_products_text">Проверь корзину</p> 
                </div>
            `
            const checkoutProductsContainer = this.checkoutContainerNode.querySelector('.checkout_products');
            products.forEach(product => {
                checkoutProductsContainer.innerHTML += `
                <div class="checkout_bag_container">
                    <img class="bag_image" src="${product.img}" alt="product">
                    <p class="bag_title">${product.title}</p>
                    <p class="bag_series">${product.series}</p>
                    <p class="bag_descr">${product.descriptionShort}</p>
                    <div class="rating">
                        <span class="star filled">&#9733</span>
                        <span class="star filled">&#9733</span>
                        <span class="star filled">&#9733</span>
                        <span class="star filled">&#9733</span>
                        <span class="star half-filled">&#9733</span>
                        <span class="star filled">4.5 / 5</span>
                    </div>
                    <p class="bag_price">$ ${product.price} x ${product.count}</p>
                </div>
                `   
            });
            this.adressBtnNode = document.querySelector('.adress_btn');
            this.adressBtnNode.addEventListener('click', this._changeAdressPopup);
            
            this.payBtnNode = document.querySelector('.pay_btn');
            this.payBtnNode.addEventListener('click', this._changePayOpen);

            this.addOrderNode = document.querySelector('.summa_btn');
        }
        this.onProduct(products)
    }
    
    _changeAdressPopup = () => {
        this.adressPopupNode = document.querySelector('.adress_popup');
        this.adressPopupNode.classList.add('adress_popup_open');
        this._changeInputValue();
    }

    _changeInputValue = () => {
        this.inputFullName = document.querySelector('#popup_fullname');
        this.inputStreet = document.querySelector('#popup_street');
        this.inputCity = document.querySelector('#popup_city');
        this.inputTel = document.querySelector('#popup_tel');

        this.adressFullnameNode = document.querySelector('.adress_fullname');
        this.adressStreetNode = document.querySelector('.adress_street');
        this.adressCityNode = document.querySelector('.adress_city');
        this.adressTelNode = document.querySelector('.adress_number');

        this.inputFullName.addEventListener('input', (e) => {
            this.adressFullnameNode.innerHTML = e.target.value;
        })
        this.inputStreet.addEventListener('input', (e) => {
            this.adressStreetNode.innerHTML = e.target.value;
        })
        this.inputCity.addEventListener('input', (e) => {
            this.adressCityNode.innerHTML = e.target.value;
        })
        this.inputTel.addEventListener('input', (e) => {
            this.adressTelNode.innerHTML = e.target.value;
        })

        this.adressPopupBtnNode = document.querySelector('.adress_popup_btn');
        this.adressPopupBtnNode.addEventListener('click', this._closeWindow);
    }

    _closeWindow = (e) => {
        e.preventDefault();
        this.adressPopupNode.classList.remove('adress_popup_open');
    }

    handlePriceProducts = () => {
        this.summaProductsNode = document.querySelector('.summa_product')
        const products = JSON.parse(window.localStorage.getItem('bagProducts'));
        let totalPrice = 0;
        products.forEach(product => {
            totalPrice += product.price * product.count
        })
        return totalPrice
    }

    handleTotal = () => {
        let totalPrice = this.handlePriceProducts()
        let deliveryPrice = 6.99;
        let totalSum = 0;
        totalSum = totalPrice + deliveryPrice;
        return totalSum
    }

    _changePayOpen = () => { 
        this.payPopupNode = document.querySelector('.pay_popup');
        this.payPopupNode.classList.add('pay_popup_open');
        this._changePayInput()
    }

    _changePayInput = () => {
        this.payCartInputNode = document.querySelector('#pay_cart');
        this.payCashInputNode = document.querySelector('#pay_cash');
        this.payTextNode = document.querySelector('.pay_text');
        this.payPopupBtnNode = document.querySelector('.pay_popup_btn'); 
        
        this.payCartInputNode.addEventListener('change', this._handlePayChange);
        this.payCashInputNode.addEventListener('change', this._handlePayChange);
        this.payPopupBtnNode.addEventListener('click', this._closePayWindow)
    }

    _handlePayChange = () => {
        if(this.payCartInputNode.checked) {
            this.payTextNode.innerHTML = `
                <img class="pay_cart_img" src="./public/pay_cart.png" alt="Карта">
                Оплата картой при получении`
        } else if(this.payCashInputNode.checked) {
            this.payTextNode.innerHTML = `
                <img class="pay_cart_img" src="./public/pay_cash.png" alt="Карта">
                Оплата наличными при получении`
        }
    }

    _closePayWindow = (e) => {
        e.preventDefault();
        this.payPopupNode.classList.remove('pay_popup_open')
    }
}