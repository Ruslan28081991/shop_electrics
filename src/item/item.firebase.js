import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getFirestore,
         collection,
         addDoc,
         setDoc,
         getDocs,
         doc,
        } from "firebase/firestore";
import { getDownloadURL,
         getStorage,
         ref,
         uploadBytes
 } from "firebase/storage";

 export class Firebase {
    constructor() {
        this.firebaseConfig = {
          apiKey: "AIzaSyBXU1xgdwoytR4eHiD4cH3wi-B8Ici5enw",
          authDomain: "shop-82bfe.firebaseapp.com",
          projectId: "shop-82bfe",
          storageBucket: "shop-82bfe.appspot.com",
          messagingSenderId: "614013827486",
          appId: "1:614013827486:web:a607909c680b4795cf3e8f"
        };

        this.app = initializeApp(this.firebaseConfig);
        this.db = getFirestore(this.app);
        this.storage = getStorage(this.app);
        this.collectionKey = 'products'
        this.collectionKeyOrders = 'orders'
    }

    async add(product) {
        const docRef = await addDoc(collection(this.db, this.collectionKey), product);
        return { ...product, id: docRef.id };
    }

    async pull() {
        const querySnapshot = await getDocs(collection(this.db, this.collectionKey));
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push({
            id: doc.id,
            imgURL: doc.data().imgURL,
            title: doc.data().title,
            series: doc.data().series,
            price: doc.data().price,
            ...doc.data()
          })
        });
        return products;
    }

    async getProductId(productId) {
      const snapshot = await getDocs(collection(this.db, this.collectionKey));
      let product = null;
      snapshot.forEach((doc) => {
        if(productId === doc.id) {
          product = {
            id: doc.id,
            ...doc.data()
          }
        }
      })
     return product;
    }
    ///////////////////
    async saveOrder(orderData) {
      try {
        const docRef = await addDoc(collection(this.db, this.collectionKeyOrders), orderData);
        console.log("Заказ сохранен с ID: ", docRef.id);
        // return docRef.id;
        return { ...orderData, id:docRef.id };
      } catch (error) {
        console.error("Ошибка добавления заказа: ", error)
      }
    }

    async getOrder() {
        const orderDoc = await getDocs(collection(this.db, this.collectionKeyOrders));
    
        let orders = []
        orderDoc.forEach((doc) => {
          orders.push({
            id: doc.id,
            ...doc.data()
          })
        })
        return orders
    }
}