<script setup lang="ts">
import InputComponent from '@/InputComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { ref } from 'vue'


const username = ref('')
const password = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

const getUser = async()=> {
  errorMessage.value = ''
  isLoading.value = true

  // Basic client-side validation
  if (!username.value || !password.value) {
    errorMessage.value = 'Please enter both username and password'
    isLoading.value = false
    return
  }

  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });
    const json = await response.json();

    if (response.ok) {
      // Successful login
      console.log(json);
      // Redirect or update app state
    } else {
      // Handle login error
      errorMessage.value = json.message || 'Login failed'
    }

  } catch (error) {
    errorMessage.value = 'Network error. Please try again.'
    console.log(error + 'MEOW ERROR MEOW');
  } finally {
    isLoading.value = false
  }
}

</script>

<template>
<main>
  <section>
    <h1>Log in to your account</h1>
    <form>
<!--      <InputComponent required type="email" id="email" label="Email" name="email" class="border border-gray-300" placeholder="email@gmail.com" customIcon>-->
<!--        <template #custom-icon>-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>-->
<!--        </template>-->
<!--      </InputComponent>-->
      <InputComponent v-model="username" type="text" id="username" label="Username" name="username"/>
      <InputComponent v-model="password" required type="password" id="password" label="Password" name="password" class="border border-gray-300" :eyeIcon="true"/>
      <ButtonComponent :disabled="isLoading" class="bg-indigo-700 text-white" size="medium" @click.prevent="getUser">Submit</ButtonComponent>
    </form>
    <p v-show="errorMessage" class="text-red-500">{{errorMessage}}</p>

    <span class="redirect">Don’t have an account? <a href="#" class="text-indigo-700">Sign up</a></span>
  </section>
  <section class="hero">
    <img src="../../assets/sign-in.jpg" alt="VR guy having a blast."/>
  </section>
</main>
</template>

<style scoped>
img {
  display: block;
  max-width: 100%;
  object-fit: cover;
}
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 12px;
  height: 100vh;
}

section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
}
.hero {
  display: none;
}
@media screen and (min-width: 768px) {
  section {
    margin: 0 auto;
    min-width: 456px;
  }
}
@media screen and (min-width: 1440px){
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 32px 96px;
  }
  .hero {
    display: flex;
  }
  .hero img {
    width: 592px;
    height: 672px;
    object-fit: cover;
    border-radius: 3px;
  }
}

form{
  display:flex;
  flex-direction: column;
  gap: 24px;
}

h1 {
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #171717;
}

.redirect {
  margin: 0 auto;
  font-size: 14px;
  line-height: 20px;
}

</style>
