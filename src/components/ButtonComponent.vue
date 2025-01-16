<script setup lang="ts">

import { computed } from 'vue'

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
      <slot name="svg"></slot>
    </div>
  </div>
  <div v-else>
    <div class="button__field--iconOnly" ref="icon">
      <div class="svg-wrapper">
        <slot name="svg"></slot>

      </div>
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
.svg-wrapper{
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
