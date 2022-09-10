import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./user";

export const useProfileStore = defineStore("profiles", {
  state: () => ({
    profile: null,
  }),
  setup() {
    const user = useUserStore();
    return { user }
  },
  actions: {
    async fetchprofile() {
      console.log("obteniendo profile...");
      try {
        const { data, error, status } = await supabase
          .from('profiles')
          .select(`username, avatar_url`)
          .eq('id', user.id)
          .single()

        if (error && status !== 406) throw error

        if (data) {
          this.username = data.username
          this.avatar_url = data.avatar_url
        }
      } catch (error) {
        alert(error.message)
      } 
    },
    async createprofile(username, avatar_url, userid) {
      console.log("creating profile...");
      const { profile, error } = await supabase
      .from("profiles")
      .insert([{ username: username, avatar_url: avatar_url, user_id: userid }])
        if (error) {
          console.log('error', error);
        }
        this.fetchprofile();
    },
  }
});
