<template>
  <div class="flex justify-start items-center gap-3">
    <div class="border-gray-400 border-2 p-1 rounded-full">
      <RouterLink :to="`/settings`">
        <img v-if="profiles.profiles" class="rounded-full w-16 h-16 md:w-20 md:h-20" :src="this.profiles.profiles.avatar_url" alt="avatar">
        <img v-else class="rounded-full w-16 h-16 md:w-20 md:h-20" src="https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg" alt="avatar">
      </RouterLink>
    </div>
    <div class="flex flex-col text-left">
      <div>
        <span v-if="profiles.profiles" class="font-bold text-xl dark:text-gray-300">{{this.profiles.profiles.username}}</span>
        <span v-else class="font-bold text-xl dark:text-gray-300">Username</span>
      </div>
      <span class="dark:text-gray-300 text-xs md:text-sm" v-if="email">{{ email }}</span>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "../store/user";
import { useProfileStore } from '../store/profile';
export default {
    setup() {
      const user = useUserStore();
      const profiles = useProfileStore();
      return { user, profiles};
    },
    data() {
      return {
        email: "",
      };
    },
    async mounted() {
      const session = JSON.parse(localStorage.getItem("supabase.auth.token"));
      this.email = session["currentSession"].user.email;
      //Si existe la sesion me muestra el profile
      if (session) {
        await this.profiles.fetchProfile();
      }
    },
}
</script>