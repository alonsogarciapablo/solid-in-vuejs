<script setup>
  import getProductListItemComponent from '../utils/get-product-list-item-component';

  defineProps(['products'])

  function onProductAddToCart(product) {
    alert(`Product added to cart: ${ product.id }`);
  }
</script>

<template>
  <ul>
    <template v-for="product in products" :key="product.id">
      <component :is="getProductListItemComponent(product.type)" :product="product" @addToCart="onProductAddToCart"/>
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
</style>
