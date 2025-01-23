<script setup lang="ts">
import { computed } from 'vue'

type NotificationType = 'Success' | 'Info' | 'Warning' | 'Error'
interface ToastProps {
  notification?: NotificationType;
}

const props = withDefaults(defineProps<ToastProps>(), {
  notification: 'Success',
})

// Dynamic Object Syntax for Classes
const notificationClasses = computed(() => {
  return {
    [`toast__field--${props.notification}`]: true,
  }
})
</script>
<template>
  <div :class="notificationClasses" class="toast__field flex items-center gap-3 pl-1 pr-2.5 pt-1 pb-1 rounded-[2000px]">
    <div class="px-2.5 py-0.5 rounded-full shadow-md bg-white">{{props.notification}}</div>
    <span><slot /></span>
  </div>
</template>
