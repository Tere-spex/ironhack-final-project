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
          .select(`username, avatar_url`)
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
      // si no te gusta el otro comentario: plantear lógica de si el profile existe 
      // Puedes hacer un fetch aquí que si es positivo haga return y si falla que cree el usuario
      // try -> fetchprofile() y en el catch meter el insert
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

   
  },
});
