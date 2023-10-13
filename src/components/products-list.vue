<script setup>
  import { onMounted, ref } from 'vue';
  import ElectronicsProductsListItem from './electronics-products-list-item.vue';
  import FashionProductsListItem from './fashion-products-list-item.vue';

  defineProps(['showSearchBox'])
  const searchQuery = ref(null);

  const products = ref([]);

  function getProductComponent(productType) {
    switch(productType) {
      case 'electronics': 
        return ElectronicsProductsListItem;
      case 'fashion':
        return FashionProductsListItem;
    }

    throw new Error(`Type: ${productType} is not supported`);
  }

  function onProductAddToCart(product) {
    alert(`Product added to cart: ${ product.id }`);
  }

  function fetchProducts() {
    return JSON.parse(localStorage.getItem('products'));
  }
  
  function searchProducts() {
    let newProducts = fetchProducts();
    newProducts = newProducts.filter((product) => product.name.match(searchQuery.value));
    products.value = newProducts;
  }

  onMounted(() => {
    products.value = fetchProducts();
  });
</script>

<template>
  <div v-if="showSearchBox">
    <input class="search-box" v-model="searchQuery" placeholder="Type something awesome" @input="searchProducts" />
  </div>

  <ul>
    <template v-for="product in products" :key="product.id">
      <component :is="getProductComponent(product.type)" :product="product" @addToCart="onProductAddToCart"/>
    </template>
  </ul>
</template>

<style scoped>
  ul {
    --gap: 20px;
    --columns: 4;
    --column-width: calc(25% - (((var(--columns) - 1) * var(--gap)) / (var(--columns))));

    display: flex;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    gap: var(--gap);
  }
  ul > li {
    border: 1px dashed red;
    width: var(--column-width);
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }
  .search-box {
    width: 100%;
    font-size: 2rem;
    margin-bottom: 20px;
  }
</style>
