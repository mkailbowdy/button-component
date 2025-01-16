<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { ref } from 'vue'

// Optional: add your own svg for the icon
// const svg = ref('')
// svg.value = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z"></path></svg>'
</script>
<template>
  <div class="container">
    <div class="button-variants">
          <ButtonComponent hierarchy="primary" size="xl2" icon-only>Button CTA</ButtonComponent>
    </div>
  </div>
</template>
<style scoped>

.container {
  display: flex;
  justify-content: center;
  min-height: 800px;
  margin: 0 auto;
  padding-top: 100px;
}

</style>
