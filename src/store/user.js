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
      this.email = '';
    },
    //Register
    async signUp(email, password) {
      const { user, error } = await supabase.auth
      .signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
      this.email = email
      console.log(error);
    },
    //Login
    async signIn(email, password){
      // try {
        const { user, session, error } = await supabase.auth.signIn({
          email: email,
          password: password,
        })
        if(error) throw error;
        this.user = user;
        return {
          status: 200,
          message: 'Welcome'
        }
      // } catch(error){
      //   console.log(error)
      //   return error
      // }

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
