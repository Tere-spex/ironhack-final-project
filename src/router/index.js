import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Dashboard from "../views/Dashboard.vue";

export const routes = [
  {path: "/", name: "Dashboard", component: Dashboard},
  {path: "/auth", name: "auth", component: Auth},
];

// export const routes = [
//   {path: "/", name: "Dashboard", component: Dashboard},
//   {path: "/auth/id:", name: "auth", component: Auth, 
//   children:[
//     {path: "/signup", name: "signup", component: SignUp},
//     {path: "/signin", name: "signIn", component: SignIn},
//   ]},
// ];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
