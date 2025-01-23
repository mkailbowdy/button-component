<script setup lang="ts">
import ToastComponent from '@/components/ToastComponent.vue'
</script>

<template>
<main>
  <ToastComponent notification="Success">Your content successfully added!</ToastComponent>
  <ToastComponent notification="Error">Unable to delete your comment!</ToastComponent>
  <ToastComponent notification="Warning">Your image is 5Mb, it may load longer!</ToastComponent>
  <ToastComponent notification="Info">Your content is publicly visible!</ToastComponent>
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
  gap: 1rem;
}
</style>
