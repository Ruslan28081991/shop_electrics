var o=Object.defineProperty;var i=(r,e,t)=>e in r?o(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var a=(r,e,t)=>(i(r,typeof e!="symbol"?e+"":e,t),t);import{F as c}from"./item.firebase-BPDxRCjr.js";import{v as n}from"./v4-CQkTLCs1.js";class d{constructor(e){a(this,"placeOrder",async e=>{const t=n(),s={...e,orderId:t,createAt:new Date};console.log(s),await this.firebase.saveOrder(s)});this.currentUserId=e.id,this.firebase=new c}async getOrder(e){const t=await this.firebase.getOrder(e);if(t&&t.userId===this.currentUserId)return t;throw new Error("Доступ запрещен")}}class p{constructor({onProduct:e}){a(this,"_back",()=>{window.location.href="/shop_electrics/bag.html"});a(this,"render",e=>{if(e.length===0)this.checkoutContainerNode.innerHTML='<p class="checkout_title">В заказе нет товаров</p>';else{this.checkoutContainerNode.innerHTML=`
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
                                pattern="^+7d{10}$"
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
                                <img class="pay_cart_img" src="/shop_electrics/pay_cart.png" alt="Карта">
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
            `;const t=this.checkoutContainerNode.querySelector(".checkout_products");e.forEach(s=>{t.innerHTML+=`
                <div class="checkout_bag_container">
                    <img class="bag_image" src="/shop_electrics/${s.img}" alt="product">
                    <p class="bag_title">${s.title}</p>
                    <p class="bag_series">${s.series}</p>
                    <p class="bag_descr">${s.descriptionShort}</p>
                    <div class="rating">
                        <span class="star filled">&#9733</span>
                        <span class="star filled">&#9733</span>
                        <span class="star filled">&#9733</span>
                        <span class="star filled">&#9733</span>
                        <span class="star half-filled">&#9733</span>
                        <span class="star filled">4.5 / 5</span>
                    </div>
                    <p class="bag_price">$ ${s.price} x ${s.count}</p>
                </div>
                `}),this.adressBtnNode=document.querySelector(".adress_btn"),this.adressBtnNode.addEventListener("click",this._changeAdressPopup),this.payBtnNode=document.querySelector(".pay_btn"),this.payBtnNode.addEventListener("click",this._changePayOpen),this.addOrderNode=document.querySelector(".summa_btn")}this.onProduct(e)});a(this,"_changeAdressPopup",()=>{this.adressPopupNode=document.querySelector(".adress_popup"),this.adressPopupNode.classList.add("adress_popup_open"),this._changeInputValue()});a(this,"_changeInputValue",()=>{this.inputFullName=document.querySelector("#popup_fullname"),this.inputStreet=document.querySelector("#popup_street"),this.inputCity=document.querySelector("#popup_city"),this.inputTel=document.querySelector("#popup_tel"),this.adressFullnameNode=document.querySelector(".adress_fullname"),this.adressStreetNode=document.querySelector(".adress_street"),this.adressCityNode=document.querySelector(".adress_city"),this.adressTelNode=document.querySelector(".adress_number"),this.inputFullName.addEventListener("input",e=>{this.adressFullnameNode.innerHTML=e.target.value}),this.inputStreet.addEventListener("input",e=>{this.adressStreetNode.innerHTML=e.target.value}),this.inputCity.addEventListener("input",e=>{this.adressCityNode.innerHTML=e.target.value}),this.inputTel.addEventListener("input",e=>{this.adressTelNode.innerHTML=e.target.value}),this.adressPopupBtnNode=document.querySelector(".adress_popup_btn"),this.adressPopupBtnNode.addEventListener("click",this._closeWindow)});a(this,"_closeWindow",e=>{e.preventDefault(),this.adressPopupNode.classList.remove("adress_popup_open")});a(this,"handlePriceProducts",()=>{this.summaProductsNode=document.querySelector(".summa_product");const e=JSON.parse(window.localStorage.getItem("bagProducts"));let t=0;return e.forEach(s=>{t+=s.price*s.count}),t});a(this,"handleTotal",()=>{let e=this.handlePriceProducts(),t=6.99,s=0;return s=e+t,s});a(this,"_changePayOpen",()=>{this.payPopupNode=document.querySelector(".pay_popup"),this.payPopupNode.classList.add("pay_popup_open"),this._changePayInput()});a(this,"_changePayInput",()=>{this.payCartInputNode=document.querySelector("#pay_cart"),this.payCashInputNode=document.querySelector("#pay_cash"),this.payTextNode=document.querySelector(".pay_text"),this.payPopupBtnNode=document.querySelector(".pay_popup_btn"),this.payCartInputNode.addEventListener("change",this._handlePayChange),this.payCashInputNode.addEventListener("change",this._handlePayChange),this.payPopupBtnNode.addEventListener("click",this._closePayWindow)});a(this,"_handlePayChange",()=>{this.payCartInputNode.checked?this.payTextNode.innerHTML=`
                <img class="pay_cart_img" src="/shop_electrics/pay_cart.png" alt="Карта">
                Оплата картой при получении`:this.payCashInputNode.checked&&(this.payTextNode.innerHTML=`
                <img class="pay_cart_img" src="/shop_electrics/pay_cash.png" alt="Карта">
                Оплата наличными при получении`)});a(this,"_closePayWindow",e=>{e.preventDefault(),this.payPopupNode.classList.remove("pay_popup_open")});this.backNode=document.querySelector(".back"),this.checkoutContainerNode=document.querySelector(".checkout_container"),this.onProduct=e,this.backNode.addEventListener("click",this._back)}}class l{constructor(){a(this,"handleView",e=>{this.checkoutView.addOrderNode.addEventListener("click",()=>{const t={products:e,address:{fullname:document.querySelector(".adress_fullname").textContent,street:document.querySelector(".adress_street").textContent,city:document.querySelector(".adress_city").textContent,tel:document.querySelector(".adress_number").textContent},paymentMethod:document.querySelector(".pay_text").textContent};this.checkoutModel.placeOrder(t)})});this.checkoutModel=new d({id:this.currentUserId}),this.checkoutView=new p({onProduct:this.handleView}),this.firebase=new c,this.init()}async init(){let e=JSON.parse(window.localStorage.getItem("bagProducts"))||[];for(const t of e)if(!t.title){const s=await this.firebase.getProductId(t.id);s&&Object.assign(t,s)}this.checkoutView.render(e)}}new l;
