<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false
})
const attrs = useAttrs()

const text = ref('');
const textLength = computed(()=>{
  return text.value.length
})
const maxLength = computed(()=>{
  return attrs.maxlength
})
const maxLengthValue = () =>{
  if (typeof maxLength.value === 'string') {
    return parseInt(maxLength.value)
  }
  return 0;
}

const color = computed(()=>{
  return {
    'text-yellow-500': textLength.value >= maxLengthValue() / 2 && textLength.value < maxLengthValue(),
    'text-red-500': textLength.value === maxLengthValue(),
  }
})


</script>
<template>
  <div class="textarea__field">
    <label>Description</label>
    <textarea v-bind="attrs" v-model="text"></textarea>
    <small><span :class="color">{{textLength}}</span>/{{maxLength}}</small>
  </div>
</template>
<style scoped>
.textarea__field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 340px;
}
label {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #404040;
}
small {
  align-self: end;
}
textarea {
  padding: 12px 14px;
  background-color: #fafafa;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;
  resize: none;
}
textarea::placeholder {
  color: #737373;
}
</style>
