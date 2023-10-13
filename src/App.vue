<script setup>
  import { onMounted } from 'vue';
  import ProductsView from './views/products.vue';

  const products = [
    { id: 1, name: 'Product 1', imageURL: 'https://placehold.co/200x400', type: 'electronics' },
    { id: 2, name: 'Product 2', imageURL: 'https://placehold.co/200x200', type: 'fashion' },
    { id: 3, name: 'Product 3', imageURL: 'https://placehold.co/200x400', type: 'electronics' },
    { id: 4, name: 'Product 4', imageURL: 'https://placehold.co/200x400', type: 'electronics' },
    { id: 5, name: 'Product 5', imageURL: 'https://placehold.co/200x400', type: 'electronics' },
    { id: 6, name: 'Product 6', imageURL: 'https://placehold.co/200x200', type: 'fashion' },
    { id: 7, name: 'Product 7', imageURL: 'https://placehold.co/200x200', type: 'fashion' },
    { id: 8, name: 'Product 8', imageURL: 'https://placehold.co/200x200', type: 'fashion' }
  ]

  onMounted(() => {
    localStorage.setItem('products', JSON.stringify(products));
  });
</script>

<template>
  <header>
    <h1>✨ AWESOME PRODUCT LIST ✨</h1>
  </header>

  <main>
    <products-view />
  </main>
</template>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
