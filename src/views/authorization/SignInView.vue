<script setup lang="ts">

import InputComponent from '@/InputComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<template>
<main>
  <h1>Log in to your account</h1>
  <form>
    <InputComponent required type="email" id="email" label="Email" class="border border-gray-300" placeholder="email@gmail.com" customIcon>
      <template #custom-icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
      </template>
    </InputComponent>
    <InputComponent required type="password" id="password" label="Password" class="border border-gray-300" :eyeIcon="true"/>
    <ButtonComponent>Submit</ButtonComponent>
  </form>
</main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 80rem;
  height: 100vh;
  padding: 1rem;
  gap: 16px;
}

form{
  display:flex;
  flex-direction: column;
  gap: 16px;
}

h1 {
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #171717;
}

</style>
