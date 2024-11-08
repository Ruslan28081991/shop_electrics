var Ou=Object.defineProperty;var xu=(n,t,e)=>t in n?Ou(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var oe=(n,t,e)=>(xu(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();let Hn;const Mu=new Uint8Array(16);function Lu(){if(!Hn&&(Hn=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Hn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Hn(Mu)}const at=[];for(let n=0;n<256;++n)at.push((n+256).toString(16).slice(1));function Fu(n,t=0){return at[n[t+0]]+at[n[t+1]]+at[n[t+2]]+at[n[t+3]]+"-"+at[n[t+4]]+at[n[t+5]]+"-"+at[n[t+6]]+at[n[t+7]]+"-"+at[n[t+8]]+at[n[t+9]]+"-"+at[n[t+10]]+at[n[t+11]]+at[n[t+12]]+at[n[t+13]]+at[n[t+14]]+at[n[t+15]]}const Uu=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),lo={randomUUID:Uu};function Bu(n,t,e){if(lo.randomUUID&&!t&&!n)return lo.randomUUID();n=n||{};const r=n.random||(n.rng||Lu)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,Fu(r)}class ju{constructor({onNewProduct:t}){this.products=[],this.onNewProduct=t}add(t){const e={imgURL:t.imgURL,title:t.title,series:t.series,price:t.price,description:t.description,descriptionShort:t.descriptionShort,rating:t.rating,id:Bu()};return this.products.push(e),this.onNewProduct(this.products),e}get(){return this.products}set(t){this.products=t}}const qu="/basket.png";class $u{constructor({onNewItem:t}){oe(this,"handleNewItem",()=>{const t=`${laptop}`,e=this.inputTitle.value,r=this.inputSeries.value,i=this.inputPrice.value,o=this.intupDescriptionShort.value,a=this.inputDescription.value,l={imgURL:t,title:e,series:r,price:i,descriptionShort:o,description:a,rating:0};this.onNewItem(l)});oe(this,"newWindow",t=>{window.location.href=`info.html?productId=${t.id}`});oe(this,"addBag",t=>{this.addProductToLocalStorage(t),this.renderBagImages()});oe(this,"openBag",()=>{window.location.href="bag.html"});this.porductsBox=document.querySelector(".products"),this.bagNode=document.querySelector(".bag"),this.bagBtnNode=document.querySelector(".bag_btn"),this.orderNode=document.querySelector(".order"),this.onNewItem=t,this.renderBagImages(),this.bagBtnNode.addEventListener("click",this.openBag)}render(t){this.porductsBox.innerHTML="",t.forEach(e=>{this.createProduct(e)})}createProduct(t){const e="$",r=document.createElement("li");r.className="item";const i=document.createElement("a");i.className="item_wrapper",i.addEventListener("click",()=>this.newWindow(t));const o=document.createElement("div");o.className="item_box";const a=document.createElement("img");a.className="item_img",a.src=t.imgURL;const l=document.createElement("h2");l.className="item_title",l.innerText=t.title;const h=document.createElement("p");h.className="item_series",h.innerText=t.series;const d=document.createElement("div");d.className="item_price_wrapper";const m=document.createElement("p");m.className="item_price",m.innerText=e+" "+t.price;const I=document.createElement("button");I.className="item_btn",I.addEventListener("click",()=>this.addBag(t));const R=document.createElement("img");R.className="item_btn_img",R.src=qu,r.append(i,o,a,l,h,d,m,I,R),o.append(a),i.append(o,l,h),d.append(m,I),I.append(R),this.porductsBox.append(r)}addProductToLocalStorage(t){let e=JSON.parse(window.localStorage.getItem("bagProducts"))||[];const r=e.findIndex(i=>i.id===t.id);r!==-1?e[r].count+=1:e.push({id:t.id,count:1,img:t.imgURL,price:t.price}),window.localStorage.setItem("bagProducts",JSON.stringify(e))}imgWithLocalStorage(){return(JSON.parse(window.localStorage.getItem("bagProducts"))||[]).map(r=>r.img).filter(Boolean)}renderBagImages(){this.bagNode.innerHTML="",this.imgWithLocalStorage().forEach(e=>{const r=document.createElement("div");r.className="bag_envelope_img";const i=document.createElement("img");i.className="bag_img",i.src=e,this.bagNode.appendChild(r),r.append(i)})}renderOrders(t){this.orderNode.innerHTML="",t.forEach(e=>{this.orderNode.innerHTML+=`
                <p class="order_list">${e.id}</p>
            `})}}var ho={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},zu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],a=n[e++],l=n[e++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ha={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,m=o>>2,I=(o&3)<<4|l>>4;let R=(l&15)<<2|d>>6,P=d&63;h||(P=64,a||(R=64)),r.push(e[m],e[I],e[R],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(la(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):zu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const I=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||d==null||I==null)throw new Ku;const R=o<<2|l>>4;if(r.push(R),d!==64){const P=l<<4&240|d>>2;if(r.push(P),I!==64){const D=d<<6&192|I;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ku extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hu=function(n){const t=la(n);return ha.encodeByteArray(t,!0)},ir=function(n){return Hu(n).replace(/\./g,"")},Gu=function(n){try{return ha.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function sr(n,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const e=t;return new Date(e.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return t}for(const e in t)!t.hasOwnProperty(e)||!Wu(e)||(n[e]=sr(n[e],t[e]));return n}function Wu(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=()=>Qu().__FIREBASE_DEFAULTS__,Yu=()=>{if(typeof process>"u"||typeof ho>"u")return;const n=ho.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ju=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Gu(n[1]);return t&&JSON.parse(t)},Ni=()=>{try{return Xu()||Yu()||Ju()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Zu=n=>{var t,e;return(e=(t=Ni())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},da=n=>{const t=Zu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},fa=()=>{var n;return(n=Ni())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ir(JSON.stringify(e)),ir(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nl(){var n;const t=(n=Ni())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ma(){return typeof self=="object"&&self.self===self}function rl(){return!nl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function il(){try{return typeof indexedDB=="object"}catch{return!1}}function sl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="FirebaseError";class ee extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=ol,Object.setPrototypeOf(this,ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?al(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new ee(i,l,r)}}function al(n,t){return n.replace(cl,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const cl=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function mi(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],a=t[i];if(po(o)&&po(a)){if(!mi(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function po(n){return n!==null&&typeof n=="object"}function ul(n,t){const e=new ll(n,t);return e.subscribe.bind(e)}class ll{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");hl(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=ii),i.error===void 0&&(i.error=ii),i.complete===void 0&&(i.complete=ii);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hl(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function ii(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(n){return n&&n._delegate?n._delegate:n}class le{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new tl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(pl(t))try{this.getOrInitializeService({instanceIdentifier:ae})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ae){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ae){return this.instances.has(t)}getOptions(t=ae){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ae){return this.component?this.component.multipleInstances?t:ae:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fl(n){return n===ae?void 0:n}function pl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new dl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=[];var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const _a={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},ml=j.INFO,gl={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},_l=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=gl[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Oi{constructor(t){this.name=t,this._logLevel=ml,this._logHandler=_l,this._userLogHandler=null,ki.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?_a[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}function yl(n){ki.forEach(t=>{t.setLogLevel(n)})}function El(n,t){for(const e of ki){let r=null;t&&t.level&&(r=_a[t.level]),n===null?e.userLogHandler=null:e.userLogHandler=(i,o,...a)=>{const l=a.map(h=>{if(h==null)return null;if(typeof h=="string")return h;if(typeof h=="number"||typeof h=="boolean")return h.toString();if(h instanceof Error)return h.message;try{return JSON.stringify(h)}catch{return null}}).filter(h=>h).join(" ");o>=(r??i.logLevel)&&n({level:j[o].toLowerCase(),message:l,args:a,type:i.name})}}}const vl=(n,t)=>t.some(e=>n instanceof e);let mo,go;function Tl(){return mo||(mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Il(){return go||(go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ya=new WeakMap,gi=new WeakMap,Ea=new WeakMap,si=new WeakMap,xi=new WeakMap;function wl(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Gt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&ya.set(e,n)}).catch(()=>{}),xi.set(t,n),t}function Al(n){if(gi.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});gi.set(n,t)}let _i={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return gi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ea.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Gt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Rl(n){_i=n(_i)}function bl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(oi(this),t,...e);return Ea.set(r,t.sort?t.sort():[t]),Gt(r)}:Il().includes(n)?function(...t){return n.apply(oi(this),t),Gt(ya.get(this))}:function(...t){return Gt(n.apply(oi(this),t))}}function Pl(n){return typeof n=="function"?bl(n):(n instanceof IDBTransaction&&Al(n),vl(n,Tl())?new Proxy(n,_i):n)}function Gt(n){if(n instanceof IDBRequest)return wl(n);if(si.has(n))return si.get(n);const t=Pl(n);return t!==n&&(si.set(n,t),xi.set(t,n)),t}const oi=n=>xi.get(n);function Sl(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,t),l=Gt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Gt(a.result),h.oldVersion,h.newVersion,Gt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Cl=["get","getKey","getAll","getAllKeys","count"],Vl=["put","add","delete","clear"],ai=new Map;function _o(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ai.get(t))return ai.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Vl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Cl.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),i&&h.done]))[0]};return ai.set(t,o),o}Rl(n=>({...n,get:(t,e,r)=>_o(t,e)||n.get(t,e,r),has:(t,e)=>!!_o(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Nl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Nl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const or="@firebase/app",yi="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new Oi("@firebase/app"),kl="@firebase/app-compat",Ol="@firebase/analytics-compat",xl="@firebase/analytics",Ml="@firebase/app-check-compat",Ll="@firebase/app-check",Fl="@firebase/auth",Ul="@firebase/auth-compat",Bl="@firebase/database",jl="@firebase/database-compat",ql="@firebase/functions",$l="@firebase/functions-compat",zl="@firebase/installations",Kl="@firebase/installations-compat",Hl="@firebase/messaging",Gl="@firebase/messaging-compat",Wl="@firebase/performance",Ql="@firebase/performance-compat",Xl="@firebase/remote-config",Yl="@firebase/remote-config-compat",Jl="@firebase/storage",Zl="@firebase/storage-compat",th="@firebase/firestore",eh="@firebase/vertexai-preview",nh="@firebase/firestore-compat",rh="firebase",ih="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="[DEFAULT]",sh={[or]:"fire-core",[kl]:"fire-core-compat",[xl]:"fire-analytics",[Ol]:"fire-analytics-compat",[Ll]:"fire-app-check",[Ml]:"fire-app-check-compat",[Fl]:"fire-auth",[Ul]:"fire-auth-compat",[Bl]:"fire-rtdb",[jl]:"fire-rtdb-compat",[ql]:"fire-fn",[$l]:"fire-fn-compat",[zl]:"fire-iid",[Kl]:"fire-iid-compat",[Hl]:"fire-fcm",[Gl]:"fire-fcm-compat",[Wl]:"fire-perf",[Ql]:"fire-perf-compat",[Xl]:"fire-rc",[Yl]:"fire-rc-compat",[Jl]:"fire-gcs",[Zl]:"fire-gcs-compat",[th]:"fire-fst",[nh]:"fire-fst-compat",[eh]:"fire-vertex","fire-js":"fire-js",[rh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new Map,Pe=new Map,Se=new Map;function pn(n,t){try{n.container.addComponent(t)}catch(e){he.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function va(n,t){n.container.addOrOverwriteComponent(t)}function de(n){const t=n.name;if(Se.has(t))return he.debug(`There were multiple attempts to register component ${t}.`),!1;Se.set(t,n);for(const e of Yt.values())pn(e,n);for(const e of Pe.values())pn(e,n);return!0}function Er(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function oh(n,t,e=Xt){Er(n,t).clearInstance(e)}function Ta(n){return n.options!==void 0}function ah(n){return n.settings!==void 0}function ch(){Se.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new yr("app","Firebase",uh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ia=class{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends Ia{constructor(t,e,r,i){const o=e.automaticDataCollectionEnabled!==void 0?e.automaticDataCollectionEnabled:!1,a={name:r,automaticDataCollectionEnabled:o};if(t.apiKey!==void 0)super(t,a,i);else{const l=t;super(l.options,a,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:o},e),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,e.releaseOnDeref=void 0,Rt(or,yi,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(t){this.isDeleted||(this._refCount++,t!==void 0&&this._finalizationRegistry.register(t,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Li(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw At.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=ih;function Tr(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Xt,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(e||(e=fa()),!e)throw At.create("no-options");const o=Yt.get(i);if(o){if(mi(e,o.options)&&mi(r,o.config))return o;throw At.create("duplicate-app",{appName:i})}const a=new ga(i);for(const h of Se.values())a.addComponent(h);const l=new Ia(e,r,a);return Yt.set(i,l),l}function hh(n,t){if(ma())throw At.create("invalid-server-app-environment");t.automaticDataCollectionEnabled===void 0&&(t.automaticDataCollectionEnabled=!1);let e;Ta(n)?e=n.options:e=n;const r=Object.assign(Object.assign({},t),e);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=d=>[...d].reduce((m,I)=>Math.imul(31,m)+I.charCodeAt(0)|0,0);if(t.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw At.create("finalization-registry-not-supported",{});const o=""+i(JSON.stringify(r)),a=Pe.get(o);if(a)return a.incRefCount(t.releaseOnDeref),a;const l=new ga(o);for(const d of Se.values())l.addComponent(d);const h=new lh(e,t,o,l);return Pe.set(o,h),h}function Mi(n=Xt){const t=Yt.get(n);if(!t&&n===Xt&&fa())return Tr();if(!t)throw At.create("no-app",{appName:n});return t}function dh(){return Array.from(Yt.values())}async function Li(n){let t=!1;const e=n.name;Yt.has(e)?(t=!0,Yt.delete(e)):Pe.has(e)&&n.decRefCount()<=0&&(Pe.delete(e),t=!0),t&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Rt(n,t,e){var r;let i=(r=sh[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),he.warn(l.join(" "));return}de(new le(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}function wa(n,t){if(n!==null&&typeof n!="function")throw At.create("invalid-log-argument");El(n,t)}function Aa(n){yl(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="firebase-heartbeat-database",ph=1,mn="firebase-heartbeat-store";let ci=null;function Ra(){return ci||(ci=Sl(fh,ph,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(mn)}catch(e){console.warn(e)}}}}).catch(n=>{throw At.create("idb-open",{originalErrorMessage:n.message})})),ci}async function mh(n){try{const e=(await Ra()).transaction(mn),r=await e.objectStore(mn).get(ba(n));return await e.done,r}catch(t){if(t instanceof ee)he.warn(t.message);else{const e=At.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});he.warn(e.message)}}}async function yo(n,t){try{const r=(await Ra()).transaction(mn,"readwrite");await r.objectStore(mn).put(t,ba(n)),await r.done}catch(e){if(e instanceof ee)he.warn(e.message);else{const r=At.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});he.warn(r.message)}}}function ba(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=1024,_h=30*24*60*60*1e3;class yh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new vh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Eo();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=_h}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Eo(),{heartbeatsToSend:r,unsentEntries:i}=Eh(this._heartbeatsCache.heartbeats),o=ir(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Eo(){return new Date().toISOString().substring(0,10)}function Eh(n,t=gh){const e=[];let r=n.slice();for(const i of n){const o=e.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),vo(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),vo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class vh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return il()?sl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await mh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return yo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return yo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function vo(n){return ir(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n){de(new le("platform-logger",t=>new Dl(t),"PRIVATE")),de(new le("heartbeat",t=>new yh(t),"PRIVATE")),Rt(or,yi,n),Rt(or,yi,"esm2017"),Rt("fire-js","")}Th("");const Ih=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:ee,SDK_VERSION:vr,_DEFAULT_ENTRY_NAME:Xt,_addComponent:pn,_addOrOverwriteComponent:va,_apps:Yt,_clearComponents:ch,_components:Se,_getProvider:Er,_isFirebaseApp:Ta,_isFirebaseServerApp:ah,_registerComponent:de,_removeServiceInstance:oh,_serverApps:Pe,deleteApp:Li,getApp:Mi,getApps:dh,initializeApp:Tr,initializeServerApp:hh,onLog:wa,registerVersion:Rt,setLogLevel:Aa},Symbol.toStringTag,{value:"Module"}));var wh="firebase",Ah="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(wh,Ah,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t,e){this._delegate=t,this.firebase=e,pn(t,new le("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Li(this._delegate)))}_getService(t,e=Xt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(t);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:e})}_removeServiceInstance(t,e=Xt){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){pn(this._delegate,t)}_addOrOverwriteComponent(t){va(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},To=new yr("app-compat","Firebase",bh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(n){const t={},e={__esModule:!0,initializeApp:o,app:i,registerVersion:Rt,setLogLevel:Aa,onLog:wa,apps:null,SDK_VERSION:vr,INTERNAL:{registerComponent:l,removeApp:r,useAsService:h,modularAPIs:Ih}};e.default=e,Object.defineProperty(e,"apps",{get:a});function r(d){delete t[d]}function i(d){if(d=d||Xt,!fo(t,d))throw To.create("no-app",{appName:d});return t[d]}i.App=n;function o(d,m={}){const I=Tr(d,m);if(fo(t,I.name))return t[I.name];const R=new n(I,e);return t[I.name]=R,R}function a(){return Object.keys(t).map(d=>t[d])}function l(d){const m=d.name,I=m.replace("-compat","");if(de(d)&&d.type==="PUBLIC"){const R=(P=i())=>{if(typeof P[I]!="function")throw To.create("invalid-app-argument",{appName:m});return P[I]()};d.serviceProps!==void 0&&sr(R,d.serviceProps),e[I]=R,n.prototype[I]=function(...P){return this._getService.bind(this,m).apply(this,d.multipleInstances?P:[])}}return d.type==="PUBLIC"?e[I]:null}function h(d,m){return m==="serverAuth"?null:m}return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(){const n=Ph(Rh);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Pa,extendNamespace:t,createSubscribe:ul,ErrorFactory:yr,deepExtend:sr});function t(e){sr(n,e)}return n}const Sh=Pa();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new Oi("@firebase/app-compat"),Ch="@firebase/app-compat",Vh="0.2.35";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(n){Rt(Ch,Vh,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(ma()&&self.firebase!==void 0){Io.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Io.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Nh=Sh;Dh();var kh="firebase",Oh="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nh.registerVersion(kh,Oh,"app-compat");var wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ue,Sa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function _(){}_.prototype=p.prototype,v.D=p.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,E,w){for(var g=Array(arguments.length-2),Mt=2;Mt<arguments.length;Mt++)g[Mt-2]=arguments[Mt];return p.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=v.g[0],_=v.g[1],E=v.g[2];var w=v.g[3],g=p+(w^_&(E^w))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=w+(E^p&(_^E))+y[1]+3905402710&4294967295,w=p+(g<<12&4294967295|g>>>20),g=E+(_^w&(p^_))+y[2]+606105819&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(p^E&(w^p))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(w^_&(E^w))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(E^p&(_^E))+y[5]+1200080426&4294967295,w=p+(g<<12&4294967295|g>>>20),g=E+(_^w&(p^_))+y[6]+2821735955&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(p^E&(w^p))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(w^_&(E^w))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(E^p&(_^E))+y[9]+2336552879&4294967295,w=p+(g<<12&4294967295|g>>>20),g=E+(_^w&(p^_))+y[10]+4294925233&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(p^E&(w^p))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(w^_&(E^w))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(E^p&(_^E))+y[13]+4254626195&4294967295,w=p+(g<<12&4294967295|g>>>20),g=E+(_^w&(p^_))+y[14]+2792965006&4294967295,E=w+(g<<17&4294967295|g>>>15),g=_+(p^E&(w^p))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(E^w&(_^E))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(p^_))+y[6]+3225465664&4294967295,w=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(w^p))+y[11]+643717713&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(E^w))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^w&(_^E))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(p^_))+y[10]+38016083&4294967295,w=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(w^p))+y[15]+3634488961&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(E^w))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^w&(_^E))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(p^_))+y[14]+3275163606&4294967295,w=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(w^p))+y[3]+4107603335&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(E^w))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^w&(_^E))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^E&(p^_))+y[2]+4243563512&4294967295,w=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(w^p))+y[7]+1735328473&4294967295,E=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(E^w))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(_^E^w)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^E)+y[8]+2272392833&4294967295,w=p+(g<<11&4294967295|g>>>21),g=E+(w^p^_)+y[11]+1839030562&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^p)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^w)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^E)+y[4]+1272893353&4294967295,w=p+(g<<11&4294967295|g>>>21),g=E+(w^p^_)+y[7]+4139469664&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^p)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^w)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^E)+y[0]+3936430074&4294967295,w=p+(g<<11&4294967295|g>>>21),g=E+(w^p^_)+y[3]+3572445317&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^p)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^w)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^E)+y[12]+3873151461&4294967295,w=p+(g<<11&4294967295|g>>>21),g=E+(w^p^_)+y[15]+530742520&4294967295,E=w+(g<<16&4294967295|g>>>16),g=_+(E^w^p)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(E^(_|~w))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~E))+y[7]+1126891415&4294967295,w=p+(g<<10&4294967295|g>>>22),g=E+(p^(w|~_))+y[14]+2878612391&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~p))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~w))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~E))+y[3]+2399980690&4294967295,w=p+(g<<10&4294967295|g>>>22),g=E+(p^(w|~_))+y[10]+4293915773&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~p))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~w))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~E))+y[15]+4264355552&4294967295,w=p+(g<<10&4294967295|g>>>22),g=E+(p^(w|~_))+y[6]+2734768916&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~p))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~w))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~E))+y[11]+3174756917&4294967295,w=p+(g<<10&4294967295|g>>>22),g=E+(p^(w|~_))+y[2]+718787259&4294967295,E=w+(g<<15&4294967295|g>>>17),g=_+(w^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+w&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var _=p-this.blockSize,y=this.B,E=this.h,w=0;w<p;){if(E==0)for(;w<=_;)i(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<p;)if(y[E++]=v.charCodeAt(w++),E==this.blockSize){i(this,y),E=0;break}}else for(;w<p;)if(y[E++]=v[w++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var _=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=_&255,_/=256;for(this.u(v),v=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)v[_++]=this.g[p]>>>y&255;return v};function o(v,p){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=p(v)}function a(v,p){this.h=p;for(var _=[],y=!0,E=v.length-1;0<=E;E--){var w=v[E]|0;y&&w==p||(_[E]=w,y=!1)}this.g=_}var l={};function h(v){return-128<=v&&128>v?o(v,function(p){return new a([p|0],0>p?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return I;if(0>v)return V(d(-v));for(var p=[],_=1,y=0;v>=_;y++)p[y]=v/_|0,_*=4294967296;return new a(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return V(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),y=I,E=0;E<v.length;E+=8){var w=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+w),p);8>w?(w=d(Math.pow(p,w)),y=y.j(w).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var I=h(0),R=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-V(this).m();for(var v=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(k(this))return"-"+V(this).toString(v);for(var p=d(Math.pow(v,6)),_=this,y="";;){var E=G(_,p).g;_=q(_,E.j(p));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=E,D(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function k(v){return v.h==-1}n.l=function(v){return v=q(this,v),k(v)?-1:D(v)?0:1};function V(v){for(var p=v.g.length,_=[],y=0;y<p;y++)_[y]=~v.g[y];return new a(_,~v.h).add(R)}n.abs=function(){return k(this)?V(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0,E=0;E<=p;E++){var w=y+(this.i(E)&65535)+(v.i(E)&65535),g=(w>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=g>>>16,w&=65535,g&=65535,_[E]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function q(v,p){return v.add(V(p))}n.j=function(v){if(D(this)||D(v))return I;if(k(this))return k(v)?V(this).j(V(v)):V(V(this).j(v));if(k(v))return V(this.j(V(v)));if(0>this.l(P)&&0>v.l(P))return d(this.m()*v.m());for(var p=this.g.length+v.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var w=this.i(y)>>>16,g=this.i(y)&65535,Mt=v.i(E)>>>16,Be=v.i(E)&65535;_[2*y+2*E]+=g*Be,H(_,2*y+2*E),_[2*y+2*E+1]+=w*Be,H(_,2*y+2*E+1),_[2*y+2*E+1]+=g*Mt,H(_,2*y+2*E+1),_[2*y+2*E+2]+=w*Mt,H(_,2*y+2*E+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new a(_,0)};function H(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function $(v,p){this.g=v,this.h=p}function G(v,p){if(D(p))throw Error("division by zero");if(D(v))return new $(I,I);if(k(v))return p=G(V(v),p),new $(V(p.g),V(p.h));if(k(p))return p=G(v,V(p)),new $(V(p.g),p.h);if(30<v.g.length){if(k(v)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=p;0>=y.l(v);)_=Tt(_),y=Tt(y);var E=tt(_,1),w=tt(y,1);for(y=tt(y,2),_=tt(_,2);!D(y);){var g=w.add(y);0>=g.l(v)&&(E=E.add(_),w=g),y=tt(y,1),_=tt(_,1)}return p=q(v,E.j(p)),new $(E,p)}for(E=I;0<=v.l(p);){for(_=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=d(_),g=w.j(p);k(g)||0<g.l(v);)_-=y,w=d(_),g=w.j(p);D(w)&&(w=R),E=E.add(w),v=q(v,g)}return new $(E,v)}n.A=function(v){return G(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&v.i(y);return new a(_,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|v.i(y);return new a(_,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^v.i(y);return new a(_,this.h^v.h)};function Tt(v){for(var p=v.g.length+1,_=[],y=0;y<p;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(_,v.h)}function tt(v,p){var _=p>>5;p%=32;for(var y=v.g.length-_,E=[],w=0;w<y;w++)E[w]=0<p?v.i(w+_)>>>p|v.i(w+_+1)<<32-p:v.i(w+_);return new a(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Sa=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,ue=a}).apply(typeof wo<"u"?wo:typeof self<"u"?self:typeof window<"u"?window:{});var Gn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ca,Va,an,Da,Zn,Ei,Na,ka,Oa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,u){return s==Array.prototype||s==Object.prototype||(s[c]=u.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gn=="object"&&Gn];for(var c=0;c<s.length;++c){var u=s[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function i(s,c){if(c)t:{var u=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var T=s[f];if(!(T in u))break t;u=u[T]}s=s[s.length-1],f=u[s],c=c(f),c!=f&&c!=null&&t(u,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var u=0,f=!1,T={next:function(){if(!f&&u<s.length){var A=u++;return{value:c(A,s[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function m(s,c,u){return s.call.apply(s.bind,arguments)}function I(s,c,u){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,f),s.apply(c,T)}}return function(){return s.apply(c,arguments)}}function R(s,c,u){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:I,R.apply(null,arguments)}function P(s,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function D(s,c){function u(){}u.prototype=c.prototype,s.aa=c.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(f,T,A){for(var C=Array(arguments.length-2),W=2;W<arguments.length;W++)C[W-2]=arguments[W];return c.prototype[T].apply(f,C)}}function k(s){const c=s.length;if(0<c){const u=Array(c);for(let f=0;f<c;f++)u[f]=s[f];return u}return[]}function V(s,c){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const T=s.length||0,A=f.length||0;s.length=T+A;for(let C=0;C<A;C++)s[T+C]=f[C]}else s.push(f)}}class q{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function H(s){return/^[\s\xa0]*$/.test(s)}function $(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function G(s){return G[" "](s),s}G[" "]=function(){};var Tt=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function tt(s,c,u){for(const f in s)c.call(u,s[f],f,s)}function v(s,c){for(const u in s)c.call(void 0,s[u],u,s)}function p(s){const c={};for(const u in s)c[u]=s[u];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,c){let u,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(u in f)s[u]=f[u];for(let A=0;A<_.length;A++)u=_[A],Object.prototype.hasOwnProperty.call(f,u)&&(s[u]=f[u])}}function E(s){var c=1;s=s.split(":");const u=[];for(;0<c&&s.length;)u.push(s.shift()),c--;return s.length&&u.push(s.join(":")),u}function w(s){l.setTimeout(()=>{throw s},0)}function g(){var s=Or;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class Mt{constructor(){this.h=this.g=null}add(c,u){const f=Be.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var Be=new q(()=>new Zc,s=>s.reset());class Zc{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let je,qe=!1,Or=new Mt,ls=()=>{const s=l.Promise.resolve(void 0);je=()=>{s.then(tu)}};var tu=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(u){w(u)}var c=Be;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}qe=!1};function qt(){this.s=this.s,this.C=this.C}qt.prototype.s=!1,qt.prototype.ma=function(){this.s||(this.s=!0,this.N())},qt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var eu=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return s}();function $e(s,c){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(Tt){t:{try{G(c.nodeName);var T=!0;break t}catch{}T=!1}T||(c=null)}}else u=="mouseover"?c=s.fromElement:u=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:nu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&$e.aa.h.call(this)}}D($e,ht);var nu={2:"touch",3:"pen",4:"mouse"};$e.prototype.h=function(){$e.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Sn="closure_listenable_"+(1e6*Math.random()|0),ru=0;function iu(s,c,u,f,T){this.listener=s,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=T,this.key=++ru,this.da=this.fa=!1}function Cn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Vn(s){this.src=s,this.g={},this.h=0}Vn.prototype.add=function(s,c,u,f,T){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var C=Mr(s,c,f,T);return-1<C?(c=s[C],u||(c.fa=!1)):(c=new iu(c,this.src,A,!!f,T),c.fa=u,s.push(c)),c};function xr(s,c){var u=c.type;if(u in s.g){var f=s.g[u],T=Array.prototype.indexOf.call(f,c,void 0),A;(A=0<=T)&&Array.prototype.splice.call(f,T,1),A&&(Cn(c),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Mr(s,c,u,f){for(var T=0;T<s.length;++T){var A=s[T];if(!A.da&&A.listener==c&&A.capture==!!u&&A.ha==f)return T}return-1}var Lr="closure_lm_"+(1e6*Math.random()|0),Fr={};function hs(s,c,u,f,T){if(Array.isArray(c)){for(var A=0;A<c.length;A++)hs(s,c[A],u,f,T);return null}return u=ps(u),s&&s[Sn]?s.K(c,u,d(f)?!!f.capture:!!f,T):su(s,c,u,!1,f,T)}function su(s,c,u,f,T,A){if(!c)throw Error("Invalid event type");var C=d(T)?!!T.capture:!!T,W=Br(s);if(W||(s[Lr]=W=new Vn(s)),u=W.add(c,u,f,C,A),u.proxy)return u;if(f=ou(),u.proxy=f,f.src=s,f.listener=u,s.addEventListener)eu||(T=C),T===void 0&&(T=!1),s.addEventListener(c.toString(),f,T);else if(s.attachEvent)s.attachEvent(fs(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function ou(){function s(u){return c.call(s.src,s.listener,u)}const c=au;return s}function ds(s,c,u,f,T){if(Array.isArray(c))for(var A=0;A<c.length;A++)ds(s,c[A],u,f,T);else f=d(f)?!!f.capture:!!f,u=ps(u),s&&s[Sn]?(s=s.i,c=String(c).toString(),c in s.g&&(A=s.g[c],u=Mr(A,u,f,T),-1<u&&(Cn(A[u]),Array.prototype.splice.call(A,u,1),A.length==0&&(delete s.g[c],s.h--)))):s&&(s=Br(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Mr(c,u,f,T)),(u=-1<s?c[s]:null)&&Ur(u))}function Ur(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[Sn])xr(c.i,s);else{var u=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(u,f,s.capture):c.detachEvent?c.detachEvent(fs(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=Br(c))?(xr(u,s),u.h==0&&(u.src=null,c[Lr]=null)):Cn(s)}}}function fs(s){return s in Fr?Fr[s]:Fr[s]="on"+s}function au(s,c){if(s.da)s=!0;else{c=new $e(c,this);var u=s.listener,f=s.ha||s.src;s.fa&&Ur(s),s=u.call(f,c)}return s}function Br(s){return s=s[Lr],s instanceof Vn?s:null}var jr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ps(s){return typeof s=="function"?s:(s[jr]||(s[jr]=function(c){return s.handleEvent(c)}),s[jr])}function dt(){qt.call(this),this.i=new Vn(this),this.M=this,this.F=null}D(dt,qt),dt.prototype[Sn]=!0,dt.prototype.removeEventListener=function(s,c,u,f){ds(this,s,c,u,f)};function Et(s,c){var u,f=s.F;if(f)for(u=[];f;f=f.F)u.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new ht(c,s);else if(c instanceof ht)c.target=c.target||s;else{var T=c;c=new ht(f,s),y(c,T)}if(T=!0,u)for(var A=u.length-1;0<=A;A--){var C=c.g=u[A];T=Dn(C,f,!0,c)&&T}if(C=c.g=s,T=Dn(C,f,!0,c)&&T,T=Dn(C,f,!1,c)&&T,u)for(A=0;A<u.length;A++)C=c.g=u[A],T=Dn(C,f,!1,c)&&T}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var u=s.g[c],f=0;f<u.length;f++)Cn(u[f]);delete s.g[c],s.h--}}this.F=null},dt.prototype.K=function(s,c,u,f){return this.i.add(String(s),c,!1,u,f)},dt.prototype.L=function(s,c,u,f){return this.i.add(String(s),c,!0,u,f)};function Dn(s,c,u,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var T=!0,A=0;A<c.length;++A){var C=c[A];if(C&&!C.da&&C.capture==u){var W=C.listener,ot=C.ha||C.src;C.fa&&xr(s.i,C),T=W.call(ot,f)!==!1&&T}}return T&&!f.defaultPrevented}function ms(s,c,u){if(typeof s=="function")u&&(s=R(s,u));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(s,c||0)}function gs(s){s.g=ms(()=>{s.g=null,s.i&&(s.i=!1,gs(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class cu extends qt{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:gs(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(s){qt.call(this),this.h=s,this.g={}}D(ze,qt);var _s=[];function ys(s){tt(s.g,function(c,u){this.g.hasOwnProperty(u)&&Ur(c)},s),s.g={}}ze.prototype.N=function(){ze.aa.N.call(this),ys(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qr=l.JSON.stringify,uu=l.JSON.parse,lu=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function $r(){}$r.prototype.h=null;function Es(s){return s.h||(s.h=s.i())}function vs(){}var Ke={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zr(){ht.call(this,"d")}D(zr,ht);function Kr(){ht.call(this,"c")}D(Kr,ht);var ne={},Ts=null;function Nn(){return Ts=Ts||new dt}ne.La="serverreachability";function Is(s){ht.call(this,ne.La,s)}D(Is,ht);function He(s){const c=Nn();Et(c,new Is(c))}ne.STAT_EVENT="statevent";function ws(s,c){ht.call(this,ne.STAT_EVENT,s),this.stat=c}D(ws,ht);function vt(s){const c=Nn();Et(c,new ws(c,s))}ne.Ma="timingevent";function As(s,c){ht.call(this,ne.Ma,s),this.size=c}D(As,ht);function Ge(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},c)}function We(){this.g=!0}We.prototype.xa=function(){this.g=!1};function hu(s,c,u,f,T,A){s.info(function(){if(s.g)if(A)for(var C="",W=A.split("&"),ot=0;ot<W.length;ot++){var z=W[ot].split("=");if(1<z.length){var ft=z[0];z=z[1];var pt=ft.split("_");C=2<=pt.length&&pt[1]=="type"?C+(ft+"="+z+"&"):C+(ft+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+c+`
`+u+`
`+C})}function du(s,c,u,f,T,A,C){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+c+`
`+u+`
`+A+" "+C})}function ye(s,c,u,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+pu(s,u)+(f?" "+f:"")})}function fu(s,c){s.info(function(){return"TIMEOUT: "+c})}We.prototype.info=function(){};function pu(s,c){if(!s.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var f=u[s];if(!(2>f.length)){var T=f[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<T.length;C++)T[C]=""}}}}return qr(u)}catch{return c}}var kn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Rs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hr;function On(){}D(On,$r),On.prototype.g=function(){return new XMLHttpRequest},On.prototype.i=function(){return{}},Hr=new On;function $t(s,c,u,f){this.j=s,this.i=c,this.l=u,this.R=f||1,this.U=new ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bs}function bs(){this.i=null,this.g="",this.h=!1}var Ps={},Gr={};function Wr(s,c,u){s.L=1,s.v=Fn(Lt(c)),s.m=u,s.P=!0,Ss(s,null)}function Ss(s,c){s.F=Date.now(),xn(s),s.A=Lt(s.v);var u=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),qs(u.i,"t",f),s.C=0,u=s.j.J,s.h=new bs,s.g=oo(s.j,u?c:null,!s.m),0<s.O&&(s.M=new cu(R(s.Y,s,s.g),s.O)),c=s.U,u=s.g,f=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(_s[0]=T.toString()),T=_s);for(var A=0;A<T.length;A++){var C=hs(u,T[A],f||c.handleEvent,!1,c.h||c);if(!C)break;c.g[C.key]=C}c=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),He(),hu(s.i,s.u,s.A,s.l,s.R,s.m)}$t.prototype.ca=function(s){s=s.target;const c=this.M;c&&Ft(s)==3?c.j():this.Y(s)},$t.prototype.Y=function(s){try{if(s==this.g)t:{const pt=Ft(this.g);var c=this.g.Ba();const Te=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Qs(this.g)))){this.J||pt!=4||c==7||(c==8||0>=Te?He(3):He(2)),Qr(this);var u=this.g.Z();this.X=u;e:if(Cs(this)){var f=Qs(this.g);s="";var T=f.length,A=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){re(this),Qe(this);var C="";break e}this.h.i=new l.TextDecoder}for(c=0;c<T;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(A&&c==T-1)});f.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=u==200,du(this.i,this.u,this.A,this.l,this.R,pt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var W,ot=this.g;if((W=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(W)){var z=W;break e}}z=null}if(u=z)ye(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xr(this,u);else{this.o=!1,this.s=3,vt(12),re(this),Qe(this);break t}}if(this.P){u=!0;let bt;for(;!this.J&&this.C<C.length;)if(bt=mu(this,C),bt==Gr){pt==4&&(this.s=4,vt(14),u=!1),ye(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==Ps){this.s=4,vt(15),ye(this.i,this.l,C,"[Invalid Chunk]"),u=!1;break}else ye(this.i,this.l,bt,null),Xr(this,bt);if(Cs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||C.length!=0||this.h.h||(this.s=1,vt(16),u=!1),this.o=this.o&&u,!u)ye(this.i,this.l,C,"[Invalid Chunked Response]"),re(this),Qe(this);else if(0<C.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),ni(ft),ft.M=!0,vt(11))}}else ye(this.i,this.l,C,null),Xr(this,C);pt==4&&re(this),this.o&&!this.J&&(pt==4?no(this.j,this):(this.o=!1,xn(this)))}else Nu(this.g),u==400&&0<C.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),re(this),Qe(this)}}}catch{}finally{}};function Cs(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function mu(s,c){var u=s.C,f=c.indexOf(`
`,u);return f==-1?Gr:(u=Number(c.substring(u,f)),isNaN(u)?Ps:(f+=1,f+u>c.length?Gr:(c=c.slice(f,f+u),s.C=f+u,c)))}$t.prototype.cancel=function(){this.J=!0,re(this)};function xn(s){s.S=Date.now()+s.I,Vs(s,s.I)}function Vs(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Ge(R(s.ba,s),c)}function Qr(s){s.B&&(l.clearTimeout(s.B),s.B=null)}$t.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(fu(this.i,this.A),this.L!=2&&(He(),vt(17)),re(this),this.s=2,Qe(this)):Vs(this,this.S-s)};function Qe(s){s.j.G==0||s.J||no(s.j,s)}function re(s){Qr(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,ys(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function Xr(s,c){try{var u=s.j;if(u.G!=0&&(u.g==s||Yr(u.h,s))){if(!s.K&&Yr(u.h,s)&&u.G==3){try{var f=u.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)$n(u),jn(u);else break t;ei(u),vt(18)}}else u.za=T[1],0<u.za-u.T&&37500>T[2]&&u.F&&u.v==0&&!u.C&&(u.C=Ge(R(u.Za,u),6e3));if(1>=ks(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else se(u,11)}else if((s.K||u.g==s)&&$n(u),!H(c))for(T=u.Da.g.parse(c),c=0;c<T.length;c++){let z=T[c];if(u.T=z[0],z=z[1],u.G==2)if(z[0]=="c"){u.K=z[1],u.ia=z[2];const ft=z[3];ft!=null&&(u.la=ft,u.j.info("VER="+u.la));const pt=z[4];pt!=null&&(u.Aa=pt,u.j.info("SVER="+u.Aa));const Te=z[5];Te!=null&&typeof Te=="number"&&0<Te&&(f=1.5*Te,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const bt=s.g;if(bt){const Kn=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Kn){var A=f.h;A.g||Kn.indexOf("spdy")==-1&&Kn.indexOf("quic")==-1&&Kn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Jr(A,A.h),A.h=null))}if(f.D){const ri=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;ri&&(f.ya=ri,X(f.I,f.D,ri))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var C=s;if(f.qa=so(f,f.J?f.ia:null,f.W),C.K){Os(f.h,C);var W=C,ot=f.L;ot&&(W.I=ot),W.B&&(Qr(W),xn(W)),f.g=C}else to(f);0<u.i.length&&qn(u)}else z[0]!="stop"&&z[0]!="close"||se(u,7);else u.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?se(u,7):ti(u):z[0]!="noop"&&u.l&&u.l.ta(z),u.v=0)}}He(4)}catch{}}var gu=class{constructor(s,c){this.g=s,this.map=c}};function Ds(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ns(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ks(s){return s.h?1:s.g?s.g.size:0}function Yr(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Jr(s,c){s.g?s.g.add(c):s.h=c}function Os(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Ds.prototype.cancel=function(){if(this.i=xs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function xs(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const u of s.g.values())c=c.concat(u.D);return c}return k(s.i)}function _u(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],u=s.length,f=0;f<u;f++)c.push(s[f]);return c}c=[],u=0;for(f in s)c[u++]=s[f];return c}function yu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var u=0;u<s;u++)c.push(u);return c}c=[],u=0;for(const f in s)c[u++]=f;return c}}}function Ms(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var u=yu(s),f=_u(s),T=f.length,A=0;A<T;A++)c.call(void 0,f[A],u&&u[A],s)}var Ls=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Eu(s,c){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var f=s[u].indexOf("="),T=null;if(0<=f){var A=s[u].substring(0,f);T=s[u].substring(f+1)}else A=s[u];c(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function ie(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ie){this.h=s.h,Mn(this,s.j),this.o=s.o,this.g=s.g,Ln(this,s.s),this.l=s.l;var c=s.i,u=new Je;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),Fs(this,u),this.m=s.m}else s&&(c=String(s).match(Ls))?(this.h=!1,Mn(this,c[1]||"",!0),this.o=Xe(c[2]||""),this.g=Xe(c[3]||"",!0),Ln(this,c[4]),this.l=Xe(c[5]||"",!0),Fs(this,c[6]||"",!0),this.m=Xe(c[7]||"")):(this.h=!1,this.i=new Je(null,this.h))}ie.prototype.toString=function(){var s=[],c=this.j;c&&s.push(Ye(c,Us,!0),":");var u=this.g;return(u||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Ye(c,Us,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(Ye(u,u.charAt(0)=="/"?Iu:Tu,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",Ye(u,Au)),s.join("")};function Lt(s){return new ie(s)}function Mn(s,c,u){s.j=u?Xe(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Ln(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function Fs(s,c,u){c instanceof Je?(s.i=c,Ru(s.i,s.h)):(u||(c=Ye(c,wu)),s.i=new Je(c,s.h))}function X(s,c,u){s.i.set(c,u)}function Fn(s){return X(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Xe(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ye(s,c,u){return typeof s=="string"?(s=encodeURI(s).replace(c,vu),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function vu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Us=/[#\/\?@]/g,Tu=/[#\?:]/g,Iu=/[#\?]/g,wu=/[#\?@]/g,Au=/#/g;function Je(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function zt(s){s.g||(s.g=new Map,s.h=0,s.i&&Eu(s.i,function(c,u){s.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=Je.prototype,n.add=function(s,c){zt(this),this.i=null,s=Ee(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(c),this.h+=1,this};function Bs(s,c){zt(s),c=Ee(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function js(s,c){return zt(s),c=Ee(s,c),s.g.has(c)}n.forEach=function(s,c){zt(this),this.g.forEach(function(u,f){u.forEach(function(T){s.call(c,T,f,this)},this)},this)},n.na=function(){zt(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let f=0;f<c.length;f++){const T=s[f];for(let A=0;A<T.length;A++)u.push(c[f])}return u},n.V=function(s){zt(this);let c=[];if(typeof s=="string")js(this,s)&&(c=c.concat(this.g.get(Ee(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)c=c.concat(s[u])}return c},n.set=function(s,c){return zt(this),this.i=null,s=Ee(this,s),js(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function qs(s,c,u){Bs(s,c),0<u.length&&(s.i=null,s.g.set(Ee(s,c),k(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var f=c[u];const A=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var T=A;C[f]!==""&&(T+="="+encodeURIComponent(String(C[f]))),s.push(T)}}return this.i=s.join("&")};function Ee(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Ru(s,c){c&&!s.j&&(zt(s),s.i=null,s.g.forEach(function(u,f){var T=f.toLowerCase();f!=T&&(Bs(this,f),qs(this,T,u))},s)),s.j=c}function bu(s,c){const u=new We;if(l.Image){const f=new Image;f.onload=P(Kt,u,"TestLoadImage: loaded",!0,c,f),f.onerror=P(Kt,u,"TestLoadImage: error",!1,c,f),f.onabort=P(Kt,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=P(Kt,u,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function Pu(s,c){const u=new We,f=new AbortController,T=setTimeout(()=>{f.abort(),Kt(u,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(A=>{clearTimeout(T),A.ok?Kt(u,"TestPingServer: ok",!0,c):Kt(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),Kt(u,"TestPingServer: error",!1,c)})}function Kt(s,c,u,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(u)}catch{}}function Su(){this.g=new lu}function Cu(s,c,u){const f=u||"";try{Ms(s,function(T,A){let C=T;d(T)&&(C=qr(T)),c.push(f+A+"="+encodeURIComponent(C))})}catch(T){throw c.push(f+"type="+encodeURIComponent("_badmap")),T}}function Ze(s){this.l=s.Ub||null,this.j=s.eb||!1}D(Ze,$r),Ze.prototype.g=function(){return new Un(this.l,this.j)},Ze.prototype.i=function(s){return function(){return s}}({});function Un(s,c){dt.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Un,dt),n=Un.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,en(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,en(this)),this.g&&(this.readyState=3,en(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$s(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function $s(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?tn(this):en(this),this.readyState==3&&$s(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,tn(this))},n.Qa=function(s){this.g&&(this.response=s,tn(this))},n.ga=function(){this.g&&tn(this)};function tn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,en(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=c.next();return s.join(`\r
`)};function en(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Un.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function zs(s){let c="";return tt(s,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function Zr(s,c,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=zs(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):X(s,c,u))}function Z(s){dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Z,dt);var Vu=/^https?$/i,Du=["POST","PUT"];n=Z.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hr.g(),this.v=this.o?Es(this.o):Es(Hr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(A){Ks(this,A);return}if(s=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)u.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())u.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),T=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Du,c,void 0))||f||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of u)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ws(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){Ks(this,A)}};function Ks(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,Hs(s),Bn(s)}function Hs(s){s.A||(s.A=!0,Et(s,"complete"),Et(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Et(this,"complete"),Et(this,"abort"),Bn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bn(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Gs(this):this.bb())},n.bb=function(){Gs(this)};function Gs(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Ft(s)!=4||s.Z()!=2)){if(s.u&&Ft(s)==4)ms(s.Ea,0,s);else if(Et(s,"readystatechange"),Ft(s)==4){s.h=!1;try{const C=s.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var u;if(!(u=c)){var f;if(f=C===0){var T=String(s.D).match(Ls)[1]||null;!T&&l.self&&l.self.location&&(T=l.self.location.protocol.slice(0,-1)),f=!Vu.test(T?T.toLowerCase():"")}u=f}if(u)Et(s,"complete"),Et(s,"success");else{s.m=6;try{var A=2<Ft(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",Hs(s)}}finally{Bn(s)}}}}function Bn(s,c){if(s.g){Ws(s);const u=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Et(s,"ready");try{u.onreadystatechange=f}catch{}}}function Ws(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ft(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),uu(c)}};function Qs(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Nu(s){const c={};s=(s.g&&2<=Ft(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(H(s[f]))continue;var u=E(s[f]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=c[T]||[];c[T]=A,A.push(u)}v(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nn(s,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||c}function Xs(s){this.Aa=0,this.i=[],this.j=new We,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nn("baseRetryDelayMs",5e3,s),this.cb=nn("retryDelaySeedMs",1e4,s),this.Wa=nn("forwardChannelMaxRetries",2,s),this.wa=nn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ds(s&&s.concurrentRequestLimit),this.Da=new Su,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Xs.prototype,n.la=8,n.G=1,n.connect=function(s,c,u,f){vt(0),this.W=s,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=so(this,null,this.W),qn(this)};function ti(s){if(Ys(s),s.G==3){var c=s.U++,u=Lt(s.I);if(X(u,"SID",s.K),X(u,"RID",c),X(u,"TYPE","terminate"),rn(s,u),c=new $t(s,s.j,c),c.L=2,c.v=Fn(Lt(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=oo(c.j,null),c.g.ea(c.v)),c.F=Date.now(),xn(c)}io(s)}function jn(s){s.g&&(ni(s),s.g.cancel(),s.g=null)}function Ys(s){jn(s),s.u&&(l.clearTimeout(s.u),s.u=null),$n(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function qn(s){if(!Ns(s.h)&&!s.s){s.s=!0;var c=s.Ga;je||ls(),qe||(je(),qe=!0),Or.add(c,s),s.B=0}}function ku(s,c){return ks(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Ge(R(s.Ga,s,c),ro(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new $t(this,this.j,s);let A=this.o;if(this.S&&(A?(A=p(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)t:{for(var c=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=u;break t}if(c===4096||u===this.i.length-1){c=u+1;break t}}c=1e3}else c=1e3;c=Zs(this,T,c),u=Lt(this.I),X(u,"RID",s),X(u,"CVER",22),this.D&&X(u,"X-HTTP-Session-Id",this.D),rn(this,u),A&&(this.O?c="headers="+encodeURIComponent(String(zs(A)))+"&"+c:this.m&&Zr(u,this.m,A)),Jr(this.h,T),this.Ua&&X(u,"TYPE","init"),this.P?(X(u,"$req",c),X(u,"SID","null"),T.T=!0,Wr(T,u,null)):Wr(T,u,c),this.G=2}}else this.G==3&&(s?Js(this,s):this.i.length==0||Ns(this.h)||Js(this))};function Js(s,c){var u;c?u=c.l:u=s.U++;const f=Lt(s.I);X(f,"SID",s.K),X(f,"RID",u),X(f,"AID",s.T),rn(s,f),s.m&&s.o&&Zr(f,s.m,s.o),u=new $t(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),c&&(s.i=c.D.concat(s.i)),c=Zs(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Jr(s.h,u),Wr(u,f,c)}function rn(s,c){s.H&&tt(s.H,function(u,f){X(c,f,u)}),s.l&&Ms({},function(u,f){X(c,f,u)})}function Zs(s,c,u){u=Math.min(s.i.length,u);var f=s.l?R(s.l.Na,s.l,s):null;t:{var T=s.i;let A=-1;for(;;){const C=["count="+u];A==-1?0<u?(A=T[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let W=!0;for(let ot=0;ot<u;ot++){let z=T[ot].g;const ft=T[ot].map;if(z-=A,0>z)A=Math.max(0,T[ot].g-100),W=!1;else try{Cu(ft,C,"req"+z+"_")}catch{f&&f(ft)}}if(W){f=C.join("&");break t}}}return s=s.i.splice(0,u),c.D=s,f}function to(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;je||ls(),qe||(je(),qe=!0),Or.add(c,s),s.v=0}}function ei(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Ge(R(s.Fa,s),ro(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,eo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Ge(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),jn(this),eo(this))};function ni(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function eo(s){s.g=new $t(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=Lt(s.qa);X(c,"RID","rpc"),X(c,"SID",s.K),X(c,"AID",s.T),X(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&X(c,"TO",s.ja),X(c,"TYPE","xmlhttp"),rn(s,c),s.m&&s.o&&Zr(c,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=Fn(Lt(c)),u.m=null,u.P=!0,Ss(u,s)}n.Za=function(){this.C!=null&&(this.C=null,jn(this),ei(this),vt(19))};function $n(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function no(s,c){var u=null;if(s.g==c){$n(s),ni(s),s.g=null;var f=2}else if(Yr(s.h,c))u=c.D,Os(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var T=s.B;f=Nn(),Et(f,new As(f,u)),qn(s)}else to(s);else if(T=c.s,T==3||T==0&&0<c.X||!(f==1&&ku(s,c)||f==2&&ei(s)))switch(u&&0<u.length&&(c=s.h,c.i=c.i.concat(u)),T){case 1:se(s,5);break;case 4:se(s,10);break;case 3:se(s,6);break;default:se(s,2)}}}function ro(s,c){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*c}function se(s,c){if(s.j.info("Error code "+c),c==2){var u=R(s.fb,s),f=s.Xa;const T=!f;f=new ie(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Mn(f,"https"),Fn(f),T?bu(f.toString(),u):Pu(f.toString(),u)}else vt(2);s.G=0,s.l&&s.l.sa(c),io(s),Ys(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function io(s){if(s.G=0,s.ka=[],s.l){const c=xs(s.h);(c.length!=0||s.i.length!=0)&&(V(s.ka,c),V(s.ka,s.i),s.h.i.length=0,k(s.i),s.i.length=0),s.l.ra()}}function so(s,c,u){var f=u instanceof ie?Lt(u):new ie(u);if(f.g!="")c&&(f.g=c+"."+f.g),Ln(f,f.s);else{var T=l.location;f=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;var A=new ie(null);f&&Mn(A,f),c&&(A.g=c),T&&Ln(A,T),u&&(A.l=u),f=A}return u=s.D,c=s.ya,u&&c&&X(f,u,c),X(f,"VER",s.la),rn(s,f),f}function oo(s,c,u){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new Z(new Ze({eb:u})):new Z(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ao(){}n=ao.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function zn(){}zn.prototype.g=function(s,c){return new It(s,c)};function It(s,c){dt.call(this),this.g=new Xs(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!H(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!H(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new ve(this)}D(It,dt),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){ti(this.g)},It.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=qr(s),s=u);c.i.push(new gu(c.Ya++,s)),c.G==3&&qn(c)},It.prototype.N=function(){this.g.l=null,delete this.j,ti(this.g),delete this.g,It.aa.N.call(this)};function co(s){zr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){t:{for(const u in c){s=u;break t}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}D(co,zr);function uo(){Kr.call(this),this.status=1}D(uo,Kr);function ve(s){this.g=s}D(ve,ao),ve.prototype.ua=function(){Et(this.g,"a")},ve.prototype.ta=function(s){Et(this.g,new co(s))},ve.prototype.sa=function(s){Et(this.g,new uo)},ve.prototype.ra=function(){Et(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,Oa=function(){return new zn},ka=function(){return Nn()},Na=ne,Ei={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},kn.NO_ERROR=0,kn.TIMEOUT=8,kn.HTTP_ERROR=6,Zn=kn,Rs.COMPLETE="complete",Da=Rs,vs.EventType=Ke,Ke.OPEN="a",Ke.CLOSE="b",Ke.ERROR="c",Ke.MESSAGE="d",dt.prototype.listen=dt.prototype.K,an=vs,Va=Ze,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,Ca=Z}).apply(typeof Gn<"u"?Gn:typeof self<"u"?self:typeof window<"u"?window:{});const Ao="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Me="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=new Oi("@firebase/firestore");function sn(){return fe.logLevel}function N(n,...t){if(fe.logLevel<=j.DEBUG){const e=t.map(Fi);fe.debug(`Firestore (${Me}): ${n}`,...e)}}function Bt(n,...t){if(fe.logLevel<=j.ERROR){const e=t.map(Fi);fe.error(`Firestore (${Me}): ${n}`,...e)}}function Ce(n,...t){if(fe.logLevel<=j.WARN){const e=t.map(Fi);fe.warn(`Firestore (${Me}): ${n}`,...e)}}function Fi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n="Unexpected state"){const t=`FIRESTORE (${Me}) INTERNAL ASSERTION FAILED: `+n;throw Bt(t),new Error(t)}function Q(n,t){n||M()}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends ee{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class xh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class Mh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Lh{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Wt,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},l=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Wt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new xa(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string"),new gt(t)}}class Fh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Uh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Fh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Bh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Q(typeof e.token=="string"),this.R=e.token,new Bh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=qh(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function K(n,t){return n<t?-1:n>t?1:0}function Ve(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return it.fromMillis(Date.now())}static fromDate(t){return it.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new it(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?K(this.nanoseconds,t.nanoseconds):K(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new it(0,0))}static max(){return new L(new it(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(),r===void 0?r=t.length-e:r>t.length-e&&M(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return gn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof gn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Y extends gn{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const $h=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends gn{construct(t,e,r){return new ut(t,e,r)}static isValidIdentifier(t){return $h.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(Y.fromString(t))}static fromName(t){return new x(Y.fromString(t).popFirst(5))}static empty(){return new x(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new Y(t.slice()))}}function zh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new it(e+1,0):new it(e,r));return new Jt(i,x.empty(),t)}function Kh(n){return new Jt(n.readTime,n.key,-1)}class Jt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Jt(L.min(),x.empty(),-1)}static max(){return new Jt(L.max(),x.empty(),-1)}}function Hh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:K(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Gh)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):b.reject(e)}static resolve(t){return new b((e,r)=>{e(t)})}static reject(t){return new b((e,r)=>{r(t)})}static waitFor(t){return new b((e,r)=>{let i=0,o=0,a=!1;t.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&e()},h=>r(h))}),a=!0,o===i&&e()})}static or(t){let e=b.resolve(!1);for(const r of t)e=e.next(i=>i?b.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new b((r,i)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++l,l===o&&r(a)},m=>i(m))}})}static doWhile(t,e){return new b((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Qh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function wn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ui.oe=-1;function Ir(n){return n==null}function ar(n){return n===0&&1/n==-1/0}function Xh(n){return typeof n=="number"&&Number.isInteger(n)&&!ar(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Le(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function La(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Wn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Wn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Wn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Wn(this.root,t,this.comparator,!0)}}class Wn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ct.RED,this.left=i??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ct(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,r,i,o){return this}insert(t,e,r){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new bo(this.data.getIterator())}getIteratorFrom(t){return new bo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class bo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new Pt([])}unionWith(t){let e=new lt(ut.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Pt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ve(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Fa("Invalid base64 string: "+o):o}}(t);return new yt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new yt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const Yh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zt(n){if(Q(!!n),typeof n=="string"){let t=0;const e=Yh.exec(n);if(Q(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:nt(n.seconds),nanos:nt(n.nanos)}}function nt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function pe(n){return typeof n=="string"?yt.fromBase64String(n):yt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ji(n){const t=n.mapValue.fields.__previous_value__;return Bi(t)?ji(t):t}function _n(n){const t=Zt(n.mapValue.fields.__local_write_time__.timestampValue);return new it(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t,e,r,i,o,a,l,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d}}class yn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new yn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof yn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function me(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Bi(n)?4:Zh(n)?9007199254740991:10:M()}function Nt(n,t){if(n===t)return!0;const e=me(n);if(e!==me(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return _n(n).isEqual(_n(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Zt(i.timestampValue),l=Zt(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return pe(i.bytesValue).isEqual(pe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return nt(i.geoPointValue.latitude)===nt(o.geoPointValue.latitude)&&nt(i.geoPointValue.longitude)===nt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return nt(i.integerValue)===nt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=nt(i.doubleValue),l=nt(o.doubleValue);return a===l?ar(a)===ar(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return Ve(n.arrayValue.values||[],t.arrayValue.values||[],Nt);case 10:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Ro(a)!==Ro(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!Nt(a[h],l[h])))return!1;return!0}(n,t);default:return M()}}function En(n,t){return(n.values||[]).find(e=>Nt(e,t))!==void 0}function De(n,t){if(n===t)return 0;const e=me(n),r=me(t);if(e!==r)return K(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=nt(o.integerValue||o.doubleValue),h=nt(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,t);case 3:return Po(n.timestampValue,t.timestampValue);case 4:return Po(_n(n),_n(t));case 5:return K(n.stringValue,t.stringValue);case 6:return function(o,a){const l=pe(o),h=pe(a);return l.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const m=K(l[d],h[d]);if(m!==0)return m}return K(l.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=K(nt(o.latitude),nt(a.latitude));return l!==0?l:K(nt(o.longitude),nt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,a){const l=o.values||[],h=a.values||[];for(let d=0;d<l.length&&d<h.length;++d){const m=De(l[d],h[d]);if(m)return m}return K(l.length,h.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,a){if(o===Qn.mapValue&&a===Qn.mapValue)return 0;if(o===Qn.mapValue)return 1;if(a===Qn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let I=0;I<h.length&&I<m.length;++I){const R=K(h[I],m[I]);if(R!==0)return R;const P=De(l[h[I]],d[m[I]]);if(P!==0)return P}return K(h.length,m.length)}(n.mapValue,t.mapValue);default:throw M()}}function Po(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return K(n,t);const e=Zt(n),r=Zt(t),i=K(e.seconds,r.seconds);return i!==0?i:K(e.nanos,r.nanos)}function Ne(n){return vi(n)}function vi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Zt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return pe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return x.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=vi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${vi(e.fields[a])}`;return i+"}"}(n.mapValue):M()}function Ti(n){return!!n&&"integerValue"in n}function qi(n){return!!n&&"arrayValue"in n}function So(n){return!!n&&"nullValue"in n}function Co(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function tr(n){return!!n&&"mapValue"in n}function ln(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Le(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=ln(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ln(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Zh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!tr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ln(e)}setAll(t){let e=ut.emptyPath(),r={},i=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=l.popLast()}a?r[l.lastSegment()]=ln(a):i.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());tr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Nt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];tr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Le(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new wt(ln(this.value))}}function Ua(n){const t=[];return Le(n.fields,(e,r)=>{const i=new ut([e]);if(tr(r)){const o=Ua(r.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Pt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,r,i,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new _t(t,0,L.min(),L.min(),L.min(),wt.empty(),0)}static newFoundDocument(t,e,r,i){return new _t(t,1,e,L.min(),r,i,0)}static newNoDocument(t,e){return new _t(t,2,e,L.min(),L.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,L.min(),L.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e){this.position=t,this.inclusive=e}}function Vo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],a=n.position[i];if(o.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),e.key):r=De(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Do(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Nt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e="asc"){this.field=t,this.dir=e}}function td(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{}class rt extends Ba{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new nd(t,e,r):e==="array-contains"?new sd(t,r):e==="in"?new od(t,r):e==="not-in"?new ad(t,r):e==="array-contains-any"?new cd(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new rd(t,r):new id(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(De(e,this.value)):e!==null&&me(this.value)===me(e)&&this.matchesComparison(De(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kt extends Ba{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new kt(t,e)}matches(t){return ja(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ja(n){return n.op==="and"}function qa(n){return ed(n)&&ja(n)}function ed(n){for(const t of n.filters)if(t instanceof kt)return!1;return!0}function Ii(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+Ne(n.value);if(qa(n))return n.filters.map(t=>Ii(t)).join(",");{const t=n.filters.map(e=>Ii(e)).join(",");return`${n.op}(${t})`}}function $a(n,t){return n instanceof rt?function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&Nt(r.value,i.value)}(n,t):n instanceof kt?function(r,i){return i instanceof kt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&$a(a,i.filters[l]),!0):!1}(n,t):void M()}function za(n){return n instanceof rt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ne(e.value)}`}(n):n instanceof kt?function(e){return e.op.toString()+" {"+e.getFilters().map(za).join(" ,")+"}"}(n):"Filter"}class nd extends rt{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class rd extends rt{constructor(t,e){super(t,"in",e),this.keys=Ka("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class id extends rt{constructor(t,e){super(t,"not-in",e),this.keys=Ka("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ka(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>x.fromName(r.referenceValue))}class sd extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return qi(e)&&En(e.arrayValue,this.value)}}class od extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&En(this.value.arrayValue,e)}}class ad extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(En(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!En(this.value.arrayValue,e)}}class cd extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!qi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>En(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t,e=null,r=[],i=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function No(n,t=null,e=[],r=[],i=null,o=null,a=null){return new ud(n,t,e,r,i,o,a)}function $i(n){const t=F(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ii(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ir(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ne(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ne(r)).join(",")),t.ue=e}return t.ue}function zi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!td(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!$a(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Do(n.startAt,t.startAt)&&Do(n.endAt,t.endAt)}function wi(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,e=null,r=[],i=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ld(n,t,e,r,i,o,a,l){return new wr(n,t,e,r,i,o,a,l)}function Ha(n){return new wr(n)}function ko(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function hd(n){return n.collectionGroup!==null}function hn(n){const t=F(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new lt(ut.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new ur(o,r))}),e.has(ut.keyField().canonicalString())||t.ce.push(new ur(ut.keyField(),r))}return t.ce}function Vt(n){const t=F(n);return t.le||(t.le=dd(t,hn(n))),t.le}function dd(n,t){if(n.limitType==="F")return No(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ur(i.field,o)});const e=n.endAt?new cr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new cr(n.startAt.position,n.startAt.inclusive):null;return No(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ai(n,t,e){return new wr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ar(n,t){return zi(Vt(n),Vt(t))&&n.limitType===t.limitType}function Ga(n){return`${$i(Vt(n))}|lt:${n.limitType}`}function Ie(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>za(i)).join(", ")}]`),Ir(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Ne(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Ne(i)).join(",")),`Target(${r})`}(Vt(n))}; limitType=${n.limitType})`}function Rr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of hn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(a,l,h){const d=Vo(a,l,h);return a.inclusive?d<=0:d<0}(r.startAt,hn(r),i)||r.endAt&&!function(a,l,h){const d=Vo(a,l,h);return a.inclusive?d>=0:d>0}(r.endAt,hn(r),i))}(n,t)}function fd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Wa(n){return(t,e)=>{let r=!1;for(const i of hn(n)){const o=pd(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function pd(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?De(h,d):M()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Le(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return La(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=new J(x.comparator);function jt(){return md}const Qa=new J(x.comparator);function cn(...n){let t=Qa;for(const e of n)t=t.insert(e.key,e);return t}function Xa(n){let t=Qa;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ce(){return dn()}function Ya(){return dn()}function dn(){return new Fe(n=>n.toString(),(n,t)=>n.isEqual(t))}const gd=new J(x.comparator),_d=new lt(x.comparator);function U(...n){let t=_d;for(const e of n)t=t.add(e);return t}const yd=new lt(K);function Ed(){return yd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ar(t)?"-0":t}}function Za(n){return{integerValue:""+n}}function vd(n,t){return Xh(t)?Za(t):Ja(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this._=void 0}}function Td(n,t,e){return n instanceof lr?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Bi(o)&&(o=ji(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof vn?ec(n,t):n instanceof Tn?nc(n,t):function(i,o){const a=tc(i,o),l=Oo(a)+Oo(i.Pe);return Ti(a)&&Ti(i.Pe)?Za(l):Ja(i.serializer,l)}(n,t)}function Id(n,t,e){return n instanceof vn?ec(n,t):n instanceof Tn?nc(n,t):e}function tc(n,t){return n instanceof hr?function(r){return Ti(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class lr extends br{}class vn extends br{constructor(t){super(),this.elements=t}}function ec(n,t){const e=rc(t);for(const r of n.elements)e.some(i=>Nt(i,r))||e.push(r);return{arrayValue:{values:e}}}class Tn extends br{constructor(t){super(),this.elements=t}}function nc(n,t){let e=rc(t);for(const r of n.elements)e=e.filter(i=>!Nt(i,r));return{arrayValue:{values:e}}}class hr extends br{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Oo(n){return nt(n.integerValue||n.doubleValue)}function rc(n){return qi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function wd(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof vn&&i instanceof vn||r instanceof Tn&&i instanceof Tn?Ve(r.elements,i.elements,Nt):r instanceof hr&&i instanceof hr?Nt(r.Pe,i.Pe):r instanceof lr&&i instanceof lr}(n.transform,t.transform)}class Ad{constructor(t,e){this.version=t,this.transformResults=e}}class Ut{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ut}static exists(t){return new Ut(void 0,t)}static updateTime(t){return new Ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function er(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Pr{}function ic(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new oc(n.key,Ut.none()):new An(n.key,n.data,Ut.none());{const e=n.data,r=wt.empty();let i=new lt(ut.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new ge(n.key,r,new Pt(i.toArray()),Ut.none())}}function Rd(n,t,e){n instanceof An?function(i,o,a){const l=i.value.clone(),h=Mo(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof ge?function(i,o,a){if(!er(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Mo(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(sc(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function fn(n,t,e,r){return n instanceof An?function(o,a,l,h){if(!er(o.precondition,a))return l;const d=o.value.clone(),m=Lo(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof ge?function(o,a,l,h){if(!er(o.precondition,a))return l;const d=Lo(o.fieldTransforms,h,a),m=a.data;return m.setAll(sc(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,t,e,r):function(o,a,l){return er(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function bd(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=tc(r.transform,i||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function xo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ve(r,i,(o,a)=>wd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class An extends Pr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ge extends Pr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function sc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Mo(n,t,e){const r=new Map;Q(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],a=o.transform,l=t.data.field(o.field);r.set(o.field,Id(a,l,e[i]))}return r}function Lo(n,t,e){const r=new Map;for(const i of n){const o=i.transform,a=e.data.field(i.field);r.set(i.field,Td(o,a,t))}return r}class oc extends Pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pd extends Pr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Rd(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=fn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=fn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ya();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(i.key)?null:l;const h=ic(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&Ve(this.mutations,t.mutations,(e,r)=>xo(e,r))&&Ve(this.baseMutations,t.baseMutations,(e,r)=>xo(e,r))}}class Ki{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){Q(t.mutations.length===r.length);let i=function(){return gd}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Ki(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,B;function Dd(n){switch(n){default:return M();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function ac(n){if(n===void 0)return Bt("GRPC error has no .code"),S.UNKNOWN;switch(n){case et.OK:return S.OK;case et.CANCELLED:return S.CANCELLED;case et.UNKNOWN:return S.UNKNOWN;case et.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case et.INTERNAL:return S.INTERNAL;case et.UNAVAILABLE:return S.UNAVAILABLE;case et.UNAUTHENTICATED:return S.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case et.NOT_FOUND:return S.NOT_FOUND;case et.ALREADY_EXISTS:return S.ALREADY_EXISTS;case et.PERMISSION_DENIED:return S.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case et.ABORTED:return S.ABORTED;case et.OUT_OF_RANGE:return S.OUT_OF_RANGE;case et.UNIMPLEMENTED:return S.UNIMPLEMENTED;case et.DATA_LOSS:return S.DATA_LOSS;default:return M()}}(B=et||(et={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=new ue([4294967295,4294967295],0);function Fo(n){const t=Nd().encode(n),e=new Sa;return e.update(t),new Uint8Array(e.digest())}function Uo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ue([e,r],0),new ue([i,o],0)]}class Hi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new un(`Invalid padding: ${e}`);if(r<0)throw new un(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new un(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new un(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ue.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(ue.fromNumber(r)));return i.compare(kd)===1&&(i=new ue([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Fo(t),[r,i]=Uo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Hi(o,i,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=Fo(t),[r,i]=Uo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Rn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Sr(L.min(),i,new J(K),jt(),U())}}class Rn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Rn(r,e,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class cc{constructor(t,e){this.targetId=t,this.me=e}}class uc{constructor(t,e,r=yt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Bo{constructor(){this.fe=0,this.ge=qo(),this.pe=yt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=U(),e=U(),r=U();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:M()}}),new Rn(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=qo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Od{constructor(t){this.Le=t,this.Be=new Map,this.ke=jt(),this.qe=jo(),this.Qe=new J(K)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(wi(o))if(r===0){const a=new x(o.path);this.Ue(e,a,_t.newNoDocument(a,L.min()))}else Q(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),h=l?this.Xe(l,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let a,l;try{a=pe(r).toUint8Array()}catch(h){if(h instanceof Fa)return Ce("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Hi(a,i,o)}catch(h){return Ce(h instanceof un?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&wi(l.target)){const h=new x(l.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,_t.newNoDocument(h,t))}o.be&&(e.set(a,o.Ce()),o.ve())}});let r=U();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new Sr(t,e,this.Qe,this.ke,r);return this.ke=jt(),this.qe=jo(),this.Qe=new J(K),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Bo,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new lt(K),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Bo),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function jo(){return new J(x.comparator)}function qo(){return new J(x.comparator)}const xd={asc:"ASCENDING",desc:"DESCENDING"},Md={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ld={and:"AND",or:"OR"};class Fd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ri(n,t){return n.useProto3Json||Ir(t)?t:{value:t}}function dr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function lc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ud(n,t){return dr(n,t.toTimestamp())}function Dt(n){return Q(!!n),L.fromTimestamp(function(e){const r=Zt(e);return new it(r.seconds,r.nanos)}(n))}function Gi(n,t){return bi(n,t).canonicalString()}function bi(n,t){const e=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function hc(n){const t=Y.fromString(n);return Q(gc(t)),t}function Pi(n,t){return Gi(n.databaseId,t.path)}function ui(n,t){const e=hc(t);if(e.get(1)!==n.databaseId.projectId)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x(fc(e))}function dc(n,t){return Gi(n.databaseId,t)}function Bd(n){const t=hc(n);return t.length===4?Y.emptyPath():fc(t)}function Si(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fc(n){return Q(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function $o(n,t,e){return{name:Pi(n,t),fields:e.value.mapValue.fields}}function jd(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(Q(m===void 0||typeof m=="string"),yt.fromBase64String(m||"")):(Q(m===void 0||m instanceof Buffer||m instanceof Uint8Array),yt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(d){const m=d.code===void 0?S.UNKNOWN:ac(d.code);return new O(m,d.message||"")}(a);e=new uc(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ui(n,r.document.name),o=Dt(r.document.updateTime),a=r.document.createTime?Dt(r.document.createTime):L.min(),l=new wt({mapValue:{fields:r.document.fields}}),h=_t.newFoundDocument(i,o,a,l),d=r.targetIds||[],m=r.removedTargetIds||[];e=new nr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ui(n,r.document),o=r.readTime?Dt(r.readTime):L.min(),a=_t.newNoDocument(i,o),l=r.removedTargetIds||[];e=new nr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ui(n,r.document),o=r.removedTargetIds||[];e=new nr([],o,i,null)}else{if(!("filter"in t))return M();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Vd(i,o),l=r.targetId;e=new cc(l,a)}}return e}function qd(n,t){let e;if(t instanceof An)e={update:$o(n,t.key,t.value)};else if(t instanceof oc)e={delete:Pi(n,t.key)};else if(t instanceof ge)e={update:$o(n,t.key,t.data),updateMask:Yd(t.fieldMask)};else{if(!(t instanceof Pd))return M();e={verify:Pi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof lr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof vn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Tn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof hr)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw M()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Ud(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,t.precondition)),e}function $d(n,t){return n&&n.length>0?(Q(t!==void 0),n.map(e=>function(i,o){let a=i.updateTime?Dt(i.updateTime):Dt(o);return a.isEqual(L.min())&&(a=Dt(o)),new Ad(a,i.transformResults||[])}(e,t))):[]}function zd(n,t){return{documents:[dc(n,t.path)]}}function Kd(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=dc(n,i);const o=function(d){if(d.length!==0)return mc(kt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(R){return{field:we(R.field),direction:Wd(R.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Ri(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:i}}function Hd(n){let t=Bd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){Q(r===1);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(I){const R=pc(I);return R instanceof kt&&qa(R)?R.getFilters():[R]}(e.where));let a=[];e.orderBy&&(a=function(I){return I.map(R=>function(D){return new ur(Ae(D.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(R))}(e.orderBy));let l=null;e.limit&&(l=function(I){let R;return R=typeof I=="object"?I.value:I,Ir(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(I){const R=!!I.before,P=I.values||[];return new cr(P,R)}(e.startAt));let d=null;return e.endAt&&(d=function(I){const R=!I.before,P=I.values||[];return new cr(P,R)}(e.endAt)),ld(t,i,a,o,l,"F",h,d)}function Gd(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function pc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ae(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ae(e.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ae(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ae(e.unaryFilter.field);return rt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return rt.create(Ae(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return kt.create(e.compositeFilter.filters.map(r=>pc(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function Wd(n){return xd[n]}function Qd(n){return Md[n]}function Xd(n){return Ld[n]}function we(n){return{fieldPath:n.canonicalString()}}function Ae(n){return ut.fromServerFormat(n.fieldPath)}function mc(n){return n instanceof rt?function(e){if(e.op==="=="){if(Co(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NAN"}};if(So(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Co(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NOT_NAN"}};if(So(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:we(e.field),op:Qd(e.op),value:e.value}}}(n):n instanceof kt?function(e){const r=e.getFilters().map(i=>mc(i));return r.length===1?r[0]:{compositeFilter:{op:Xd(e.op),filters:r}}}(n):M()}function Yd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function gc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e,r,i,o=L.min(),a=L.min(),l=yt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Ht(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t){this.ct=t}}function Zd(n){const t=Hd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ai(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this._n=new ef}addToCollectionParentIndex(t,e){return this._n.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(Jt.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(Jt.min())}updateCollectionGroup(t,e,r){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class ef{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new lt(Y.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new lt(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new ke(0)}static Ln(){return new ke(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.changes=new Fe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?b.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&fn(r.mutation,i,Pt.empty(),it.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,U()).next(()=>r))}getLocalViewOfDocuments(t,e,r=U()){const i=ce();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let a=cn();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ce();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,U()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,i){let o=jt();const a=dn(),l=function(){return dn()}();return e.forEach((h,d)=>{const m=r.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof ge)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),fn(m.mutation,d,m.mutation.getFieldMask(),it.now())):a.set(d.key,Pt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var I;return l.set(d,new rf(m,(I=a.get(d))!==null&&I!==void 0?I:null))}),l))}recalculateAndSaveOverlays(t,e){const r=dn();let i=new J((a,l)=>a-l),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Pt.empty();m=l.applyToLocalView(d,m),r.set(h,m);const I=(i.get(l.batchId)||U()).add(h);i=i.insert(l.batchId,I)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,m=h.value,I=Ya();m.forEach(R=>{if(!o.has(R)){const P=ic(e.get(R),r.get(R));P!==null&&I.set(R,P),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,I))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):hd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):b.resolve(ce());let l=-1,h=o;return a.next(d=>b.forEach(d,(m,I)=>(l<I.largestBatchId&&(l=I.largestBatchId),o.get(m)?b.resolve():this.remoteDocumentCache.getEntry(t,m).next(R=>{h=h.insert(m,R)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,U())).next(m=>({batchId:l,changes:Xa(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(r=>{let i=cn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let a=cn();return this.indexManager.getCollectionParents(t,o).next(l=>b.forEach(l,h=>{const d=function(I,R){return new wr(R,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next(m=>{m.forEach((I,R)=>{a=a.insert(I,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,_t.newInvalidDocument(m)))});let l=cn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&fn(m.mutation,d,Pt.empty(),it.now()),Rr(e,d)&&(l=l.insert(h,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return b.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Dt(i.createTime)}}(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:Zd(i.bundledQuery),readTime:Dt(i.readTime)}}(e)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.overlays=new J(x.comparator),this.hr=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ce();return b.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),b.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),b.resolve()}getOverlaysForCollection(t,e,r){const i=ce(),o=e.length+1,a=new x(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return b.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new J((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=ce(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=ce(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=i)););return b.resolve(l)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Cd(e,r));let o=this.hr.get(e);o===void 0&&(o=U(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.Pr=new lt(st.Ir),this.Tr=new lt(st.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new st(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new st(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new x(new Y([])),r=new st(e,t),i=new st(e,t+1),o=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new x(new Y([])),r=new st(e,t),i=new st(e,t+1);let o=U();return this.Tr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new st(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class st{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return x.comparator(t.key,e.key)||K(t.pr,e.pr)}static Er(t,e){return K(t.pr,e.pr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new lt(st.Ir)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Sd(o,e,r,i);this.mutationQueue.push(a);for(const l of i)this.wr=this.wr.add(new st(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return b.resolve(a)}lookupMutationBatch(t,e){return b.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),o=i<0?0:i;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new st(e,0),i=new st(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],a=>{const l=this.Sr(a.pr);o.push(l)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new lt(K);return e.forEach(i=>{const o=new st(i,0),a=new st(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],l=>{r=r.add(l.pr)})}),b.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const a=new st(new x(o),0);let l=new lt(K);return this.wr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(h.pr)),!0)},a),b.resolve(this.Dr(l))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){Q(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return b.forEach(e.mutations,i=>{const o=new st(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new st(e,0),i=this.wr.firstAfterOrEqual(r);return b.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t){this.vr=t,this.docs=function(){return new J(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,a=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return b.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=jt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():_t.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=jt();const a=e.path,l=new x(a.child("")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Hh(Kh(m),r)<=0||(i.has(m.key)||Rr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(t,e,r,i){M()}Fr(t,e){return b.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new lf(this)}getSize(t){return b.resolve(this.size)}}class lf extends nf{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),b.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t){this.persistence=t,this.Mr=new Fe(e=>$i(e),zi),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Wi,this.targetCount=0,this.Lr=ke.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),b.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new ke(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.qn(e),b.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),b.waitFor(o).next(()=>i)}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return b.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),b.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),b.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return b.resolve(r)}containsKey(t,e){return b.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t,e){this.Br={},this.overlays={},this.kr=new Ui(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new hf(this),this.indexManager=new tf,this.remoteDocumentCache=function(i){return new uf(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Jd(e),this.$r=new of(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new af,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new cf(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const i=new ff(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(t,e){return b.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class ff extends Wh{constructor(t){super(),this.currentSequenceNumber=t}}class Qi{constructor(t){this.persistence=t,this.zr=new Wi,this.jr=null}static Hr(t){return new Qi(t)}get Jr(){if(this.jr)return this.jr;throw M()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),b.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),b.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Jr,r=>{const i=x.fromPath(r);return this.Yr(t,i).next(o=>{o||e.removeEntry(i,L.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return b.or([()=>b.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=U(),i=U();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Xi(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return rl()?8:Qh(el())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ji(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(t,e,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new pf;return this.Ji(t,e,a).next(l=>{if(o.result=l,this.Ui)return this.Yi(t,e,a,l.size)})}).next(()=>o.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(sn()<=j.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Ie(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),b.resolve()):(sn()<=j.DEBUG&&N("QueryEngine","Query:",Ie(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(sn()<=j.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Ie(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Vt(e))):b.resolve())}ji(t,e){if(ko(e))return b.resolve(null);let r=Vt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Ai(e,null,"F"),r=Vt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=U(...o);return this.zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.Zi(e,l);return this.Xi(e,d,a,h.readTime)?this.ji(t,Ai(e,null,"F")):this.es(t,d,e,h)}))})))}Hi(t,e,r,i){return ko(e)||i.isEqual(L.min())?b.resolve(null):this.zi.getDocuments(t,r).next(o=>{const a=this.Zi(e,o);return this.Xi(e,a,r,i)?b.resolve(null):(sn()<=j.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ie(e)),this.es(t,a,e,zh(i,-1)).next(l=>l))})}Zi(t,e){let r=new lt(Wa(t));return e.forEach((i,o)=>{Rr(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(t,e,r){return sn()<=j.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Ie(e)),this.zi.getDocumentsMatchingQuery(t,e,Jt.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new J(K),this.rs=new Fe(o=>$i(o),zi),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new sf(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function _f(n,t,e,r){return new gf(n,t,e,r)}async function _c(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=U();for(const d of i){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){l.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({us:d,removedBatchIds:a,addedBatchIds:l}))})})}function yf(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(l,h,d,m){const I=d.batch,R=I.keys();let P=b.resolve();return R.forEach(D=>{P=P.next(()=>m.getEntry(h,D)).next(k=>{const V=d.docVersions.get(D);Q(V!==null),k.version.compareTo(V)<0&&(I.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),m.addEntry(k)))})}),P.next(()=>l.mutationQueue.removeMutationBatch(h,I))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=U();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function yc(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Ef(n,t){const e=F(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const l=[];t.targetChanges.forEach((m,I)=>{const R=i.get(I);if(!R)return;l.push(e.Qr.removeMatchingKeys(o,m.removedDocuments,I).next(()=>e.Qr.addMatchingKeys(o,m.addedDocuments,I)));let P=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?P=P.withResumeToken(yt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(m.resumeToken,r)),i=i.insert(I,P),function(k,V,q){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(R,P,m)&&l.push(e.Qr.updateTargetData(o,P))});let h=jt(),d=U();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),l.push(vf(o,a,t.documentUpdates).next(m=>{h=m.cs,d=m.ls})),!r.isEqual(L.min())){const m=e.Qr.getLastRemoteSnapshotVersion(o).next(I=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(m)}return b.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.ns=i,o))}function vf(n,t,e){let r=U(),i=U();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=jt();return e.forEach((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):N("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)}),{cs:a,ls:i}})}function Tf(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function If(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(o=>o?(i=o,b.resolve(i)):e.Qr.allocateTargetId(r).next(a=>(i=new Ht(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function Ci(n,t,e){const r=F(n),i=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!wn(a))throw a;N("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function zo(n,t,e){const r=F(n);let i=L.min(),o=U();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const I=F(h),R=I.rs.get(m);return R!==void 0?b.resolve(I.ns.get(R)):I.Qr.getTargetData(d,m)}(r,a,Vt(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,e?i:L.min(),e?o:U())).next(l=>(wf(r,fd(t),l),{documents:l,hs:o})))}function wf(n,t,e){let r=n.ss.get(t)||L.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class Ko{constructor(){this.activeTargetIds=Ed()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Af{constructor(){this.no=new Ko,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Ko,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xn=null;function li(){return Xn===null?Xn=function(){return 268435456+Math.round(2147483648*Math.random())}():Xn++,"0x"+Xn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class Sf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(e,r,i,o,a){const l=li(),h=this.vo(e,r.toUriEncodedString());N("RestConnection",`Sending RPC '${e}' ${l}:`,h,i);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,o,a),this.Mo(e,h,d,i).then(m=>(N("RestConnection",`Received RPC '${e}' ${l}: `,m),m),m=>{throw Ce("RestConnection",`RPC '${e}' ${l} failed with error: `,m,"url: ",h,"request:",i),m})}xo(e,r,i,o,a,l){return this.Co(e,r,i,o,a)}Fo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Me}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}vo(e,r){const i=bf[e];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,i){const o=li();return new Promise((a,l)=>{const h=new Ca;h.setWithCredentials(!0),h.listenOnce(Da.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Zn.NO_ERROR:const m=h.getResponseJson();N(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case Zn.TIMEOUT:N(mt,`RPC '${t}' ${o} timed out`),l(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case Zn.HTTP_ERROR:const I=h.getStatus();if(N(mt,`RPC '${t}' ${o} failed with status:`,I,"response text:",h.getResponseText()),I>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R==null?void 0:R.error;if(P&&P.status&&P.message){const D=function(V){const q=V.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(q)>=0?q:S.UNKNOWN}(P.status);l(new O(D,P.message))}else l(new O(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new O(S.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{N(mt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);N(mt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",d,r,15)})}Oo(t,e,r){const i=li(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Oa(),l=ka(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.xmlHttpFactory=new Va({})),this.Fo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");N(mt,`Creating RPC '${t}' stream ${i}: ${m}`,h);const I=a.createWebChannel(m,h);let R=!1,P=!1;const D=new Pf({lo:V=>{P?N(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,V):(R||(N(mt,`Opening RPC '${t}' stream ${i} transport.`),I.open(),R=!0),N(mt,`RPC '${t}' stream ${i} sending:`,V),I.send(V))},ho:()=>I.close()}),k=(V,q,H)=>{V.listen(q,$=>{try{H($)}catch(G){setTimeout(()=>{throw G},0)}})};return k(I,an.EventType.OPEN,()=>{P||(N(mt,`RPC '${t}' stream ${i} transport opened.`),D.mo())}),k(I,an.EventType.CLOSE,()=>{P||(P=!0,N(mt,`RPC '${t}' stream ${i} transport closed`),D.po())}),k(I,an.EventType.ERROR,V=>{P||(P=!0,Ce(mt,`RPC '${t}' stream ${i} transport errored:`,V),D.po(new O(S.UNAVAILABLE,"The operation could not be completed")))}),k(I,an.EventType.MESSAGE,V=>{var q;if(!P){const H=V.data[0];Q(!!H);const $=H,G=$.error||((q=$[0])===null||q===void 0?void 0:q.error);if(G){N(mt,`RPC '${t}' stream ${i} received error:`,G);const Tt=G.status;let tt=function(_){const y=et[_];if(y!==void 0)return ac(y)}(Tt),v=G.message;tt===void 0&&(tt=S.INTERNAL,v="Unknown error status: "+Tt+" with message "+G.message),P=!0,D.po(new O(tt,v)),I.close()}else N(mt,`RPC '${t}' stream ${i} received:`,H),D.yo(H)}}),k(l,Na.STAT_EVENT,V=>{V.stat===Ei.PROXY?N(mt,`RPC '${t}' stream ${i} detected buffering proxy`):V.stat===Ei.NOPROXY&&N(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.fo()},0),D}}function hi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n){return new Fd(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t,e,r=1e3,i=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,e-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,e,r,i,o,a,l,h){this.oi=t,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Ec(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Bt(e.toString()),Bt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===e&&this.u_(r,i)},r=>{t(()=>{const i=new O(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return N("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cf extends vc{constructor(t,e,r,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=jd(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Dt(a.readTime):L.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=Si(this.serializer),e.addTarget=function(o,a){let l;const h=a.target;if(l=wi(h)?{documents:zd(o,h)}:{query:Kd(o,h)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=lc(o,a.resumeToken);const d=Ri(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){l.readTime=dr(o,a.snapshotVersion.toTimestamp());const d=Ri(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,t);const r=Gd(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=Si(this.serializer),e.removeTarget=t,this.i_(e)}}class Vf extends vc{constructor(t,e,r,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,a),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(Q(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=$d(t.writeResults,t.commitTime),r=Dt(t.commitTime);return this.listener.A_(r,e)}return Q(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Si(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>qd(this.serializer,r))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(t,bi(e,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(S.UNKNOWN,o.toString())})}xo(t,e,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(t,bi(e,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(S.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Nf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Bt(e),this.y_=!1):N("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{_e(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=F(h);d.M_.add(4),await bn(d),d.N_.set("Unknown"),d.M_.delete(4),await Vr(d)}(this))})}),this.N_=new Nf(r,i)}}async function Vr(n){if(_e(n))for(const t of n.x_)await t(!0)}async function bn(n){for(const t of n.x_)await t(!1)}function Tc(n,t){const e=F(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),ts(e)?Zi(e):Ue(e).Xo()&&Ji(e,t))}function Yi(n,t){const e=F(n),r=Ue(e);e.F_.delete(t),r.Xo()&&Ic(e,t),e.F_.size===0&&(r.Xo()?r.n_():_e(e)&&e.N_.set("Unknown"))}function Ji(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ue(n).P_(t)}function Ic(n,t){n.L_.xe(t),Ue(n).I_(t)}function Zi(n){n.L_=new Od({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Ue(n).start(),n.N_.w_()}function ts(n){return _e(n)&&!Ue(n).Zo()&&n.F_.size>0}function _e(n){return F(n).M_.size===0}function wc(n){n.L_=void 0}async function Of(n){n.N_.set("Online")}async function xf(n){n.F_.forEach((t,e)=>{Ji(n,t)})}async function Mf(n,t){wc(n),ts(n)?(n.N_.D_(t),Zi(n)):n.N_.set("Unknown")}async function Lf(n,t,e){if(n.N_.set("Online"),t instanceof uc&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const l of o.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.F_.delete(l),i.L_.removeTarget(l))}(n,t)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await fr(n,r)}else if(t instanceof nr?n.L_.Ke(t):t instanceof cc?n.L_.He(t):n.L_.We(t),!e.isEqual(L.min()))try{const r=await yc(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.L_.rt(a);return l.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.F_.get(d);m&&o.F_.set(d,m.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,d)=>{const m=o.F_.get(h);if(!m)return;o.F_.set(h,m.withResumeToken(yt.EMPTY_BYTE_STRING,m.snapshotVersion)),Ic(o,h);const I=new Ht(m.target,h,d,m.sequenceNumber);Ji(o,I)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await fr(n,r)}}async function fr(n,t,e){if(!wn(t))throw t;n.M_.add(1),await bn(n),n.N_.set("Offline"),e||(e=()=>yc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Vr(n)})}function Ac(n,t){return t().catch(e=>fr(n,e,t))}async function Dr(n){const t=F(n),e=te(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;Ff(t);)try{const i=await Tf(t.localStore,r);if(i===null){t.v_.length===0&&e.n_();break}r=i.batchId,Uf(t,i)}catch(i){await fr(t,i)}Rc(t)&&bc(t)}function Ff(n){return _e(n)&&n.v_.length<10}function Uf(n,t){n.v_.push(t);const e=te(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function Rc(n){return _e(n)&&!te(n).Zo()&&n.v_.length>0}function bc(n){te(n).start()}async function Bf(n){te(n).V_()}async function jf(n){const t=te(n);for(const e of n.v_)t.d_(e.mutations)}async function qf(n,t,e){const r=n.v_.shift(),i=Ki.from(r,t,e);await Ac(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Dr(n)}async function $f(n,t){t&&te(n).E_&&await async function(r,i){if(function(a){return Dd(a)&&a!==S.ABORTED}(i.code)){const o=r.v_.shift();te(r).t_(),await Ac(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Dr(r)}}(n,t),Rc(n)&&bc(n)}async function Go(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=_e(e);e.M_.add(3),await bn(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Vr(e)}async function zf(n,t){const e=F(n);t?(e.M_.delete(2),await Vr(e)):t||(e.M_.add(2),await bn(e),e.N_.set("Unknown"))}function Ue(n){return n.B_||(n.B_=function(e,r,i){const o=F(e);return o.f_(),new Cf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:Of.bind(null,n),To:xf.bind(null,n),Ao:Mf.bind(null,n),h_:Lf.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),ts(n)?Zi(n):n.N_.set("Unknown")):(await n.B_.stop(),wc(n))})),n.B_}function te(n){return n.k_||(n.k_=function(e,r,i){const o=F(e);return o.f_(),new Vf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:Bf.bind(null,n),Ao:$f.bind(null,n),R_:jf.bind(null,n),A_:qf.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await Dr(n)):(await n.k_.stop(),n.v_.length>0&&(N("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const a=Date.now()+r,l=new es(t,e,a,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ns(n,t){if(Bt("AsyncQueue",`${t}: ${n}`),wn(n))return new O(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.comparator=t?(e,r)=>t(e,r)||x.comparator(e.key,r.key):(e,r)=>x.comparator(e.key,r.key),this.keyedMap=cn(),this.sortedSet=new J(this.comparator)}static emptySet(t){return new Re(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Re)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Re;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this.q_=new J(x.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):M():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Oe{constructor(t,e,r,i,o,a,l,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Oe(t,e,Re.emptySet(e),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ar(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Hf{constructor(){this.queries=new Fe(t=>Ga(t),Ar),this.onlineState="Unknown",this.z_=new Set}}async function Gf(n,t){const e=F(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.W_()&&t.G_()&&(r=2):(o=new Kf,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(i,!0);break;case 1:o.K_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const l=ns(a,`Initialization of query '${Ie(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&rs(e)}async function Wf(n,t){const e=F(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const a=o.U_.indexOf(t);a>=0&&(o.U_.splice(a,1),o.U_.length===0?i=t.G_()?0:1:!o.W_()&&t.G_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Qf(n,t){const e=F(n);let r=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const l of a.U_)l.H_(i)&&(r=!0);a.K_=i}}r&&rs(e)}function Xf(n,t,e){const r=F(n),i=r.queries.get(t);if(i)for(const o of i.U_)o.onError(e);r.queries.delete(t)}function rs(n){n.z_.forEach(t=>{t.next()})}var Vi,Qo;(Qo=Vi||(Vi={})).J_="default",Qo.Cache="cache";class Yf{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Oe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Oe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Vi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t){this.key=t}}class Sc{constructor(t){this.key=t}}class Jf{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=U(),this.mutatedKeys=U(),this.Ia=Wa(t),this.Ta=new Re(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new Wo,i=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((m,I)=>{const R=i.get(m),P=Rr(this.query,I)?I:null,D=!!R&&this.mutatedKeys.has(R.key),k=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let V=!1;R&&P?R.data.isEqual(P.data)?D!==k&&(r.track({type:3,doc:P}),V=!0):this.Ra(R,P)||(r.track({type:2,doc:P}),V=!0,(h&&this.Ia(P,h)>0||d&&this.Ia(P,d)<0)&&(l=!0)):!R&&P?(r.track({type:0,doc:P}),V=!0):R&&!P&&(r.track({type:1,doc:R}),V=!0,(h||d)&&(l=!0)),V&&(P?(a=a.add(P),o=k?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((m,I)=>function(P,D){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return k(P)-k(D)}(m.type,I.type)||this.Ia(m.doc,I.doc)),this.Va(r),i=i!=null&&i;const l=e&&!i?this.ma():[],h=this.Pa.size===0&&this.current&&!i?1:0,d=h!==this.ha;return this.ha=h,a.length!==0||d?{snapshot:new Oe(this.query,t.Ta,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Wo,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=U(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new Sc(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new Pc(r))}),e}pa(t){this.la=t.hs,this.Pa=U();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Oe.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Zf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class tp{constructor(t){this.key=t,this.wa=!1}}class ep{constructor(t,e,r,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Fe(l=>Ga(l),Ar),this.Da=new Map,this.Ca=new Set,this.va=new J(x.comparator),this.Fa=new Map,this.Ma=new Wi,this.xa={},this.Oa=new Map,this.Na=ke.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function np(n,t,e=!0){const r=Oc(n);let i;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await Cc(r,t,e,!0),i}async function rp(n,t){const e=Oc(n);await Cc(e,t,!0,!1)}async function Cc(n,t,e,r){const i=await If(n.localStore,Vt(t)),o=i.targetId,a=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return r&&(l=await ip(n,t,o,a==="current",i.resumeToken)),n.isPrimaryClient&&e&&Tc(n.remoteStore,i),l}async function ip(n,t,e,r,i){n.Ba=(I,R,P)=>async function(k,V,q,H){let $=V.view.da(q);$.Xi&&($=await zo(k.localStore,V.query,!1).then(({documents:v})=>V.view.da(v,$)));const G=H&&H.targetChanges.get(V.targetId),Tt=H&&H.targetMismatches.get(V.targetId)!=null,tt=V.view.applyChanges($,k.isPrimaryClient,G,Tt);return Yo(k,V.targetId,tt.fa),tt.snapshot}(n,I,R,P);const o=await zo(n.localStore,t,!0),a=new Jf(t,o.hs),l=a.da(o.documents),h=Rn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,h);Yo(n,e,d.fa);const m=new Zf(t,e,a);return n.ba.set(t,m),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),d.snapshot}async function sp(n,t,e){const r=F(n),i=r.ba.get(t),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(a=>!Ar(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ci(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&Yi(r.remoteStore,i.targetId),Di(r,i.targetId)}).catch(In)):(Di(r,i.targetId),await Ci(r.localStore,i.targetId,!0))}async function op(n,t){const e=F(n),r=e.ba.get(t),i=e.Da.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Yi(e.remoteStore,r.targetId))}async function ap(n,t,e){const r=pp(n);try{const i=await function(a,l){const h=F(a),d=it.now(),m=l.reduce((P,D)=>P.add(D.key),U());let I,R;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let D=jt(),k=U();return h.os.getEntries(P,m).next(V=>{D=V,D.forEach((q,H)=>{H.isValidDocument()||(k=k.add(q))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,D)).next(V=>{I=V;const q=[];for(const H of l){const $=bd(H,I.get(H.key).overlayedDocument);$!=null&&q.push(new ge(H.key,$,Ua($.value.mapValue),Ut.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,q,l)}).next(V=>{R=V;const q=V.applyToLocalDocumentSet(I,k);return h.documentOverlayCache.saveOverlays(P,V.batchId,q)})}).then(()=>({batchId:R.batchId,changes:Xa(I)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,h){let d=a.xa[a.currentUser.toKey()];d||(d=new J(K)),d=d.insert(l,h),a.xa[a.currentUser.toKey()]=d}(r,i.batchId,e),await Pn(r,i.changes),await Dr(r.remoteStore)}catch(i){const o=ns(i,"Failed to persist write");e.reject(o)}}async function Vc(n,t){const e=F(n);try{const r=await Ef(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Fa.get(o);a&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?Q(a.wa):i.removedDocuments.size>0&&(Q(a.wa),a.wa=!1))}),await Pn(e,r,t)}catch(r){await In(r)}}function Xo(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ba.forEach((o,a)=>{const l=a.view.j_(t);l.snapshot&&i.push(l.snapshot)}),function(a,l){const h=F(a);h.onlineState=l;let d=!1;h.queries.forEach((m,I)=>{for(const R of I.U_)R.j_(l)&&(d=!0)}),d&&rs(h)}(r.eventManager,t),i.length&&r.Sa.h_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function cp(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Fa.get(t),o=i&&i.key;if(o){let a=new J(x.comparator);a=a.insert(o,_t.newNoDocument(o,L.min()));const l=U().add(o),h=new Sr(L.min(),new Map,new J(K),a,l);await Vc(r,h),r.va=r.va.remove(o),r.Fa.delete(t),is(r)}else await Ci(r.localStore,t,!1).then(()=>Di(r,t,e)).catch(In)}async function up(n,t){const e=F(n),r=t.batch.batchId;try{const i=await yf(e.localStore,t);Nc(e,r,null),Dc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Pn(e,i)}catch(i){await In(i)}}async function lp(n,t,e){const r=F(n);try{const i=await function(a,l){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,l).next(I=>(Q(I!==null),m=I.keys(),h.mutationQueue.removeMutationBatch(d,I))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);Nc(r,t,e),Dc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Pn(r,i)}catch(i){await In(i)}}function Dc(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function Nc(n,t,e){const r=F(n);let i=r.xa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.xa[r.currentUser.toKey()]=i}}function Di(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||kc(n,r)})}function kc(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(Yi(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),is(n))}function Yo(n,t,e){for(const r of e)r instanceof Pc?(n.Ma.addReference(r.key,t),hp(n,r)):r instanceof Sc?(N("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||kc(n,r.key)):M()}function hp(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(N("SyncEngine","New document in limbo: "+e),n.Ca.add(r),is(n))}function is(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new x(Y.fromString(t)),r=n.Na.next();n.Fa.set(r,new tp(e)),n.va=n.va.insert(e,r),Tc(n.remoteStore,new Ht(Vt(Ha(e.path)),r,"TargetPurposeLimboResolution",Ui.oe))}}async function Pn(n,t,e){const r=F(n),i=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,h)=>{a.push(r.Ba(h,t,e).then(d=>{if((d||e)&&r.isPrimaryClient){const m=d&&!d.fromCache;r.sharedClientState.updateQueryState(h.targetId,m?"current":"not-current")}if(d){i.push(d);const m=Xi.Ki(h.targetId,d);o.push(m)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(h,d){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>b.forEach(d,R=>b.forEach(R.qi,P=>m.persistence.referenceDelegate.addReference(I,R.targetId,P)).next(()=>b.forEach(R.Qi,P=>m.persistence.referenceDelegate.removeReference(I,R.targetId,P)))))}catch(I){if(!wn(I))throw I;N("LocalStore","Failed to update sequence numbers: "+I)}for(const I of d){const R=I.targetId;if(!I.fromCache){const P=m.ns.get(R),D=P.snapshotVersion,k=P.withLastLimboFreeSnapshotVersion(D);m.ns=m.ns.insert(R,k)}}}(r.localStore,o))}async function dp(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){N("SyncEngine","User change. New user:",t.toKey());const r=await _c(e.localStore,t);e.currentUser=t,function(o,a){o.Oa.forEach(l=>{l.forEach(h=>{h.reject(new O(S.CANCELLED,a))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Pn(e,r.us)}}function fp(n,t){const e=F(n),r=e.Fa.get(t);if(r&&r.wa)return U().add(r.key);{let i=U();const o=e.Da.get(t);if(!o)return i;for(const a of o){const l=e.ba.get(a);i=i.unionWith(l.view.Ea)}return i}}function Oc(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Vc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=fp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=cp.bind(null,t),t.Sa.h_=Qf.bind(null,t.eventManager),t.Sa.ka=Xf.bind(null,t.eventManager),t}function pp(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=up.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=lp.bind(null,t),t}class Jo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Cr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return _f(this.persistence,new mf,t.initialUser,this.serializer)}createPersistence(t){return new df(Qi.Hr,this.serializer)}createSharedClientState(t){return new Af}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mp{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dp.bind(null,this.syncEngine),await zf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Hf}()}createDatastore(t){const e=Cr(t.databaseInfo.databaseId),r=function(o){return new Sf(o)}(t.databaseInfo);return function(o,a,l,h){return new Df(o,a,l,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,a,l){return new kf(r,i,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Xo(this.syncEngine,e,0),function(){return Ho.D()?new Ho:new Rf}())}createSyncEngine(t,e){return function(i,o,a,l,h,d,m){const I=new ep(i,o,a,l,h,d);return m&&(I.La=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=F(r);N("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await bn(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):Bt("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=Ma.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{N("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(N("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ns(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function di(n,t){n.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _c(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Zo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Ep(n);N("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Go(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Go(t.remoteStore,i)),n._onlineComponents=t}function yp(n){return n.name==="FirebaseError"?n.code===S.FAILED_PRECONDITION||n.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Ep(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await di(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!yp(e))throw e;Ce("Error using user provided cache. Falling back to memory cache: "+e),await di(n,new Jo)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await di(n,new Jo);return n._offlineComponents}async function xc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await Zo(n,n._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await Zo(n,new mp))),n._onlineComponents}function vp(n){return xc(n).then(t=>t.syncEngine)}async function Tp(n){const t=await xc(n),e=t.eventManager;return e.onListen=np.bind(null,t.syncEngine),e.onUnlisten=sp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=rp.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=op.bind(null,t.syncEngine),e}function Ip(n,t,e={}){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const m=new gp({next:R=>{a.enqueueAndForget(()=>Wf(o,I)),R.fromCache&&h.source==="server"?d.reject(new O(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(R)},error:R=>d.reject(R)}),I=new Yf(l,m,{includeMetadataChanges:!0,ra:!0});return Gf(o,I)}(await Tp(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(n,t,e){if(!e)throw new O(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function wp(n,t,e,r){if(t===!0&&r===!0)throw new O(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ea(n){if(!x.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function na(n){if(x.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ss(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function pr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ss(n);throw new O(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}wp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Nr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ra({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ra(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xh;switch(r.type){case"firstParty":return new Uh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ta.get(e);r&&(N("ComponentProvider","Removing Datastore"),ta.delete(e),r.terminate())}(this),Promise.resolve()}}function Ap(n,t,e,r={}){var i;const o=(n=pr(n,Nr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Ce("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,h;if(typeof r.mockUserToken=="string")l=r.mockUserToken,h=gt.MOCK_USER;else{l=pa(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new O(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new gt(d)}n._authCredentials=new Mh(new xa(l,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new kr(this.firestore,t,this._query)}}class Ct{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ct(this.firestore,t,this._key)}}class Qt extends kr{constructor(t,e,r){super(t,e,Ha(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ct(this.firestore,null,new x(t))}withConverter(t){return new Qt(this.firestore,t,this._path)}}function on(n,t,...e){if(n=be(n),Lc("collection","path",t),n instanceof Nr){const r=Y.fromString(t,...e);return na(r),new Qt(n,null,r)}{if(!(n instanceof Ct||n instanceof Qt))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return na(r),new Qt(n.firestore,null,r)}}function Rp(n,t,...e){if(n=be(n),arguments.length===1&&(t=Ma.newId()),Lc("doc","path",t),n instanceof Nr){const r=Y.fromString(t,...e);return ea(r),new Ct(n,null,new x(r))}{if(!(n instanceof Ct||n instanceof Qt))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return ea(r),new Ct(n.firestore,n instanceof Qt?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Ec(this,"async_queue_retry"),this.hu=()=>{const e=hi();e&&N("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=hi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=hi();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Wt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!wn(t))throw t;N("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Bt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const i=es.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&M()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class os extends Nr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new bp}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Uc(this),this._firestoreClient.terminate()}}function Pp(n,t){const e=typeof n=="object"?n:Mi(),r=typeof n=="string"?n:"(default)",i=Er(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=da("firestore");o&&Ap(i,...o)}return i}function Fc(n){return n._firestoreClient||Uc(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Uc(n){var t,e,r;const i=n._freezeSettings(),o=function(l,h,d,m){return new Jh(l,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Mc(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new _p(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xe(yt.fromBase64String(t))}catch(e){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new xe(yt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=/^__.*__$/;class Cp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ge(t,this.data,this.fieldMask,e,this.fieldTransforms):new An(t,this.data,e,this.fieldTransforms)}}function jc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class us{constructor(t,e,r,i,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new us(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.wu(t),i}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return mr(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(jc(this.fu)&&Sp.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Vp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Cr(t)}Fu(t,e,r,i=!1){return new us({fu:t,methodName:e,vu:r,path:ut.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dp(n){const t=n._freezeSettings(),e=Cr(n._databaseId);return new Vp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Np(n,t,e,r,i,o={}){const a=n.Fu(o.merge||o.mergeFields?2:0,t,e,i);Kc("Data must be an object, but it was:",a,r);const l=$c(r,a);let h,d;if(o.merge)h=new Pt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const I of o.mergeFields){const R=kp(t,I,e);if(!a.contains(R))throw new O(S.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);xp(m,R)||m.push(R)}h=new Pt(m),d=a.fieldTransforms.filter(I=>h.covers(I.field))}else h=null,d=a.fieldTransforms;return new Cp(new wt(l),h,d)}function qc(n,t){if(zc(n=be(n)))return Kc("Unsupported field value:",t,n),$c(n,t);if(n instanceof Bc)return function(r,i){if(!jc(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const l of r){let h=qc(l,i.bu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vd(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=it.fromDate(r);return{timestampValue:dr(i.serializer,o)}}if(r instanceof it){const o=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:dr(i.serializer,o)}}if(r instanceof cs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xe)return{bytesValue:lc(i.serializer,r._byteString)};if(r instanceof Ct){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Gi(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${ss(r)}`)}(n,t)}function $c(n,t){const e={};return La(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Le(n,(r,i)=>{const o=qc(i,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function zc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof it||n instanceof cs||n instanceof xe||n instanceof Ct||n instanceof Bc)}function Kc(n,t,e){if(!zc(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=ss(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function kp(n,t,e){if((t=be(t))instanceof as)return t._internalPath;if(typeof t=="string")return Hc(n,t);throw mr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Op=new RegExp("[~\\*/\\[\\]]");function Hc(n,t,e){if(t.search(Op)>=0)throw mr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new as(...t.split("."))._internalPath}catch{throw mr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function mr(n,t,e,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new O(S.INVALID_ARGUMENT,l+n+h)}function xp(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Mp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Wc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Mp extends Gc{data(){return super.data()}}function Wc(n,t){return typeof t=="string"?Hc(n,t):t instanceof as?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fp{convertValue(t,e="none"){switch(me(t)){case 0:return null;case 1:return t.booleanValue;case 2:return nt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(pe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Le(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new cs(nt(t.latitude),nt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ji(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(_n(t));default:return null}}convertTimestamp(t){const e=Zt(t);return new it(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);Q(gc(r));const i=new yn(r.get(1),r.get(3)),o=new x(r.popFirst(5));return i.isEqual(e)||Bt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Bp extends Gc{constructor(t,e,r,i,o,a){super(t,e,r,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Wc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class rr extends Bp{data(t={}){return super.data(t)}}class jp{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Yn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new rr(this._firestore,this._userDataWriter,r.key,r,new Yn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new O(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const h=new rr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Yn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new rr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Yn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:qp(l.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function qp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class $p extends Fp{constructor(t){super(),this.firestore=t}convertBytes(t){return new xe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ct(this.firestore,null,e)}}function fi(n){n=pr(n,kr);const t=pr(n.firestore,os),e=Fc(t),r=new $p(t);return Lp(n._query),Ip(e,n._query).then(i=>new jp(t,r,n,i))}function ia(n,t){const e=pr(n.firestore,os),r=Rp(n),i=Up(n.converter,t);return zp(e,[Np(Dp(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then(()=>r)}function zp(n,t){return function(r,i){const o=new Wt;return r.asyncQueue.enqueueAndForget(async()=>ap(await vp(r),i,o)),o.promise}(Fc(n),t)}(function(t,e=!0){(function(i){Me=i})(vr),de(new le("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new os(new Lh(r.getProvider("auth-internal")),new jh(r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yn(d.options.projectId,m)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Rt(Ao,"4.6.3",t),Rt(Ao,"4.6.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="firebasestorage.googleapis.com",Kp="storageBucket",Hp=2*60*1e3,Gp=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends ee{constructor(t,e,r=0){super(pi(t),`Firebase Storage: ${e} (${pi(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return pi(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ot;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ot||(Ot={}));function pi(n){return"storage/"+n}function Wp(){const n="An unknown error occurred, please check the error payload for server response.";return new xt(Ot.UNKNOWN,n)}function Qp(){return new xt(Ot.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Xp(){return new xt(Ot.CANCELED,"User canceled the upload/download.")}function Yp(n){return new xt(Ot.INVALID_URL,"Invalid URL '"+n+"'.")}function Jp(n){return new xt(Ot.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function sa(n){return new xt(Ot.INVALID_ARGUMENT,n)}function Xc(){return new xt(Ot.APP_DELETED,"The Firebase app was deleted.")}function Zp(n){return new xt(Ot.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=St.makeFromUrl(t,e)}catch{return new St(t,"")}if(r.path==="")return r;throw Jp(t)}static makeFromUrl(t,e){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(G){G.path.charAt(G.path.length-1)==="/"&&(G.path_=G.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+i+a,"i"),h={bucket:1,path:3};function d(G){G.path_=decodeURIComponent(G.path)}const m="v[A-Za-z0-9_]+",I=e.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",P=new RegExp(`^https?://${I}/${m}/b/${i}/o${R}`,"i"),D={bucket:1,path:3},k=e===Qc?"(?:storage.googleapis.com|storage.cloud.google.com)":e,V="([^?#]*)",q=new RegExp(`^https?://${k}/${i}/${V}`,"i"),$=[{regex:l,indices:h,postModify:o},{regex:P,indices:D,postModify:d},{regex:q,indices:{bucket:1,path:2},postModify:d}];for(let G=0;G<$.length;G++){const Tt=$[G],tt=Tt.regex.exec(t);if(tt){const v=tt[Tt.indices.bucket];let p=tt[Tt.indices.path];p||(p=""),r=new St(v,p),Tt.postModify(r);break}}if(r==null)throw Yp(t);return r}}class tm{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(n,t,e){let r=1,i=null,o=null,a=!1,l=0;function h(){return l===2}let d=!1;function m(...V){d||(d=!0,t.apply(null,V))}function I(V){i=setTimeout(()=>{i=null,n(P,h())},V)}function R(){o&&clearTimeout(o)}function P(V,...q){if(d){R();return}if(V){R(),m.call(null,V,...q);return}if(h()||a){R(),m.call(null,V,...q);return}r<64&&(r*=2);let $;l===1?(l=2,$=0):$=(r+Math.random())*1e3,I($)}let D=!1;function k(V){D||(D=!0,R(),!d&&(i!==null?(V||(l=2),clearTimeout(i),I(0)):V||(l=1)))}return I(0),o=setTimeout(()=>{a=!0,k(!0)},e),k}function nm(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(n){return n!==void 0}function oa(n,t,e,r){if(r<t)throw sa(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw sa(`Invalid value for '${n}'. Expected ${e} or less.`)}function im(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const i=t(r)+"="+t(n[r]);e=e+i+"&"}return e=e.slice(0,-1),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(gr||(gr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(t,e,r,i,o,a,l,h,d,m,I,R=!0){this.url_=t,this.method_=e,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=I,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,D)=>{this.resolve_=P,this.reject_=D,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Jn(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=l=>{const h=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,d)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const l=o.getErrorCode()===gr.NO_ERROR,h=o.getStatus();if(!l||sm(h,this.additionalRetryCodes_)&&this.retry){const m=o.getErrorCode()===gr.ABORT;r(!1,new Jn(!1,null,m));return}const d=this.successCodes_.indexOf(h)!==-1;r(!0,new Jn(d,o))})},e=(r,i)=>{const o=this.resolve_,a=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const h=this.callback_(l,l.getResponse());rm(h)?o(h):o()}catch(h){a(h)}else if(l!==null){const h=Wp();h.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,h)):a(h)}else if(i.canceled){const h=this.appDelete_?Xc():Xp();a(h)}else{const h=Qp();a(h)}};this.canceled_?e(!1,new Jn(!1,null,!0)):this.backoffId_=em(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&nm(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Jn{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function am(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function cm(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function um(n,t){t&&(n["X-Firebase-GMPID"]=t)}function lm(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function hm(n,t,e,r,i,o,a=!0){const l=im(n.urlParams),h=n.url+l,d=Object.assign({},n.headers);return um(d,t),am(d,e),cm(d,o),lm(d,r),new om(h,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function fm(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e){this._service=t,e instanceof St?this._location=e:this._location=St.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new _r(t,e)}get root(){const t=new St(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fm(this._location.path)}get storage(){return this._service}get parent(){const t=dm(this._location.path);if(t===null)return null;const e=new St(this._location.bucket,t);return new _r(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw Zp(t)}}function aa(n,t){const e=t==null?void 0:t[Kp];return e==null?null:St.makeFromBucketSpec(e,n)}function pm(n,t,e,r={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:pa(i,n.app.options.projectId))}class mm{constructor(t,e,r,i,o){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=Qc,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Hp,this._maxUploadRetryTime=Gp,this._requests=new Set,i!=null?this._bucket=St.makeFromBucketSpec(i,this._host):this._bucket=aa(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=St.makeFromBucketSpec(this._url,t):this._bucket=aa(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){oa("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){oa("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new _r(this,t)}_makeRequest(t,e,r,i,o=!0){if(this._deleted)return new tm(Xc());{const a=hm(t,this._appId,r,i,e,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,e){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,i).getPromise()}}const ca="@firebase/storage",ua="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="storage";function gm(n=Mi(),t){n=be(n);const r=Er(n,Yc).getImmediate({identifier:t}),i=da("storage");return i&&_m(r,...i),r}function _m(n,t,e,r={}){pm(n,t,e,r)}function ym(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new mm(e,r,i,t,vr)}function Em(){de(new le(Yc,ym,"PUBLIC").setMultipleInstances(!0)),Rt(ca,ua,""),Rt(ca,ua,"esm2017")}Em();class vm{constructor(){this.firebaseConfig={apiKey:"AIzaSyBXU1xgdwoytR4eHiD4cH3wi-B8Ici5enw",authDomain:"shop-82bfe.firebaseapp.com",projectId:"shop-82bfe",storageBucket:"shop-82bfe.appspot.com",messagingSenderId:"614013827486",appId:"1:614013827486:web:a607909c680b4795cf3e8f"},this.app=Tr(this.firebaseConfig),this.db=Pp(this.app),this.storage=gm(this.app),this.collectionKey="products",this.collectionKeyOrders="orders"}async add(t){const e=await ia(on(this.db,this.collectionKey),t);return{...t,id:e.id}}async pull(){const t=await fi(on(this.db,this.collectionKey)),e=[];return t.forEach(r=>{e.push({id:r.id,imgURL:r.data().imgURL,title:r.data().title,series:r.data().series,price:r.data().price,...r.data()})}),e}async getProductId(t){const e=await fi(on(this.db,this.collectionKey));let r=null;return e.forEach(i=>{t===i.id&&(r={id:i.id,...i.data()})}),r}async saveOrder(t){try{const e=await ia(on(this.db,this.collectionKeyOrders),t);return console.log("Заказ сохранен с ID: ",e.id),{...t,id:e.id}}catch(e){console.error("Ошибка добавления заказа: ",e)}}async getOrder(){const t=await fi(on(this.db,this.collectionKeyOrders));let e=[];return t.forEach(r=>{e.push({id:r.id,...r.data()})}),console.log(e),e}}class Tm{constructor(){oe(this,"handleModel",t=>{this.itemView.render(t)});oe(this,"handleView",t=>{this.itemModel.add(t),this.firebase.add(t)});this.itemModel=new ju({onNewProduct:this.handleModel}),this.itemView=new $u({onNewItem:this.handleView}),this.firebase=new vm}async pullFirebase(){try{const t=await this.firebase.pull();this.itemModel.set(t),this.itemView.render(this.itemModel.get())}catch(t){console.error("Ошибка при загрузке данных из Firebase:",t)}}async getOrder(){try{const t=await this.firebase.getOrder();this.itemView.renderOrders(t)}catch(t){console.error("Ошибка при загрузке данных из Firebase:",t)}}}const Jc=new Tm;Jc.pullFirebase();Jc.getOrder();
