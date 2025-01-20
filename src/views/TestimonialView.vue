<script setup lang="ts">

import TestimonialComponent from '@/components/TestimonialComponent.vue'
</script>

<template>
<main>
  <TestimonialComponent>
    This website helped me save the garden.
  </TestimonialComponent>
</main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 800px;
  margin: 0 auto;
  background-color: #e5e7eb;
}
</style>
