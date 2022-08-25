<template>
  <!-- <div class="flex gap-5 border-b-2">
      <span class="bg-green-300 rounded-full w-20 h-20"></span> AVATAR ????????
      <div>
        <span class="font-bold text-xl" v-if="email">{{userName}}</span>
        <br>
        <span v-if="email">{{email}}</span>
        <span v-else><RouterLink class="underline text-blue-700 font-normal" :to="`/auth/signup`">Create an acount!</RouterLink></span>
      </div>
   </div>        -->
  <div class="flex lg:hidden">
    <button @click="showMenu = !showMenu" class="space-y-2 p-5">
      <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
      <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
      <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
    </button>
  </div>
  <nav class="container flex md:justify-center sm:justify-end mx-auto bg-white">
    <!-- <ul :class="showMenu ? 'flex' : 'hidden'" class="absolute top-38 left-0 flex-col p-5 gap-5 border-r-2 w-56 h-full md:flex bg-white"> -->
    <!-- <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col fixed top-30 left-0 transition-all z-50 w-full p-5 gap-5 bg-white"> -->
    <ul :class="showMenu ? 'flex' : 'hidden'" class=" flex-col p-5 gap-5 border-r-2 w-full md:flex">
      <li class="flex flex-row justify-between items-center">
        <span class="font-normal"><i class="fa-regular fa-o text-blue-600 text-2xl"></i>  All</span>
        <div class="flex flex-row justify-center items-center bg-gray-100 rounded-full w-10 h-10">
          <span>{{}}</span>
        </div>
      </li>
      <li class="flex flex-row justify-between items-center">
        <span class="font-normal"><i class="fa-regular fa-star text-yellow-400 text-2xl"></i>  Important</span>
        <div class="flex flex-row justify-center items-center bg-gray-100 rounded-full w-10 h-10">
          <span>{{}}</span>
        </div>
      </li>
      <li class="flex flex-row justify-between items-center">
        <span class="font-normal"><i class="fa-regular fa-circle-check text-green-600 text-2xl"></i>  Complited</span>
        <div class="flex flex-row justify-center items-center bg-gray-100 rounded-full w-10 h-10">
          <span>{{}}</span>
        </div>
      </li>
      <li class="flex flex-row justify-between items-center">
        <span class="font-normal"><i class="fa-regular fa-circle-xmark text-red-600 text-2xl"></i>  Canceled</span>
        <div class="flex flex-row justify-center items-center bg-gray-100 rounded-full w-10 h-10">
          <span>{{}}</span>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
//datos obtenidos desde pinia store
import { useUserStore } from '../store/user'
import { useTaskStore } from '../store/task'
export default {
  setup(){
    const tasks = useTaskStore();
    const user = useUserStore();
    return { user, tasks }
  },
  data(){
    return {
      newTask: "",
      userName: "",
      email: '',
      showMenu: false,
    }
  },
  methods:{

  },
  mounted() {
    const session = JSON.parse(localStorage.getItem('supabase.auth.token'))
    const email = session['currentSession'].user.email
    this.userName = email.slice(0, email.indexOf('@'))
    this.email = email
  }
}
</script>