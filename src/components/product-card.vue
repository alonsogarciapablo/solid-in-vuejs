<script setup>
  defineProps(['product'])
</script>

<template>
  <li>
    <div class="category"><slot /></div>
    <div class="name">{{ product.name }}</div>
    <img class="image" :src="product.imageURL" />
    <div>
      <button @click="$emit('addToCart', product)">🛒 Add to cart</button>
    </div>
  </li>
</template>

<style scoped>
  li {
    border: 1px dashed red;
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }

  .name {
    font-size: 1.6rem;
  }
  .category {
    color: purple;
  }
  .image {
    width: 100%;
  }
</style>
