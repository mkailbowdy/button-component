<script setup lang="ts">
import { useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false
})

const attrs = useAttrs()
const props = defineProps({
  icon: {
    type: Boolean,
    default: true,
    required: false,
  }
})

</script>
<template>
  <div class="input__field">
    <input v-bind="attrs">
    <div v-if="props.icon" class="input__field__icon input__field__icon--right">
      <slot name="icon-right">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8.00004C1.33337 4.31814 4.31814 1.33337 8.00004 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667ZM8.00004 13.3334C10.9456 13.3334 13.3334 10.9456 13.3334 8.00004C13.3334 5.05452 10.9456 2.66671 8.00004 2.66671C5.05452 2.66671 2.66671 5.05452 2.66671 8.00004C2.66671 10.9456 5.05452 13.3334 8.00004 13.3334ZM7.33337 10H8.66671V11.3334H7.33337V10ZM8.66671 8.90344V9.33337H7.33337V8.33337C7.33337 7.96517 7.63184 7.66671 8.00004 7.66671C8.55231 7.66671 9.00004 7.21897 9.00004 6.66671C9.00004 6.11442 8.55231 5.66671 8.00004 5.66671C7.51491 5.66671 7.11044 6.01219 7.01924 6.47055L5.71158 6.20901C5.92429 5.1395 6.86804 4.33337 8.00004 4.33337C9.28871 4.33337 10.3334 5.37804 10.3334 6.66671C10.3334 7.72371 9.63051 8.61657 8.66671 8.90344Z"
            fill="currentColor" />
        </svg>
      </slot>
    </div>
  </div>

</template>
<style scoped>

.input__field{
  position:relative;
}

.input__field input{
  padding: 9px 13px;
  padding-right: 37px;
  outline: none;
  background: #fafafa;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  width: 100%;
}

.input__field input::placeholder {
  color: #737373;
}

.input__field input:disabled::placeholder {
  color: #a3a3a3;
}

.input__field input:disabled {
  border: 1px solid #f5f5f5;
  color: #a3a3a3;
  pointer-events: none;
}

.input__field__icon {
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  color: #a3a3a3;
}

.input__field__icon--right {
  right: 0;
  padding-right: 14px;
}

</style>
