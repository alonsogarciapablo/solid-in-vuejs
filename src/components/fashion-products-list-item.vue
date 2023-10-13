<script setup>
  const props = defineProps(['product'])
</script>

<template>
  <li>
    <div class="name">{{ props.product.name }}</div>
    <div class="category">Fashion</div>
    <img class="image" :src="props.product.imageURL" />
  </li>
</template>

<style scoped>
  .name {
    font-size: 1.6rem;
  }
  .category {
    color: green;
  }
  .image {
    width: 100%;
  }
</style>
