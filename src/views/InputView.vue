<script setup lang="ts">
import InputComponent from '@/InputComponent.vue'

</script>

<template>
  <main>
    <div>
      <label for="email-input">Email</label>
      <InputComponent id="email-input" type="email" placeholder="name@gmail.com" class="border border-gray-300" >
        <template #icon-right>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
        </template>
      </InputComponent>
    </div>

  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  padding: 16px;
  gap: 2em;
}
</style>
