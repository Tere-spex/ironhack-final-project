<template>
    <div class="max-w-2xl mx-auto text-gray-500 font-semibold p-5 md:p-10">
        <div class="p-4 max-w-md bg-white border shadow-md sm:p-8 text-gray-500">
            <div class="flex flex-col justify-between items-center">
                <img class="w-36" src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="User icon">
                <span class="p-2">CREATE YOUR ACCOUNT</span>
                <span>usuario:{{user}}</span>
            </div>
            <form @submit.prevent="signUp" class="flow-root">
                <ul role="list">
                    <!-- <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4 border rounded-lg p-2">
                            <i class="fa-solid fa-circle-user"></i>
                            <input class="outline-none w-72" type="text" v-model="username" placeholder="Username">
                        </div>
                    </li> -->
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
                                <input class="outline-none w-64 md:w-72" type="password" v-model="password" min="6" placeholder="Password">
                            </div>
                           <div>
                             <i class="fa-solid fa-eye"></i>
                           </div>
                        </div>
                    </li>
                    <li class="py-3 sm:py-4 text-gray-500">
                        <div class="flex items-center space-x-4 border rounded-lg p-2">
                            <div class="space-x-4">
                                <i class="fa-solid fa-unlock"></i>
                                <input class="outline-none w-64 md:w-72" type="password" v-model="repeatPassword" min="6" placeholder="Repeat Password">
                            </div>
                            <!-- v-model="user.password" -->
                           <div>
                             <i class="fa-solid fa-eye"></i>
                           </div>
                        </div>
                    </li>
                </ul>
                <div class="text-gray-500">
                        <div class="py-3 sm:py-4">
                        <div class="flex items-center space-x-16">
                            <div class="flex items-center space-x-2">
                                <input type="checkbox">
                                <span>I Read and Agree to Terms & Conditions</span>
                            </div>
                        </div>
                    </div>
                    <div class=" flex justify-center py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div class="text-white w-full">
                                <button class="uppercase bg-blue-400 rounded-xl py-2 px-16">Create account!</button>
                            </div>
                        </div>
                    </div>
                    <div class=" flex justify-center py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div>
                                <span>Already have an account? <RouterLink class="text-blue-300 font-normal" :to="`/`">Sing in!</RouterLink></span>
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
export default {
  setup() {
    const user = useUserStore();
    // const signUp = user.signUp();
    // const singIn = user.singIn();
    // const logOut = user.logOut();
    // return {user, signUp, singIn, logOut}
    return { user }
  },
  data(){
    return{
        email: "",
        password: "",
        repeatPassword: "",
    }
  },
  methods:{
    async signUp(){
        if(this.password === this.repeatPassword){
            try{
                // console.log(this.email, this.password);
                this.user.signUp(this.email, this.password)
            } catch(error){
                console.log(error.message);
            }
        }
    }
  }
}
</script>