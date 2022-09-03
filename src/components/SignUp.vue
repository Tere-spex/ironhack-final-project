<template>
  <div class="flex flex-col justify-center items-center min-h-[calc(100vh-168px)]">
    <div class="max-w-md md:mx-auto text-gray-500 font-semibold border shadow-md p-4 m-4 md:p-8">
        <div class="flex flex-col justify-between items-center">
            <img class="w-36" src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="User icon">
            <span class="p-2">CREATE YOUR ACCOUNT</span>
        </div>
        <form @submit.prevent="signUp" class="flow-root">
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
                            <input class="outline-none w-64 md:w-72" :type="passwordVisibility" v-model="password" min="6" placeholder="Password">
                        </div>
                        <div @click="showPassword" v-if="passwordVisibility === 'password'">
                            <i class="fa-solid fa-eye"></i>
                        </div>
                        <div @click="hidePassword" v-if="passwordVisibility === 'text'">
                            <i class="fa-solid fa-eye-slash"></i>
                        </div>
                    </div>
                </li>
                <li class="py-3 sm:py-4 text-gray-500">
                    <div class="flex items-center space-x-4 border rounded-lg p-2">
                        <div class="space-x-4">
                            <i class="fa-solid fa-unlock"></i>
                            <input class="outline-none w-64 md:w-72" :type="confPasswordVisibility" v-model="repeatPassword" min="6" placeholder="Repeat Password">
                        </div>
                        <div @click="showConfPassword" v-if="confPasswordVisibility === 'password'">
                            <i class="fa-solid fa-eye"></i>
                        </div>
                        <div @click="hideConfPassword" v-if="confPasswordVisibility === 'text'">
                            <i class="fa-solid fa-eye-slash"></i>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="text-gray-500">
                <div class="py-3 sm:py-4">
                  <div class="flex items-center space-x-16">
                    <div class="flex items-center space-x-2">
                      <input type="checkbox" required>
                      <span>I Read and Agree to Terms & Conditions</span>
                    </div>
                  </div>
                </div>
                <!-- mostrar cuando salte un error o el registro sea correcto-->
                <div class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4 text-center">
                    <span v-if="errorSupabase" :class="`text-${is_errorOk ?'green-600' : 'red-400'}`">{{ errorSupabase }}</span>
                    <!-- <span v-if="errorSupabase === `Cannot read properties of undefined (reading \'email\')`">The account has been created successfully, check your email to confirm the email!</span> -->
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
                            <span>Already have an account? <RouterLink class="text-blue-300 font-normal" :to="`/auth/signin`">Sing in!</RouterLink></span>
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
    return { user }
  },
  data(){
    return{
        email: "",
        password: "",
        errorSupabase: "",
        repeatPassword: "",
        passwordVisibility: "password",
        confPasswordVisibility: "password",
        is_errorOk: "",
    }
  },
  methods:{
    async signUp(){
        if(this.password === this.repeatPassword){
            try{
                await this.user.signUp(this.email, this.password)
                alert("todo ok");
                 this.$router.push("/auth/signin")
                 console.log('´Deberiamos pasar por aqui');
                //  this.errorSupabase = "todo ok"
                } catch(error){
                    console.log(`Error ${error.status}: ${error.message}`);
                    switch(error.status) {
                        case 500:
                            this.errorSupabase = "Interval server error something went wrong!"
                        break;
                        case 422:
                            this.errorSupabase = "Invalid password length try something large"
                        break;
                        default:
                            this.errorSupabase = "Unkown error please try again"
                    }
            }
            this.email = "";
            this.password = "";
            this.repeatPassword = "";
        }
    },
    showPassword(){
        this.passwordVisibility = 'text';
    },
    hidePassword(){
        this.passwordVisibility = 'password'
    },
    showConfPassword(){
        this.confPasswordVisibility = 'text';
    },
    hideConfPassword(){
        this.confPasswordVisibility = 'password'
    },
  }
}
</script>