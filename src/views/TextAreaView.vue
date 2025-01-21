<script setup lang="ts">
import TextareaComponent from '@/components/TextareaComponent.vue'

</script>

<template>
  <main>
    <TextareaComponent rows="5" cols="30" placeholder="Write your message..." maxlength="50" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  padding: 16px;
}
</style>
