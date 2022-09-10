<template>
  <div class="md:border-r-2">
    <div class="flex justify-between md:justify-start md:gap-5 items-center bg-gray-100 dark:bg-gray-700 p-5">
      <div class="">
        <RouterLink :to="`/settings`">
          <img class="rounded-full w-16 h-16 md:w-20 md:h-20" src="https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg" alt="avatar">
        </RouterLink>
      </div>
      <div>
        <span class="font-bold text-xl dark:text-gray-300" v-if="email">{{ userName }}</span>
        <br />
        <span class="dark:text-gray-300" v-if="email">{{ email }}</span>
      </div>
      <!-- esconder mostrar estado tareas -->
      <button
        @click="showMenu = !showMenu" class="px-5 py-3 bg-gray-300 rounded-full lg:hidden w-fit">
        <i v-if="!showMenu" class="fa-solid fa-arrow-down"></i>
        <i v-else class="fa-solid fa-arrow-up"></i>
      </button>
    </div>
    <section>
      <nav class="dark:bg-gray-800 container flex md:justify-center sm:justify-end">
        <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col p-5 gap-5 w-full md:flex font-normal">
          <li class="flex flex-row justify-between items-center">
            <div class="flex flex-row justify-center items-center">
              <span class="pr-3"><i class="fa-solid fa-list text-blue-600 text-2xl"></i></span>
              <span class="dark:text-gray-300" >All</span>
            </div>
            <div class="flex flex-row justify-center items-center bg-gray-100 rounded-full w-10 h-10">
              <span v-if="tasks.tasks">{{ tasks.tasks.length }}</span>
            </div>
          </li>
          <li class="flex flex-row justify-between items-center">
            <div class="flex flex-row justify-center items-center">
              <span class="pr-3"><i class="fa-regular fa-circle-check text-green-600 text-2xl"></i></span>
              <span class="dark:text-gray-300" >Completed</span>
            </div>
            <div
              class="flex flex-row justify-center items-center bg-gray-100 rounded-full w-10 h-10">
              <span>{{ tasks.completedLength }}</span>
            </div>
          </li>
          <li class="flex flex-row justify-between items-center">
            <div class="flex flex-row justify-center items-center">
              <span class="pr-3"><i class="fa-regular fa-circle-xmark text-red-400 text-2xl"></i></span>
              <span class="dark:text-gray-300" >Uncompleted</span>
            </div>
            <div class="flex flex-row justify-center items-center bg-gray-100 rounded-full w-10 h-10">
              <span>{{ tasks.uncompletedLength }}</span>
            </div>
          </li>
        </ul>
      </nav>
    </section>
  </div>
</template>

<script>
//datos obtenidos desde pinia store
import { useUserStore } from "../store/user";
import { useTaskStore } from "../store/task";
import Settings from './Settings.vue';
import router from '../router/index';

export default {
    setup() {
        const tasks = useTaskStore();
        const user = useUserStore();
        return { user, tasks };
    },
    data() {
        return {
            newTask: "",
            userName: "",
            email: "",
            completedTasks: 0,
            uncompletedTasks: 0,
            showMenu: false,
            taskList: null, //Lo estoy utilizando en el mounted
        };
    },
    async mounted() {
        const session = JSON.parse(localStorage.getItem("supabase.auth.token"));
        const email = session["currentSession"].user.email;
        this.userName = email.slice(0, email.indexOf("@"));
        this.email = email;
        //Si existe la sesion me muestra las tareas
        if (session) {
            await this.tasks.fetchTasks();
            this.taskList = this.tasks.tasks;
        }
        this.completedTasks = this.tasks.completed.length;
        this.uncompletedTasks = this.tasks.uncompleted.length;
    },
    components: { Settings }
};
</script>
