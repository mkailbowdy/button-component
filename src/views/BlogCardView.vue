<script setup lang="ts">

import BlogCard from '@/components/BlogCard.vue'
</script>

<template>
<main>
  <BlogCard />
</main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #e5e7eb;
  padding: 16px;
}
</style>
