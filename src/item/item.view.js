import basket from '/basket.png';

export class ItemView {
    constructor({ 
        onNewItem
    }) {
        this.porductsBox = document.querySelector('.products');
        this.bagNode = document.querySelector('.bag');
        this.bagBtnNode = document.querySelector('.bag_btn');
        this.orderNode = document.querySelector('.order');

        this.onNewItem = onNewItem;

        this.renderBagImages();
        this.bagBtnNode.addEventListener('click', this.openBag)
    }

    render(products) {
        this.porductsBox.innerHTML = '';

        products.forEach(product => {
            this.createProduct(product)
        });
    }

    createProduct(product) {
        const CURRENCY = '$';
        const itemNode = document.createElement('li');
        itemNode.className = 'item';

        const itemWrapper = document.createElement('a');
        itemWrapper.className = 'item_wrapper';
        itemWrapper.addEventListener('click',() => this.newWindow(product))
        
        const itemBox = document.createElement('div');
        itemBox.className = 'item_box'

        const itemImg = document.createElement('img');
        itemImg.className = 'item_img';
        itemImg.src = product.imgURL;

        const itemTitle = document.createElement('h2');
        itemTitle.className  = 'item_title';
        itemTitle.innerText = product.title;

        const itemSeries = document.createElement('p');
        itemSeries.className = 'item_series';
        itemSeries.innerText = product.series;

        const itemPriceWrapper = document.createElement('div');
        itemPriceWrapper.className = 'item_price_wrapper';

        const itemPrice = document.createElement('p');
        itemPrice.className = 'item_price';
        itemPrice.innerText = CURRENCY + ' ' + product.price;

        const itemBtn = document.createElement('button');
        itemBtn.className = 'item_btn';
        itemBtn.addEventListener('click',() => this.addBag(product))
      

        const itemBtnImg = document.createElement('img');
        itemBtnImg.className = 'item_btn_img';
        itemBtnImg.src = basket;

        itemNode.append(itemWrapper, itemBox, itemImg, itemTitle, itemSeries, itemPriceWrapper, itemPrice, itemBtn, itemBtnImg)
        itemBox.append(itemImg)
        itemWrapper.append(itemBox, itemTitle, itemSeries);
        itemPriceWrapper.append(itemPrice, itemBtn);
        itemBtn.append(itemBtnImg);
       
        this.porductsBox.append(itemNode);
    }

    handleNewItem = () => {
        const imgURL = `${laptop}`;
        const title = this.inputTitle.value;
        const series = this.inputSeries.value;
        const price = this.inputPrice.value;
        const descriptionShort = this.intupDescriptionShort.value;
        const description = this.inputDescription.value;

        const details = { imgURL, title, series, price, descriptionShort, description, rating: 0 }
        this.onNewItem(details)
    }

    newWindow = (product) => {
        window.location.href = `info.html?productId=${product.id}`;
    }

    addBag = (product) => {
        this.addProductToLocalStorage(product)
        this.renderBagImages()
    }

    addProductToLocalStorage(product) {
        let existingProducts = JSON.parse(window.localStorage.getItem('bagProducts')) || [];
        const existingProductIndex = existingProducts.findIndex(p => p.id === product.id);
    
        if (existingProductIndex !== -1) {
            existingProducts[existingProductIndex].count += 1;
        } else {
            existingProducts.push({
                id: product.id, 
                count: 1, 
                img: product.imgURL, 
                price: product.price
            });
        }

        window.localStorage.setItem('bagProducts', JSON.stringify(existingProducts));
    }

    openBag = () => {
        window.location.href = '/shop_electrics/bag.html'
    }

    imgWithLocalStorage() {
        const productsInCarts = JSON.parse(window.localStorage.getItem('bagProducts')) || [];
        const images = productsInCarts.map(product => product.img).filter(Boolean);
        return images;
    }

    renderBagImages() {
        this.bagNode.innerHTML = '';
        const products = this.imgWithLocalStorage();

        products.forEach(img => {
            const envelopeImg = document.createElement('div');
            envelopeImg.className = 'bag_envelope_img';
            const imgElement = document.createElement('img');
            imgElement.className = 'bag_img';
            imgElement.src = img;
            this.bagNode.appendChild(envelopeImg);
            envelopeImg.append(imgElement)
        });
    }
    
    renderOrders(orders) {
        this.orderNode.innerHTML = ''
        
        orders.forEach(order => {
            this.orderNode.innerHTML += `
                <p class="order_list">${order.id}</p>
            `
        })
    }
}
