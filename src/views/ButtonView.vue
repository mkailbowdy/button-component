<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>
<template>
  <div class="container">
    <div class="button-variants">
        <div class="button__field">
          <ButtonComponent hierarchy="primary" size="large">Button CTA</ButtonComponent>
        </div>
    </div>
  </div>
</template>
<style scoped>

.container {
  display: flex;
  justify-content: center;
  min-height: 800px;
  margin: 0 auto;
  padding-top: 100px;
}

</style>
