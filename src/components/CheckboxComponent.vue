<script setup lang="ts">
import { onMounted, ref } from 'vue'

const checkboxElement = ref<HTMLInputElement | null>(null)
const props = defineProps({
  indeterminate: {
    type: Boolean,
    default: false,
    required: false,
  }
})

onMounted(()=>{
  if(props.indeterminate) {
    if(checkboxElement.value) {
      checkboxElement.value.indeterminate = true;
    }
  }
})

</script>

<template>
<input type="checkbox" ref="checkboxElement" class="checkbox"/>
</template>

<style scoped>
/**
Notes:

==Pass a border color in the parent component==

input[type="checkbox"] {
  border: 1px solid lightgray;
}

==Pass a background color in the parent component==
input[type="checkbox"]:checked {
  background-color: #41D3BD;
}

input[type="checkbox"]:indeterminate {
  background-color: #41D3BD;
}

**/

input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  position: relative;
  margin:4px;
}

/*Draw a checkmark. use a small 4px x 10px box, with border only on right and bottom, then rotate*/
input[type="checkbox"]:checked::after {
  position: absolute;
  content: "";
  width: 4px;
  height: 8px;
  border: solid #ffffff;
  border-width: 0 2px 2px 0;
  top:50%;
  left:50%;
  transform: translate(-50%,-60%) rotate(45deg);
}

input[type="checkbox"]:indeterminate::after {
  position: absolute;
  content: "";
  width: 10px;
  border: solid #fff;
  border-width: 0 0 2px 0;
  border-radius: 4px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

</style>
