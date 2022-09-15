<template>
  <header class="p-5 h-40 font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 dark:from-blue-900 dark:via-gray-400 dark:to-blue-300 text-gray-500">
    <div class="flex justify-between">
      <button @click="checkAuthentication" class="text-4xl font-bold text-blue-500">To-Do</button><!--Logo-->
      <DarkModeButton />
    </div>
    <Nav />
  </header>
</template>

<script>
import { useUserStore } from '../store/user'
import Nav from "../components/Nav.vue";
import router from '../router';
import DarkModeButton from './DarkModeButton.vue';

export default {
  setup() {
    const user = useUserStore();
    return { user }
  },
  components:{
    Nav,
    DarkModeButton
  },
  data(){ 
    return {
        light: true,
    }
  },
  methods:{
    async checkAuthentication(){
      try {
        await this.user.fetchUser(); //here we call fetch user
        if (!this.user.user) {
        //redirect them to logout if the user is not there
        router.push({ path: "/auth/signin" });
        } else {
        //continue to dashboard
          router.push({ path: "/" });
        }
      }catch (e) {
        console.log(e);
      }
    }
  },
}
</script>