<script setup>
  import { ref } from 'vue';
  
  const searchQuery = ref(null);
  const emit = defineEmits(['input:search-query']);
  
  function onSearchQueryInput() {
    emit('input:search-query', searchQuery.value);
  }
</script>

<template>
  <input class="search-box" v-model="searchQuery" placeholder="Type something awesome" @input="onSearchQueryInput" />
</template>

<style scoped>
  .search-box {
    width: 100%;
    font-size: 2rem;
    margin-bottom: 20px;
  }
</style>
