<script setup lang="ts">
import InputComponent from '@/components/InputComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { ref } from 'vue'
import ToastComponent from '@/components/ToastComponent.vue'
import {betweenMinMax, containsLowercase, containsNumber, containsUppercase, containsSpecialChars} from '@/helpers/stringValidation.ts'

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const toastMessage = ref('')
const notificationType = ref('')

const getUser = async()=> {
  toastMessage.value = ''
  isLoading.value = true
  notificationType.value  = ''

  // Basic client-side validation
  if (!email.value || !password.value) {
    toastMessage.value = 'Please enter both username and password'
    isLoading.value = false
    notificationType.value = 'Error'
    setTimeout(() => {
      notificationType.value = ''
    }, 5000);
    return
  }

  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email.value,
        password: password.value,
      }),
    });
    const json = await response.json();

    if (response.ok) {
      // Successful login
      notificationType.value = 'Success'
      toastMessage.value = "Logged in successfully"
      console.log(json);
      setTimeout(() => {
        notificationType.value = ''
      }, 5000);
      // Redirect or update app state
    } else {
      // Unsuccessful login
      notificationType.value = 'Error'
      // Handle login error
      toastMessage.value = json.message || 'Login failed'
      setTimeout(() => {
        notificationType.value = ''
      }, 5000);
    }

  } catch (error) {
    notificationType.value = 'Error'
    toastMessage.value = 'Network error. Please try again.'
    console.log(error + 'MEOW ERROR MEOW');
    setTimeout(() => {
      notificationType.value = ''
    }, 5000);
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <Transition>
    <div v-if="notificationType" class="flex justify-center absolute min-w-full mt-8">
      <ToastComponent v-if="notificationType === 'Error'" :notification="notificationType" class="bg-red-50 text-red-700">{{toastMessage}}</ToastComponent>
      <ToastComponent v-if="notificationType === 'Success'" :notification="notificationType" class="bg-green-50 text-green-700">{{toastMessage}}</ToastComponent>
    </div>
  </Transition>
<main>
  <section>
    <h1>Create your account</h1>
    <form @submit.prevent="getUser">
<!--      <InputComponent required type="email" id="email" label="Email" name="email" class="border border-gray-300" placeholder="email@gmail.com" customIcon>-->
<!--        <template #custom-icon>-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>-->
<!--        </template>-->
<!--      </InputComponent>-->
      <InputComponent v-model="email" type="email" id="email" label="Email" name="email" class="border border-gray-300" required/>
      <InputComponent v-model="password" type="password" minlength="8" maxlength="64" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,64}$" id="password" label="Password" name="password" class="border border-gray-300" :eyeIcon="true" required/>
      <ul>
        <li class="flex items-center">
          <span v-if="betweenMinMax(password, 8, 64)" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-green-700"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"></path></svg>
          </span>
          <span v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-neutral-400"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"></path></svg>
          </span>
          8 - 64 characters</li>
        <li>
          <span v-if="containsUppercase(password)">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-green-700"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"></path></svg>
          </span>
          <span v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-neutral-400"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"></path></svg>
          </span>
          One uppercase letter</li>
        <li>
          <span v-if="containsLowercase(password)">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-green-700"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"></path></svg>
          </span>
          <span v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-neutral-400"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"></path></svg>
          </span>
          One lowercase letter</li>
        <li>
          <span v-if="containsNumber(password)">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-green-700"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"></path></svg>
          </span>
          <span v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-neutral-400"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"></path></svg>
          </span>
          One number</li>
        <li>
          <span v-if="containsSpecialChars(password)">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-green-700"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"></path></svg>
          </span>
          <span v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-neutral-400"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"></path></svg>
          </span>
          One special character (e.g., ! @ # $ % ^ & *)</li>
      </ul>
      <div class="flex gap-4">
        <input type="checkbox"><span>I agree with CodePulse <a href="#">Terms of Service</a></span>
      </div>
      <ButtonComponent :disabled="isLoading" class="bg-indigo-700 text-white" size="medium" >Create account</ButtonComponent>
    </form>
    <span class="redirect">Already have an account? <a href="/signin" class="text-indigo-700">Sign in</a></span>
  </section>
  <section class="hero">
    <img src="../../assets/sign-up.jpg" alt="VR guy having a blast."/>
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

li {
  display: flex;
  gap: 12px;
}

.redirect {
  margin: 0 auto;
  font-size: 14px;
  line-height: 20px;
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
