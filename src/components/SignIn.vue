<template>
 <div class="flex flex-col justify-center items-center min-h-[calc(100vh-160px)] p-5">
  <div class="text-gray-500 border-2 shadow-md shadow-gray-300 dark:shadow-gray-700 p-5 w-full md:px-8 md:w-1/4">
    <div class="flex flex-col justify-between items-center">
        <img class="w-36" src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="User icon">
        <span class="p-2 dark:text-gray-200 font-semibold">LOGIN</span>
    </div>
    <form @submit.prevent="signIn" class="flow-root">
      <ul role="list">
        <li class="py-3 sm:py-4 text-gray-500 ">
          <div class="flex items-center space-x-4 border rounded-lg p-2 dark:bg-white">
            <i class="fa-solid fa-envelope"></i>
            <input class="outline-0 w-full" type="email" v-model="email" placeholder="E-mail">
          </div>
        </li>
        <li class="py-3 sm:py-4 text-gray-500">
          <div class="flex items-center space-x-4 border rounded-lg p-2 dark:bg-white">
            <i class="fa-solid fa-unlock"></i>
            <input class="outline-0 w-full" :type="visibility" v-model="password" min="6" placeholder="Password">
            <button @click="showPassword" v-if="visibility === 'password'"><i class="fa-solid fa-eye"></i></button>
            <button @click="hidePassword" v-if="visibility === 'text'"><i class="fa-solid fa-eye-slash"></i></button>
          </div>
        </li>
      </ul>
      <div class="text-gray-500">
        <div class="flex justify-between py-5">
          <div class="flex gap-2">
            <input type="checkbox">
            <label class="dark:text-gray-300">Remember me</label><!--falta funcionalidad-->
          </div>
          <p class="text-blue-400 ">Forgot password?</p><!--falta funcionalidad-->
        </div>
        <!-- mostrar cuando salte un error o el registro sea correcto-->
        <div v-if="errorSupabase" class="flex flex-col items-center space-x-4 text-center">
          <span class="text-red-400 font-bold">{{ errorSupabase }}!</span>
        </div>
        <div class="flex justify-center text-white w-full p-5">
          <button class="bg-blue-400 rounded-xl py-2 px-8 font-semibold">Login</button>
        </div>
        <div class="flex justify-center p-5">
          <span class="dark:text-gray-300">Not registered? <RouterLink class="text-blue-400" :to="`/auth/signup`">Create an acount!</RouterLink></span>
        </div>
      </div>
    </form>
    </div>
 </div>
</template>

<script>
//datos obtenidos desde pinia store
import { useUserStore } from '../store/user'
import router from '../router';
export default {
  setup() {
    const user = useUserStore();
    return { user }
  },
  data(){
    return{
      email: "",
      password: "",
      visibility: "password",
      errorSupabase: "",
    }
  },
  methods:{
    async signIn(){
      try{
        const res = await this.user.signIn(this.email, this.password);
        if( this.email.length !== 0 & this.password.length !== 0){
          if (res.status === 200) {
            console.log(res.status); 
            router.push("/")
          }
        }
        }catch(error){
          console.log(`${error.message} error n: ${error.status}`);
          if (error.message === "You must provide either an email, phone number, a third-party provider or OpenID Connect.") this.errorSupabase = "You must provide email and password";
          else if (this.email.length === 0) this.errorSupabase = "You must provide an email";
          else if (this.password.length === 0) this.errorSupabase = "You must provide a password";
          else{
            router.push("/")
          }
        }
        this.email = "";
        this.password = "";
    },
    
    showPassword(){
      this.visibility = 'text';
    },
    hidePassword(){
      this.visibility = 'password'
    },
  },
}
</script>