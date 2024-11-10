var r=Object.defineProperty;var c=(t,e,s)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var o=(t,e,s)=>(c(t,typeof e!="symbol"?e+"":e,s),s);import{F as l}from"./item.firebase-Ci3SnZzg.js";const d="/shop_electrics/addCart.png";class g{constructor(){o(this,"_back",()=>{window.location.href="/shop_electrics/index.html"});o(this,"_bag",()=>{window.location.href="/shop_electrics/bag.html"});o(this,"renderInfo",e=>{if(!e)this.infoNode.innerHTML="Упс, ошибка. Такого товара нет.";else{const s="$";this.infoNode.innerHTML=`
                <div class='container_info'>
                    <div class="info_img_box">
                        <img class="info_img" src='/shop_electrics/${e.imgURL}'>
                    </div>
                    <p class="info_title">${e.title}</p>
                    <p class="info_series">${e.series}</p>
                    <div class="rating">
                        <span class="star filled">&#9733</span>
                        <span class="star filled">&#9733</span>
                        <span class="star filled">&#9733</span>
                        <span class="star filled">&#9733</span>
                        <span class="star half-filled">&#9733</span>
                        <span class="star filled">4.5 / 5</span>
                    </div>
                    <p class="info_price">${s} ${e.price}</p>
                    <p class="info_short">${e.descriptionShort}</p>
                   
                    <button class="info_btn">
                        <img src="${d}"> В корзину
                    </button>
                    <div class="info_line"></div>
                    <h2 class="info_description">Описание</h2>
                    <p class="info_desc">${e.description}</p>
                </div>
            `,this.infoBtnNode=document.querySelector(".info_btn"),this.infoBtnNode.addEventListener("click",()=>{let i=JSON.parse(window.localStorage.getItem("bagProducts"))||[];const n=i.findIndex(a=>a.id===e.id);n!==-1?i[n].count+=1:i.push({id:e.id,count:1,img:e.imgURL,price:e.price}),window.localStorage.setItem("bagProducts",JSON.stringify(i)),this.renderBagImages()})}});this.backNode=document.querySelector(".back"),this.infoNode=document.querySelector(".info"),this.bagNode=document.querySelector(".bag"),this.bagBtnNode=document.querySelector(".info_bag_btn"),this.backNode.addEventListener("click",this._back),this.bagBtnNode.addEventListener("click",this._bag),this.renderBagImages()}productsWithLocalStorage(){return JSON.parse(window.localStorage.getItem("bagProducts"))}imgWithLocalStorage(){return(JSON.parse(window.localStorage.getItem("bagProducts"))||[]).map(i=>i.img).filter(Boolean)}renderBagImages(){this.bagNode.innerHTML="",this.imgWithLocalStorage().forEach(s=>{const i=document.createElement("img");i.className="bag_img",i.src=`/shop_electrics/${s}`,this.bagNode.appendChild(i)})}}class f{constructor(){this.infoView=new g,this.firebase=new l;const s=new URLSearchParams(window.location.search).get("productId");s&&this.loadProduct(s)}async loadProduct(e){const s=await this.firebase.getProductId(e);s?this.infoView.renderInfo(s):(this.infoView.infoNode.innerHTML="Упс, ошибка. Такого товара нет.",console.error("Товар не найден"))}catch(e){console.error("Ошибка при загрузке данных о товаре:",e)}}new f;
