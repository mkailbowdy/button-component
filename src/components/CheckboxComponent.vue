<script setup lang="ts">
import { onMounted, ref } from 'vue'

const checkboxElement = ref<HTMLInputElement | null>(null)

</script>

<template>
<input type="checkbox" ref="checkboxElement" class="checkbox" />
</template>

<style scoped>
input[type="checkbox"] {
  /* Remove default browser styling */
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #E6E6E6;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  position: relative;
}
/* Checked state */
input[type="checkbox"]:checked {
  background-color: #4F46E5;
  border-color: #4F46E5;
}

/* Checked state - checkmark */
input[type="checkbox"]:checked::after {
  content: '✔';
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 14px;
}
</style>
