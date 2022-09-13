<template>
  <div class="flex flex-col justify-center items-center min-h-[calc(100vh-160px)] p-5">
    <div class="text-gray-500 font-semibold border-2 shadow-md shadow-gray-300 p-5 w-full md:p-8 md:w-1/4">
      <div class="flex flex-row justify-end">
        <button class="bg-gray-100 rounded-full w-10 h-10" @click="goToSingup">x</button>
      </div>
      <div class="flex flex-col justify-center items-center gap-5 text-center">
        <img class="w-36" src="https://freepngimg.com/thumb/symbol/64685-box-icons-symbol-computer-address-email-gmail.png" alt="symbol-computer-address-email-gmail">
        <p class="text-green-500 text-lg">Thanks! your account has been created successfully.</p>
        <p class="text-gray-500 dark:text-gray-200">Please check your email to confirm your Signup!</p>
        <div class="pt-10">
          <button @click="goToSignin" class="uppercase bg-blue-400 rounded-xl py-2 px-8 text-white">Ok</button>
        </div>
      </div>
    </div>
  </div>     
</template>

<script>
//datos obtenidos desde pinia store
import { useUserStore } from '../store/user'    
export default {
    setup() {
    const user = useUserStore();
    return { user }
    },
    data(){
      return{
        userName: "",
        email: "",
      };
    },
    methods:{
      goToSignin(){
        this.$router.push("/auth/signin")
      },
      goToSingup(){
        this.$router.push("/auth/signup")
      },
    },
}
</script>
