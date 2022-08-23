<template>
    <header class="flex flex-row justify-between items-center p-5 bg-gray-100">
        <div><img class="w-24" src="https://images.squarespace-cdn.com/content/v1/571fc0ea1d07c0fd6d72c167/1461887197044-7RHEUQBY7XNIQCWHZDUV/planning+icon.png" alt=""></div>
        <Nav />
        <label for="large-toggle" class="inline-flex relative items-center cursor-pointer">
          <span v-if="light"><i class="fa-solid fa-sun"></i></span>
          <span v-else><i class="fa-solid fa-moon"></i></span>
         
        </label>
    </header>
    <div class="p-5 bg-slate-200 text-blue-400 font-semibold">
        <span  v-if="email">Hello, {{email}}!</span>
        <span v-else><RouterLink class="underline" :to="`/auth`">Create an acount!</RouterLink></span>
    </div>
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
        email: '',
        light: false,
    }
  },
  mounted() {
    const session = JSON.parse(localStorage.getItem('supabase.auth.token'))
    const email = session['currentSession'].user.email
    this.email = email.slice(0, email.indexOf('@'))
  }
  
}
</script>