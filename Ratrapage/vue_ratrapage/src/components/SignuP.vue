<template>


  
    
  <fieldset class="px-2 md:px-4 md:pb-2 border border-black lg:w-3/5 ml-10 border-b-indigo-600 bg-red-200">

  <form class="max-w-sm mx-auto pt-40 border border-raduis  w-1/2" @submit.prevent="Register">
    <div class="mb-5">
      <label for="name" class="block ml-2 font-medium text-gray-900 dark:text-white text-xl">Your name</label>
      <input type="name" v-model="name" id="name"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="name" required />

      <label for="email" class="block ml-2 text-xl font-medium text-gray-900 dark:text-white">Your email</label>
      <input type="email" v-model="email" id="email"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="name@flowbite.com" required />
    </div>
    <div class="mb-5">
      <label for="password" class="block ml-2 text-xl font-medium text-gray-900 dark:text-white">Your
        password</label>
      <input type="password" v-model="password" id="password"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required />
    </div>
    <div class="mb-5">
      <label for="repeat-password" class="block ml-2 text-xl m font-medium text-gray-900 dark:text-white">Repeat
        password</label>
      <input type="password" v-model="repeat_password" id="repeat-password"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl m rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required />
    </div>
    <div class="flex items-start mb-5">
      <div class="flex items-center h-5">
        <input id="terms" type="checkbox" value=""
          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          required />
      </div>
      <label for="terms" class="ms-2 text-xl m font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#"
          class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
    </div>
    <button type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl m px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-20">Submit</button>
  </form>
  </fieldset>


</template>

<script setup>
import { ref } from 'vue';
const name = ref("")
const email = ref("")
const password = ref("")
const repeat_password = ref("")



const Register = () => {
  if (!email.value.trim()) {
    alert("Entrez une adresse e-mail valide");
  }
  else if (!password.value.trim()) {
    alert("Entrez un mot de passe valide");
  }
  else if (!repeat_password.value.trim()) {
    alert("Entrez à nouveau votre mot de passe");
  }
  else if (!name.value.trim()) {
    alert("Entrez un nom valide");
  }

  else if ((!name.value.trim().length < 5 || !name.value.trim().length > 10)) {
    alert("Entrer au moins 5 caractères et 10 au plus")
  }

  else if ((!password.value.trim.length < 6) || (!password.value.trim.length > 10)) {
    alert("Entrer au moins 6 caractères et 10 au plus")
  }
  else
  {
    localStorage.setItem("name",name.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);
    localStorage.setItem("repeat_password",repeat_password.value); 
  }

};


</script>

<style scoped></style>
