<template>
    <div class="flex flex-col justify-center items-center min-h-[calc(100hv-36px)]">
       <div class="flex flex-col justify-center items-center gap-5 text-gray-500 border shadow-md p-4 m-4 md:p-8">
        <div class="flex w-full justify-end">
            <button class="flex flex-row justify-center items-center bg-gray-100 rounded-full w-10 h-10" @click="goToSingup">x</button>
        </div>
        <div class="flex flex-col justify-center items-center w-full gap-5">
          <img class="w-36" src="https://freepngimg.com/thumb/symbol/64685-box-icons-symbol-computer-address-email-gmail.png" alt="">
          <p class="text-green-500 font-semibold">Thanks! your account has been created successfully.</p>
          <p class="text-gray-200">Please check your email to confirm your Signup!</p>
          <button @click="goToSignin" class="uppercase bg-blue-400 rounded-full py-2 px-8 text-white">Ok</button>
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
