export class BagView {
    constructor({ onProductChange}) {
        this.backNode = document.querySelector('.back');
        this.bagProductsNode = document.querySelector('.bag_products');
        this.bagNode = document.querySelector('.bag');
        this.bagSumNode = document.querySelector('.bag_sum');
        this.bagBtnNode = document.querySelector('.bag_btn');

        this.backNode.addEventListener('click', this._back);
        this.bagBtnNode.addEventListener('click', this._order);
        
        this.onProductChange = onProductChange
   
        this.renderBagImages()
    }
    
    _back = () => {
        window.location.href = '/shop_electrics/index.html'
    }

    _order() {
        window.location.href = '/shop_electrics/checkout.html'
    }

    renderBagImages () {
        this.bagNode.innerHTML = '';
        const products = this.imgWithLocalStorage();

        products.forEach(img => {
            const imgElement = document.createElement('img');
            imgElement.className = 'bag_img';
            imgElement.src = `/shop_electrics/${img}`;
            this.bagNode.appendChild(imgElement);
        });
    }

    productsInLocalStorage() {
        const productsInCarts = JSON.parse(window.localStorage.getItem('bagProducts')) || [];
        return productsInCarts;
    }

    imgWithLocalStorage() {
        const validProducts = this.productsInLocalStorage().filter(product => product.count > 0);
        const images = validProducts.map(product => product.img).filter(Boolean);
        return images;
    }

    clearBag() {
        this.bagProductsNode.innerHTML = '';
    }

    createProduct = (product) => {
        const CURRENCY = '$';
        const bagContainer = document.createElement('div');
        bagContainer.className = 'bag_container';
        bagContainer.dataset.id = product.id;

        const bagImg = document.createElement('img');
        bagImg.className = 'bag_image';
        bagImg.src = `/shop_electrics/${product.imgURL}`;

        const bagTitle = document.createElement('p');
        bagTitle.className = 'bag_title';
        bagTitle.innerHTML = `${product.title}`;

        const bagSeries = document.createElement('p');
        bagSeries.className = "bag_series";
        bagSeries.innerHTML = `${product.series}`;

        const bagPriceBox = document.createElement('div');
        bagPriceBox.className = "bag_price_box";

        const bagPrice = document.createElement('p');
        bagPrice.className = "bag_price";
        bagPrice.innerHTML = `${CURRENCY} ${product.price} x ${product.count}`;

        const bagCountBox = document.createElement('div');
        bagCountBox.className = 'bag_count_box';

        const bagCount = document.createElement('span');
        bagCount.className = "bag_count";
        bagCount.innerHTML =  `${product.count}`;

        const minusCount = document.createElement('div');
        minusCount.className = 'bag_count_minus';
        minusCount.innerHTML = '-';
        minusCount.addEventListener('click', () => {
                this.onProductChange(product.id, -1);
        });

        const plusCount = document.createElement('div');
        plusCount.className = 'bag_count_plus';
        plusCount.innerHTML = '+';
        plusCount.addEventListener('click', () => {
                this.onProductChange(product.id, 1);
        });

        const bagDescr = document.createElement('p');
        bagDescr.className = "bag_descr";
        bagDescr.innerHTML = `${product.descriptionShort}`

        const bagRating = document.createElement('div');
        bagRating.className = "rating";
        bagRating.innerHTML = `
            <span class="star filled">&#9733</span>
            <span class="star filled">&#9733</span>
            <span class="star filled">&#9733</span>
            <span class="star filled">&#9733</span>
            <span class="star half-filled">&#9733</span>
            <span class="star filled">4.5 / 5</span>
        `

        this.bagProductsNode.append(bagContainer);
        bagContainer.append(bagImg, bagTitle, bagSeries, bagRating, bagDescr, bagPriceBox);
        bagPriceBox.append(bagPrice, bagCountBox);
        bagCountBox.append(minusCount, bagCount, plusCount);
    }

    updateProductInView(productId, newCount) {
        const productElement = this.bagProductsNode.querySelector(`.bag_container[data-id="${productId}"]`);
        const productCountElement = productElement?.querySelector('.bag_count');
        const productPriceElement = productElement?.querySelector('.bag_price');
    
        if (productElement && productCountElement && productPriceElement) {
            if (newCount > 0) {
                productCountElement.innerHTML = newCount;
                const price = productPriceElement.innerHTML.split(" x ")[0]; 
                productPriceElement.innerHTML = `${price} x ${newCount}`;
            } else {
                productElement.remove();
            }
        } else {
            console.error('Product element not found in DOM:', productId);
        }
    }
}