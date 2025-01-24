<script setup lang="ts">
import CheckboxComponent from '@/components/CheckboxComponent.vue'
import { onMounted, ref } from 'vue'

const indeterminate = ref<HTMLInputElement | null>(null)
onMounted(()=>{
  if (indeterminate.value) {
    indeterminate.value.indeterminate = true
  }
})
</script>

<template>
  <main>
    <div class="flex flex-col gap-4">
      <div class="flex gap-4">
        <CheckboxComponent class="border border-neutral-300"/> <span>Unchecked</span>
      </div>
      <div class="flex gap-4">
        <CheckboxComponent class="border border-neutral-300 checked:bg-indigo-600 checked:border-indigo-600" checked /> <span>Checked</span>
      </div>
      <div class="flex gap-4">
        <CheckboxComponent class="border border-neutral-300 indeterminate:bg-indigo-600 indeterminate:border-indigo-600" ref="indeterminate" :indeterminate="true" /> <span>Indeterminate</span>
      </div>
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
