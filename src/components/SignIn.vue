<template>
 <!-- h-[calc(100vh-200px)]  -->
 <div class="flex flex-col justify-center items-center min-h-[calc(100vh-168px)]">
    <div class="max-w-md md:mx-auto text-gray-500 font-semibold border shadow-md p-4 m-4 md:p-8">
        <div class="flex flex-col justify-between items-center">
            <img class="w-36" src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="User icon">
            <span class="p-2">LOGIN</span>
        </div>
        <form @submit.prevent="signIn" class="flow-root">
            <ul role="list">
                <li class="py-3 sm:py-4 text-gray-500">
                    <div class="flex items-center space-x-4 border rounded-lg p-2">
                        <i class="fa-solid fa-envelope"></i>
                        <input class="outline-none w-72" type="email" v-model="email" placeholder="E-mail">
                    </div>
                </li>
                <li class="py-3 sm:py-4 text-gray-500">
                         <div class="flex items-center space-x-4 border rounded-lg p-2">
                        <div class="space-x-4">
                            <i class="fa-solid fa-unlock"></i>
                            <input class="outline-none w-64 md:w-72" :type="visibility" v-model="password" min="6" placeholder="Password">
                        </div>
                        <div @click="showPassword" v-if="visibility === 'password'">
                            <i class="fa-solid fa-eye"></i>
                        </div>
                        <div @click="hidePassword" v-if="visibility === 'text'">
                            <i class="fa-solid fa-eye-slash"></i>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="text-gray-500">
                    <div class="py-3 sm:py-4">
                    <div class="flex justify-between space-x-16">
                        <div class="flex space-x-2">
                            <input type="checkbox">
                            <span>Remember me</span>
                        </div>
                        <span><RouterLink class="text-blue-300 font-normal" :to="`/`">Forgot password?</RouterLink></span>
                    </div>
                </div>
                <div class=" flex justify-center py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                        <div class="text-white w-full">
                            <button class="uppercase bg-blue-400 rounded-xl py-2 px-16">Login</button>
                        </div>
                    </div>
                </div>
                <div class=" flex justify-center py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                        <div>
                            <span>Not registered? <RouterLink class="text-blue-300 font-normal" :to="`/auth/signup`">Create an acount!</RouterLink></span>
                        </div>
                    </div>
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
    }
  },
  methods:{
    async signIn(){
        const res = await this.user.signIn(this.email, this.password);
        if (res.status === 200) {
            router.push("/")
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