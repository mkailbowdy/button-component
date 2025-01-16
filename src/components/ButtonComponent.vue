<script setup lang="ts">

import { computed } from 'vue'

type ButtonHierarchy = 'primary' | 'secondary' | 'tertiary' | 'linkColor' | 'linkGray' | 'destructive';
type ButtonSize = 'medium' | 'large' | 'xl' | 'xl2' | 'icon';

const props = defineProps({
  hierarchy: {
    type: String as ()=> ButtonHierarchy,
    required: true,
  },
  size: {
    type: String as()=> ButtonSize,
    required: true,
  }
})

const buttonClassesHierarchy = computed(()=>{
  const buttonHierarchy = {
    primary: 'button__field--primary',
    secondary: 'bg-red-50 border-red-200 text-red-600',
    tertiary: 'bg-amber-50 border-amber-200 text-amber-600',
    linkColor: 'bg-green-50 border-green-200 text-green-600',
    linkGray: 'bg-indigo-50 border-indigo-200 text-indigo-600',
    destructive: 'bg-indigo-50 border-indigo-200 text-indigo-600',
  }
  return `${buttonHierarchy[props.hierarchy] || ''}`
})

const buttonClassesSizes = computed(()=>{
  const buttonSizes = {
    medium: 'button__field--medium',
    large: 'button__field--large',
    xl: 'button__field--xl',
    xl2: 'button__field--xl2',
    icon: 'button__field--icon',
  }
  return `${buttonSizes[props.size] || ''}`
})

const buttonClasses = computed(()=>{
  return buttonClassesHierarchy.value +' '+ buttonClassesSizes.value
})
console.log(buttonClasses)
</script>
<template>
  <button :class="buttonClasses"><slot /></button>
</template>
<style scoped>
button {
  font-family: inherit;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 1px 2px 0 rgb(0 0 0 / 0.06), 0px 1px 3px 0 rgb(0 0 0 / 0.10);
  cursor: pointer;
}
.button__field--primary {
  color:#ffffff;
  background-color: #4338CA;
}
.button__field--medium {
  padding: 10px 14px;
  font-size: 14px;
  line-height: 20px;
}
.button__field--large {
  padding: 10px 16px;
  font-size: 16px;
  line-height: 24px;
}
.button__field--xl {
  padding: 12px 20px;
  font-size: 16px;
  line-height: 24px;
}

.button__field--xl2 {
  padding: 16px 24px;
  font-size: 18px;
  line-height: 28px;
}

.button__field--icon {
  padding: 16px;
}
</style>
