<template>
    <section>
        <nav class="flex gap-5 justify-center p-5 uppercase font-bold text-gray-600">
            <RouterLink :to="`/`">Home</RouterLink> |
            <RouterLink v-if="!user" :to="`/auth`">Auth</RouterLink><span v-if="!user">|</span>
            <button @click="logOut">LOGOUT</button>
        </nav>
    </section>
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
            } catch(error){
                console.log(error.message);
            }
        }
    }
}
</script>