<template>
    <header class="p-5 font-semibold bg-gradient-to-r from-pink-300 via-purple-400 to-blue-300 text-gray-500">
      <div class="flex justify-between">
        <RouterLink class="text-4xl font-bold text-blue-500" :to="`/`">To-Do</RouterLink><!--Logo-->
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
  },
}
</script>