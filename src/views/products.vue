<script setup>
  import { ref, onMounted } from 'vue';
  import SearchBox from '../components/search-box.vue';
  import ProductsList from '../components/products-list.vue';
  import LocalStorageProductsService from '../services/local-storage-products-service';

  const products = ref([]);
  const localStorageProductsService = new LocalStorageProductsService();

  function onSearchQueryInput(searchQuery) {
    products.value = localStorageProductsService.search(searchQuery);
  }

  onMounted(() => {
    products.value = localStorageProductsService.getAll();
  });
</script>

<template>
  <search-box @input:search-query="onSearchQueryInput"/>
  <products-list :products="products" />
</template>

<style scoped>
</style>
