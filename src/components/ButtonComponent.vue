<script setup lang="ts">

import { computed, onMounted, ref } from 'vue'

type ButtonHierarchy = 'primary' | 'secondary' | 'tertiary' | 'linkColor' | 'linkGray' | 'destructive';
type ButtonSize = 'medium' | 'large' | 'xl' | 'xl2';

const props = defineProps({
  hierarchy: {
    type: String as ()=> ButtonHierarchy,
    required: true,
  },
  size: {
    type: String as()=> ButtonSize,
    required: true,
  },
  iconOnly: {
    type: Boolean,
    required: false
  },
  svg: {
    type: String,
    required: false
  }
})

const icon = ref<HTMLElement | null>(null)

onMounted(()=>{
  console.log(icon.value)
  if (props.svg && icon.value !== null) {
    icon.value.innerHTML = props.svg
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
  }
  return `${buttonSizes[props.size] || ''}`
})

const buttonClasses = computed(()=>{
  return buttonClassesHierarchy.value +' '+ buttonClassesSizes.value
})
const iconClasses = computed(()=>{
  if (props.size === 'large') {
    return 'button__field--icon button__field--icon--left'
  } else if (props.size === 'xl') {
    return 'button__field--icon button__field--icon--right'
  } else if (props.size === 'xl2') {
    return 'button__field--icon button__field--icon--none'
  }
  return ''
})
</script>
<template>
  <div v-if="!iconOnly" class="button__field">
    <button :class="buttonClasses"><slot /></button>
    <div :class="iconClasses">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="buttonClassesHierarchy"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path></svg>
    </div>
  </div>
  <div v-else>
    <div class="button__field--iconOnly" ref="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="buttonClassesHierarchy"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path></svg>
    </div>
  </div>
</template>
<style scoped>
.button__field {
  position: relative;
}
button {
  font-family: inherit;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.06), 0 1px 3px 0 rgb(0 0 0 / 0.10);
  cursor: pointer;
}
.button__field--primary {
  color:#ffffff;
  background-color: #4338CA;
  fill: #ffffff;
}
.button__field--medium {
  padding: 10px 14px;
  font-size: 14px;
  line-height: 20px;
}
.button__field--large {
  height:44px;
  width:148px;
  padding-left: 32px;
  font-size: 16px;
  line-height: 24px;
}
.button__field--xl {
  height:48px;
  width:156px;
  padding-right: 32px;
  font-size: 16px;
  line-height: 24px;
}

.button__field--xl2 {
  height:60px;
  width:148px;
  padding: 16px 24px;
  font-size: 18px;
  line-height: 28px;
}

.button__field--iconOnly {
  display:flex;
  justify-content: center;
  align-items: center;
  top:0;
  bottom:0;
  height:56px;
  width:56px;
  background-color: #4338CA;
  border-radius: 4px;
}
.button__field--iconOnly svg{
  height:24px;
  width:24px;
}

.button__field--icon {
  display:flex;
  position:absolute;
  top:14px;
  bottom:14px;
}

.button__field--icon--left {
  padding-left:18px;
}

.button__field--icon--right {
  right:0;
  padding-right:18px;
}
.button__field--icon--none {
  display:none;
}

</style>
