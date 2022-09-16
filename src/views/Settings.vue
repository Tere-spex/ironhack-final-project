<template>
  <div class="flex flex-col justify-center items-center min-h-[calc(100vh-160px)] p-5">
    <div class="text-gray-500 border-2 shadow-md shadow-gray-300 dark:shadow-gray-700 p-5 w-full md:p-8 md:w-1/4 text-center">
    <h1 class="text-3xl text-gray-600 dark:text-gray-100 font-bold pb-5">Manage Profile</h1>
    <Avatar />
    <form @submit.prevent="createProfile" class="flow-root">
      <div class="py-3 sm:py-4 text-gray-500 dark:text-gray-200">
        <div class="flex gap-2 mb-1">
          <span><i class="fa-solid fa-user"></i></span>
          <label class="font-semibold" for="">Username:</label>
        </div>
        <div class="flex items-center dark:bg-gray-800">
          <!-- <p v-if="!editable" class="mx-2 px-2 w-full">LoremIpsum</p> -->
          <input class="outline-none w-full border rounded-lg p-2 dark:text-gray-500 bg-gray-100 dark:bg-white" v-model="userName" placeholder="Lorem" type="text">
        </div>
      </div>
      <div class="py-3 sm:py-4 text-gray-500 dark:text-gray-200">
        <div class="flex gap-2 mb-1">
          <span><i class="fa-regular fa-image"></i></span>
          <label class="font-semibold" for="">Avatar URL:</label>
        </div>
        <div class="flex items-center dark:bg-gray-800">
          <!-- <p v-if="!editable" class="mx-2 px-2 w-full">https://.................</p> -->
          <input class="outline-none w-full border rounded-lg p-2 dark:text-gray-500 bg-gray-100 dark:bg-white" v-model="avatar" placeholder="https://image.jpg" type="text">
        </div>
      </div>
      <div class="text-center pt-10 pb-5">
        <button type="submit" class="bg-blue-400 rounded-xl py-2 px-16 text-white font-semibold">Create Profile</button>
      </div>
    </form>
    </div>
  </div>
</template>

<script>
import { useProfileStore } from '../store/profile.js';
import { useUserStore } from '../store/user';
import Avatar from '../components/avatar.vue';
export default {
    setup() {
        const user = useUserStore();
        const profiles = useProfileStore();
        return { user, profiles };
    },
    data() {
        return {
            userName: "",
            avatar: "",
            errorSupabase: "",
            // editable: false,
        };
    },
    methods: {
        async createProfile() {
            // si no te gusta el otro comentario: plantear lógica de si el profile existe 
            // Puedes hacer un fetch aquí que si es positivo haga return y si falla que cree el usuario
            // try -> fetchprofile() y en el catch meter el insert
            if (this.profiles.profiles) {
                await this.profiles.fetchProfile(this.user.user.id);
                this.avatar = this.profiles.profiles.avatar_url;
                this.userName = this.profiles.profiles.username;
                console.log("ya existe");
            }
            else {
                try {
                    console.log("NO existe, lo voy a crear");
                    await this.profiles.createProfile(this.userName, this.avatar, this.user.user.id);
                    await this.profiles.fetchProfile(this.user.user.id);
                }
                catch (error) {
                    console.log("profile could not be processed");
                    console.log(error.message);
                }
            }
            this.userName = "";
            this.avatar = "";
        }
    },
    async mounted() {
        await this.profiles.fetchProfile(this.user.user.id);
    },
    components: { Avatar }
}
</script>