<template>
    <header class="p-5 font-semibold bg-gradient-to-r from-pink-300 via-purple-400 to-blue-300 text-gray-500">
      <div class="flex justify-between">
        <button @click="checkAuthentication" class="text-4xl font-bold text-blue-500">To-Do</button><!--Logo-->
        <form @submit.prevent="darkMode" for="large-toggle" class="inline-flex relative items-center cursor-pointer">
          <button v-if="!light"><i class="fa-solid fa-sun text-yellow-100 text-2xl"></i></button>
          <button v-else><i class="fa-solid fa-moon text-gray-600 text-2xl"></i></button>
        </form>
    </div>
    <Nav />
  </header>
</template>

<script>
import { useUserStore } from '../store/user'
import Nav from "../components/Nav.vue";
import router from '../router';
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
    async checkAuthentication(){
      try {
      await this.user.fetchUser(); // here we call fetch user
      if (!this.user.user) {
      // redirect them to logout if the user is not there
      router.push({ path: "/auth/signin" });
      } else {
      // continue to dashboard
        router.push({ path: "/" });
      }
      } catch (e) {
        console.log(e);
      }
      }
    },
}
</script>