<script setup>
  import ProductCard from './product-card.vue';
  defineProps(['product'])
</script>

<template>
  <product-card :product="product">
    Fashion
  </product-card>
</template>

<style scoped>
</style>
