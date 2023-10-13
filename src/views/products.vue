<script setup>
  import { ref, onMounted, inject } from 'vue';
  import SearchBox from '../components/search-box.vue';
  import ProductsList from '../components/products-list.vue';

  const products = ref([]);
  const productsService = inject('productsService');

  function onSearchQueryInput(searchQuery) {
    products.value = productsService.search(searchQuery);
  }

  onMounted(() => {
    products.value = productsService.getAll();
  });
</script>

<template>
  <search-box @input:search-query="onSearchQueryInput"/>
  <products-list :products="products" />
</template>

<style scoped>
</style>
