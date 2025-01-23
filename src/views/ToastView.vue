<script setup lang="ts">
import ToastComponent from '@/components/ToastComponent.vue'
</script>

<template>
<main>
  <ToastComponent notification="Success" class="bg-green-50 text-green-700" >Your content successfully added!</ToastComponent>
  <ToastComponent notification="Error" class="bg-red-50 text-red-700">Unable to delete your comment!</ToastComponent>
  <ToastComponent notification="Warning" class="bg-amber-50 text-amber-700">Your image is 5Mb, it may load longer!</ToastComponent>
  <ToastComponent notification="Info" class="bg-neutral-50 text-neutral-700">Your content is publicly visible!</ToastComponent>
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
