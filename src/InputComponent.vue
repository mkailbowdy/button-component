<script setup lang="ts">
import { ref, useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false
})

const attrs = useAttrs()
const props = defineProps({
  eyeIcon: {
    type: Boolean,
    default: false,
    required: false,
  },
  customIcon:{
    type: Boolean,
    default: false,
    required: false,
  },
  id: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    default: 'text',
    required: true,
  }
})

const inputElement = ref<HTMLInputElement | null>(null)

const passwordHidden = ref(true)
const togglePassword = () => {
  if (inputElement.value?.type === 'text') {
    inputElement.value.setAttribute('type', 'password')
    passwordHidden.value = true
  } else {
    inputElement.value?.setAttribute('type', 'text')
    passwordHidden.value = false
  }
}

</script>
<template>
  <div class="input">
    <label :for="props.id">{{props.label}}</label>
    <div class="input__field">
      <input v-bind="attrs" :id="props.id" :type="props.type" ref="inputElement">
      <div v-if="props.eyeIcon" class="input__field__icon input__field__icon--right">
        <button v-if="passwordHidden" @click.prevent="togglePassword">
          <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z"></path></svg>
        </button>
        <button v-else @click.prevent="togglePassword">
          <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
        </button>
      </div>
      <div v-if="props.customIcon" class="input__field__icon input__field__icon--right">
        <slot name="custom-icon" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.input{
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.input__field {
  position: relative;
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
  width:100%;
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
