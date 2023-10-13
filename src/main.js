import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import LocalStorageProductsService from './services/local-storage-products-service';

const app = createApp(App);

// We could easily change this to a RemoteProductsService
app.provide('productsService', new LocalStorageProductsService());

app.mount('#app')
