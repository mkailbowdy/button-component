<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAttrs } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  error: {
    type: Boolean,
    default: false,
    required: false,
  }
})
defineOptions({
  inheritAttrs: false
})
const attrs = useAttrs()
const maxLength = computed(()=>{
  const length = attrs.maxlength
  return typeof length === 'string' ? parseInt(length) : 0
})

const text = ref('');
const textLength = computed(()=>{
  return text.value.length
})

const warningColor = computed(()=>{
  return {
    'text-yellow-500': textLength.value >= maxLength.value / 2 && textLength.value < maxLength.value,
    'text-red-500': textLength.value === maxLength.value,
  }
})

</script>
<template>
  <div class="textarea__field">
    <label for="description-field">{{props.label}}</label>
    <textarea v-bind="attrs" v-model="text" id="description-field" aria-describedby="description-error"></textarea>
    <div class="flex">
      <span v-if="props.error" class="text-red-500">This field is required</span>
      <small v-else class="ml-auto"><span :class="warningColor">{{textLength}}</span>/{{maxLength}}</small>
    </div>
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
  resize: none;
  border-radius: 8px;
}

textarea::placeholder {
  color: #737373;
}
textarea:focus {
  box-shadow: 2px 2px 2px lightgray;
  outline: none;
}
</style>
