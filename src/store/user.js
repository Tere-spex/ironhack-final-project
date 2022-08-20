// /store/user.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    //Register
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
      // username: username,
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
      console.log(error);
    },

   //Login
    async signIn(email, password){
      // console.log(email, password)
      const { user, session, error } = await supabase.auth.signIn({
        email: email,//revisar
        password: password,//revisar
      })
    },
    //Logout
    async logOut(){
      const { error } = await supabase.auth.signOut()
    },
    persist: {
      enabled: true,
      strategies: [
        {
          key: "user",
          storage: localStorage,
        },
      ],
    },
  },
});
