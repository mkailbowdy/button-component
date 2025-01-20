<script setup lang="ts">
import { computed } from 'vue'

type StatusType = 'neutral' | 'error' | 'warning' | 'success' | 'brand'

const props = defineProps({
  status: {
    type: String as () => StatusType,
    required: true,
  },
})

const statusClasses = computed(() => {
  const baseClass =
    'border rounded-2xl px-1.5 py-0.5 text-sm md:text-base md:px-2 md:py-1 lg:text-lg lg:px-2.5 lg:py-1.5'
  const statusStyles = {
    neutral: 'bg-neutral-50 border-neutral-200 text-neutral-600',
    error: 'bg-red-50 border-red-200 text-red-600',
    warning: 'bg-amber-50 border-amber-200 text-amber-600',
    success: 'bg-green-50 border-green-200 text-green-600',
    brand: 'bg-indigo-50 border-indigo-200 text-indigo-600',
  }
  return `${baseClass} ${statusStyles[props.status] || ''}`
})
</script>
<template>
  <span :class="statusClasses"><slot /></span>
</template>
