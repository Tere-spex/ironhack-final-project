<template>
   <div class="flex flex-col justify-center items-center min-h-[calc(100vh-170px)] md:h-[calc(100vh-168px)]">
    <div class="max-w-md md:mx-auto text-gray-500 border shadow-md p-4 m-4 md:p-8">
        <div class="flex flex-row items-center font-semibold dark:bg-gray-700 bg-gray-100">
          <img class="rounded-full w-16 h-16 md:w-20 md:h-20 m-2" src="https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg" alt="">
          <div class="">
            <span class="text-xl dark:text-gray-300">Username</span>
            <br />
            <span class="dark:text-gray-300">lorem@hotmail.com</span>
          </div>
        </div>
        <form @submit.prevent="createprofile" class="flow-root">
          <div class="py-3 sm:py-4 text-gray-500 dark:text-gray-200">
            <div class="flex gap-2">
              <span><i class="fa-solid fa-user"></i></span>
              <label class="font-bold" for="">Username:</label>
            </div>
            <div @click="updateItem" class="flex items-center p-2 dark:bg-gray-800">
              <!-- <p v-if="!editable" class="mx-2 px-2 w-full">LoremIpsum</p> -->
              <input class="outline-none w-full mx-2 px-2" v-model="username" placeholder="Lorem" type="text">
            </div>
          </div>
          <div class="py-3 sm:py-4 text-gray-500 dark:text-gray-200">
            <div class="flex gap-2">
              <span><i class="fa-regular fa-image"></i></span>
              <label class="font-bold" for="">Avatar URL:</label>
            </div>
            <div class="flex items-center space-x-4 p-2 dark:bg-gray-800">
              <!-- <p v-if="!editable" class="mx-2 px-2 w-full">https://.................</p> -->
              <input class="outline-none w-full mx-2 px-2" v-model="avatar_url" placeholder="https://................." type="text">
            </div>
          </div>
          <div>
            <button type="submit" class="bg-red-500 text-white px-4 py-2 rounded-lg m-5">Update</button>
          </div>
        </form>
    </div>
 </div>
</template>

<script>
import { useProfileStore } from '../store/profile.js'
export default {
  setup() {
    const profile = useProfileStore();
    return { profile }
  },
  data(){
    return{
        username: "",
        avatar_url: "", 
        
        errorSupabase: "",
        editable: false,
    }
  },
  methods:{
    async createprofile(){
      console.log("Hago lo mejor que puedo...");
      try{
        await this.profile.createprofile(this.username, this.avatar_url, this.user.user.id );
        console.log(this.profile);
      }catch{
        console.log('profile could not be processed');
      }
    }
  },
}
</script>