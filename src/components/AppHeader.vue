<template>
    <header class="p-5 font-semibold bg-gray-200 text-gray-500">
      <div class="flex justify-between">
        <RouterLink class="text-xl font-bold" :to="`/`">To-Do List</RouterLink><!--Logo-->
        <form @submit.prevent="darkMode" for="large-toggle" class="inline-flex relative items-center cursor-pointer">
          <button v-if="!light"><i class="fa-solid fa-sun text-yellow-100 text-2xl"></i></button>
          <button v-else><i class="fa-solid fa-moon text-gray-600 text-2xl"></i></button>
        </form>
    </div>
    <div class="flex justify-end pt-16">
      <!-- <span  v-if="email">Hello, {{email}}!</span> -->
      <!-- <span v-else><RouterLink class="underline text-blue-700" :to="`/auth`">Create an acount!</RouterLink></span> -->
      <Nav />
    </div>
  </header>
</template>

<script>
import { useUserStore } from '../store/user'
import Nav from "../components/Nav.vue";
export default {
  setup() {
    const user = useUserStore();
    return { user }
  },
  components:{
    Nav,
  },
  data(){ 
    return {
        // email: '',
        light: true,
    }
  },
  methods:{
    darkMode(){
      if (this.light === true) {
        this.light = false;
      }else if (this.light === false) {
        this.light = true;
      }
    },
  },
  // mounted() {
  //   const session = JSON.parse(localStorage.getItem('supabase.auth.token'))
  //   const email = session['currentSession'].user.email
  //   this.email = email.slice(0, email.indexOf('@'))
  // }
}
</script>