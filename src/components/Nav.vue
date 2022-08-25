<template>
  <nav class="flex gap-2 justify-center uppercase font-bold text-gray-500">
    <RouterLink :to="`/auth/signin`">login</RouterLink> |
    <button @click="logOut">LOGOUT</button>
  </nav>
</template>

<script>
import { useUserStore } from '../store/user'
export default {
  setup() {
    const user = useUserStore();
    return { user }
  },
  methods:{
    async logOut(){
      try{
        await this.user.logOut(this.email, this.password)
          //Si se ha hecho el registro bien, que me lleve al componente login
          router.push("/auth/signup")
        }catch(error){
          console.log(error.message);
      }
    }
  }
}
</script>