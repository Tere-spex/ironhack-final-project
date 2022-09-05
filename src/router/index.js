import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Dashboard from "../views/Dashboard.vue";
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';
import SignUpVerification from '../components/SignUpVerification.vue';

export const routes = [
  {path: "/", name: "Dashboard", component: Dashboard},
  {path: "/auth", name: "auth", component: Auth},
  {path: "/auth/signin", name: "signin", component: SignIn},
  {path: "/auth/signup", name: "signup", component: SignUp},
  {path: "/auth/signupverification", name: "signupverification", component: SignUpVerification},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
