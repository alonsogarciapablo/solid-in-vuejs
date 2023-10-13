<script setup>
  const props = defineProps(['product'])
</script>

<template>
  <li>
    <div class="category">Electronics</div>
    <div class="name">{{ props.product.name }}</div>
    <img class="image" :src="props.product.imageURL" />
    <div>
      <button @click="$emit('addToCart', props.product)">🛒 Add to cart</button>
    </div>
  </li>
</template>

<style scoped>
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
