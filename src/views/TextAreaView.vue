<script setup lang="ts">
import TextareaComponent from '@/components/TextareaComponent.vue'

</script>

<template>
  <main>
    <div>
      <TextareaComponent label="Description" rows="5" cols="30" placeholder="Write your message..." maxlength="500" class="border"/>
    </div>
    <div>
      <TextareaComponent :error="true" label="Description" rows="5" cols="30" placeholder="Enter a description..." maxlength="500" class="border border-red-300"/>
    </div>
    <div>
      <TextareaComponent label="Description" rows="5" cols="30" placeholder="Write your message..." maxlength="500" class="border" disabled/>
    </div>
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
  background-color: #fff;
  padding: 16px;
  gap: 2em;
}
</style>
