<template>
  <div class="flex md:flex-col gap-5 border-2 p-5 bg-gray-50 md:text-lg">
   <div class="flex gap-5 border-b-2">
      <!-- <span class="bg-green-300 rounded-full w-20 h-20"></span> AVATAR ???????? -->
      <div>
        <span class="font-bold text-xl" v-if="email">{{userName}}</span>
        <br>
        <span v-if="email">{{email}}</span>
        <span v-else><RouterLink class="underline text-blue-700 font-normal" :to="`/auth/signup`">Create an acount!</RouterLink></span>
      </div>
   </div>      
   <div class="flex flex-col gap-5 border-b-2">
    <div class="flex flex-row justify-between items-center">
      <span class="font-normal"><i class="fa-regular fa-o text-blue-600 text-2xl"></i>  All</span>
      <div class="flex flex-row justify-center items-center bg-gray-200 rounded-full w-10 h-10">
        <span>{{}}</span>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center">
      <span class="font-normal"><i class="fa-regular fa-star text-yellow-400 text-2xl"></i>  Important</span>
      <div class="flex flex-row justify-center items-center bg-gray-200 rounded-full w-10 h-10">
        <span>{{}}</span>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center">
      <span class="font-normal"><i class="fa-regular fa-circle-check text-green-600 text-2xl"></i>  Complited</span>
      <div class="flex flex-row justify-center items-center bg-gray-200 rounded-full w-10 h-10">
        <span>{{}}</span>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center">
      <span class="font-normal"><i class="fa-regular fa-circle-xmark text-red-600 text-2xl"></i>  Canceled</span>
      <div class="flex flex-row justify-center items-center bg-gray-200 rounded-full w-10 h-10">
        <span>{{}}</span>
      </div>
    </div>
   </div>
  </div>
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