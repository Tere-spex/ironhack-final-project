import { defineStore } from "pinia";
import { supabase } from "../supabase";

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
          .from('profiles')
          .select(`username, avatar_url`)
          .eq('id', user.id)
          .single();

        this.profiles = profiles;

        if (error) throw error

        if (data) {
          console.log(data)
        }
      } catch (error) {
        alert(error.message)
      } 
    },
    //POST (crear el perfil)
    async createProfile(username, avatar_url, userid) {
      console.log("creating profile...");
      const { profiles, error } = await supabase
      .from("profiles")
      .insert([{ username: username, profilePhoto: avatar_url, user_id: userid }])
        if (error) {
          console.log('error', error);
        }
        // this.fetchProfile();
    },
  }
});
