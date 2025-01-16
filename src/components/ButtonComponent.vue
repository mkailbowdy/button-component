<script setup lang="ts">

import { computed } from 'vue'

type ButtonHierarchy = 'primary' | 'secondary' | 'tertiary' | 'linkColor' | 'linkGray' | 'destructive';
type ButtonSize = 'medium' | 'mediumLink' | 'large' | 'largeLink' | 'xl' | 'xlLink' | 'xl2' | 'xl2Link';

const props = defineProps({
  hierarchy: {
    type: String as ()=> ButtonHierarchy,
    default: 'primary',
    required: false,
  },
  size: {
    type: String as ()=> ButtonSize,
    default: 'medium',
    required: false,
  },
  iconOnly: {
    type: Boolean,
    required: false
  },
})

const buttonClassesHierarchy = computed(()=>{
  const buttonHierarchy = {
    primary: 'button__field--primary',
    secondary: 'button__field--secondary',
    tertiary: 'button__field--tertiary',
    linkColor: 'button__field--linkColor',
    linkGray: 'bg-indigo-50 border-indigo-200 text-indigo-600',
    destructive: 'button__field--destructive',
  }
  return `${buttonHierarchy[props.hierarchy] || ''}`
})

const buttonClassesSizes = computed(()=>{
  const buttonSizes = {
    medium: 'button__field--medium',
    mediumLink: 'button__field--medium--link',
    large: 'button__field--large',
    largeLink: 'button__field--large--link',
    xl: 'button__field--xl',
    xlLink: 'button__field--xl--link',
    xl2: 'button__field--xl2',
    xl2Link: 'button__field--xl2--link',
  }
  return `${buttonSizes[props.size] || ''}`
})

const buttonClasses = computed(()=>{
  return buttonClassesHierarchy.value +' '+ buttonClassesSizes.value
})
const iconClasses = computed(()=>{
  if (props.size === 'large' || props.size === 'largeLink') {
    return 'button__field--icon button__field--icon--left'
  } else if (props.size === 'xl') {
    return 'button__field--icon button__field--icon--right'
  } else {
    return 'button__field--icon button__field--icon--none'
  }
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
    <div class="button__field--iconOnly" :class="buttonClassesHierarchy" ref="icon">
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
  cursor: pointer;
}
.button__field--primary {
  color: #ffffff;
  background-color: #4338CA;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.06), 0 1px 3px 0 rgb(0 0 0 / 0.10);
}

.button__field--primary:active {
  background-color: #3C32B5;
}

.button__field--secondary {
  color: #171717;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.06), 0 1px 3px 0 rgb(0 0 0 / 0.10);
}

.button__field--tertiary {
  color: #4338ca;
  background-color: #ffffff;
  border:none;
  border-radius: 0;
  box-shadow: none;
}

.button__field--linkColor {
  color: #4338ca;
  background-color: transparent;
}

.button__field--destructive {
  color: #ffffff;
  background-color: #dc2626;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.06), 0 1px 3px 0 rgb(0 0 0 / 0.10);
}

.button__field--medium {
  height:40px;
  width:107px;
  font-size: 14px;
  line-height: 20px;
}

.button__field--medium--link {
  font-size: 14px;
}

.button__field--large {
  height:44px;
  width:148px;
  padding-left: 32px;
  font-size: 16px;
  line-height: 24px;
}

.button__field--large--link {
  width:148px;
  height:40px;
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

.button__field--xl--link {
  font-size: 16px;
}

.button__field--xl2 {
  height:60px;
  width:148px;
  padding: 16px 24px;
  font-size: 18px;
  line-height: 28px;
}
.button__field--xl2--link {
  font-size: 18px;
}

.button__field--iconOnly {
  display:flex;
  justify-content: center;
  align-items: center;
  top:0;
  bottom:0;
  height:56px;
  width:56px;
  cursor: pointer;
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
  cursor: pointer;
}

.button__field--icon--right {
  right:0;
  padding-right:18px;
  cursor: pointer;
}
.button__field--icon--none {
  display:none;
}

</style>
