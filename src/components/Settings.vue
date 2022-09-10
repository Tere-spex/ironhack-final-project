<template>
   <div class="flex flex-col justify-center items-center min-h-[calc(100vh-136px)] md:h-[calc(100vh-168px)]">
    <h1 class="text-4xl text-gray-600 dark:text-gray-100 font-semibold">Manage Profile</h1>
    <div class="max-w-md md:mx-auto text-gray-500 p-4 m-4 md:p-8">
      <div class="flex justify-between md:justify-start md:gap-5 items-center p-5 border-b-2">
        <div>
          <RouterLink :to="`/settings`">
            <img class="rounded-full w-16 h-16 md:w-20 md:h-20" src="https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg" alt="avatar">
          </RouterLink>
        </div>
        <div>
          <span class="font-bold text-xl dark:text-gray-300">Username</span>
          <br />
          <span class="dark:text-gray-300">lorem@hotmail.com</span>
        </div>
      </div>
        <form @submit.prevent="createProfile" class="flow-root">
          <div class="py-3 sm:py-4 text-gray-500 dark:text-gray-200">
            <div class="flex gap-2 mb-1">
              <span><i class="fa-solid fa-user"></i></span>
              <label class="font-bold" for="">Username:</label>
            </div>
            <div class="flex items-center dark:bg-gray-800">
              <!-- <p v-if="!editable" class="mx-2 px-2 w-full">LoremIpsum</p> -->
              <input class="outline-none w-[300px] p-2 dark:text-gray-500 bg-gray-100 dark:bg-white" v-model="userName" placeholder="Lorem" type="text">
            </div>
          </div>
          <div class="py-3 sm:py-4 text-gray-500 dark:text-gray-200">
            <div class="flex gap-2 mb-1">
              <span><i class="fa-regular fa-image"></i></span>
              <label class="font-bold" for="">Avatar URL:</label>
            </div>
            <div class="flex items-center dark:bg-gray-800">
              <!-- <p v-if="!editable" class="mx-2 px-2 w-full">https://.................</p> -->
              <input class="outline-none w-[300px] p-2 dark:text-gray-500 bg-gray-100 dark:bg-white" v-model="avatar" placeholder="https://image.jpg" type="text">
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="bg-red-500 text-white px-4 py-2 rounded-lg m-5">Update</button>
          </div>
        </form>
    </div>
 </div>
</template>

<script>
import { useProfileStore } from '../store/profile.js';
import { useUserStore } from '../store/user';

export default {
  setup() {
    const profiles = useProfileStore();
    const user = useUserStore();
    return { profiles, user }
  },
  data(){
    return{
        userName: "",
        avatar: "", 
        
        errorSupabase: "",
        editable: false,
    }
  },
  methods:{
    async createProfile(){
      try{
        console.log("Hago lo mejor que puedo...");
        await this.profile.createProfile(this.userName, this.avatar, this.user.user.id );
        console.log(this.profiles);
      }catch{
        console.log('profile could not be processed');
      }
      this.username = "";
      this.avatar_url = "";
    }
  },
}
</script>