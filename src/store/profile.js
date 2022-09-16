import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "../store/user";

export const useProfileStore = defineStore("profiles", {
  state: () => ({
    profiles: null,
  }),
  //GET (obtener los perfiles)
  actions: {
    async fetchProfile() {
      console.log("obteniendo profile...");
      try {
        const { data: profiles, error } = await supabase
          .from("profiles")
          .select(`username, avatar_url, user_id`)
          .eq("user_id", useUserStore().user.id)
          .single();

          this.profiles = profiles;
          if (error) throw error;
          
      }catch (error) {
        console.error(error.message);
      }
    },
    //POST (crear el perfil)
    async createProfile(username, avatar_url, userid) {
      console.log("creating profile...", userid);
      const { profiles, error } = await supabase
        .from("profiles")
        .insert([
          { username: username, avatar_url: avatar_url, user_id: userid },
        ]);
      if (error) {
        console.log("error", error.message);
      }
    },
    //WORK IN PROGRESS
    // Hacer el PUT / Actualizar el perfil
    // async updateProfile( username, avatar_url, userid){
    //   const { profiles, error } = await supabase
    //   .from("profiles")
    //   .update({ username: username, avatar_url: avatar_url })
    //   .match({ id: userid})
    //   if (error) {
    //     console.log('error', error);
    //   }
    //   this.fetchProfile();
    // },
  },
});
