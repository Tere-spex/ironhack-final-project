<template>
  <div class="flex lg:hidden bg-gray-100">
    <button
      @click="showMenu = !showMenu" class="space-y-2 px-5 py-3 bg-gray-300 rounded-full ml-5 my-2">
      <i v-if="!showMenu" class="fa-solid fa-arrow-down"></i>
      <i v-else class="fa-solid fa-arrow-up"></i>
    </button>
  </div>
  <nav class="container flex md:justify-center sm:justify-endn px-2 bg-white">
    <!-- <ul :class="showMenu ? 'flex' : 'hidden'" class="absolute top-38 left-0 flex-col p-5 gap-5 border-r-2 w-56 h-full md:flex bg-white"> -->
    <!-- <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col fixed top-30 left-0 transition-all z-50 w-full p-5 gap-5 bg-white"> -->
    <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col p-5 gap-5 md:border-r-2 w-full md:flex font-normal">
      <li class="flex gap-5">
        <div>
          <span class="font-bold text-xl" v-if="email">{{ userName }}</span>
          <br />
          <span v-if="email">{{ email }}</span>
          <span v-else><RouterLink class="underline text-blue-700 font-normal" :to="`/auth/signin`">Let´s get you logged in!</RouterLink></span>
        </div>
      </li>
      <li class="flex flex-row justify-between items-center">
        <div class="flex flex-row justify-center items-center">
          <span class="pr-3"><i class="fa-solid fa-list text-blue-600 text-2xl"></i></span>
          <span>All</span>
        </div>
        <div class="flex flex-row justify-center items-center bg-gray-100 rounded-full w-10 h-10">
          <span v-if="tasks.tasks">{{ tasks.tasks.length }}</span>
        </div>
      </li>
      <li class="flex flex-row justify-between items-center">
        <div class="flex flex-row justify-center items-center">
          <span class="pr-3"><i class="fa-regular fa-circle-check text-green-600 text-2xl"></i></span>
          <span>Completed</span>
        </div>
        <div
          class="flex flex-row justify-center items-center bg-gray-100 rounded-full w-10 h-10">
          <span>{{ tasks.completedLength }}</span>
        </div>
      </li>
      <li class="flex flex-row justify-between items-center">
        <div class="flex flex-row justify-center items-center">
          <span class="pr-3"><i class="fa-regular fa-circle-xmark text-red-400 text-2xl"></i></span>
          <span>Uncompleted</span>
        </div>
        <div class="flex flex-row justify-center items-center bg-gray-100 rounded-full w-10 h-10">
          <span>{{ tasks.uncompletedLength }}</span>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
//datos obtenidos desde pinia store
import { useUserStore } from "../store/user";
import { useTaskStore } from "../store/task";
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
};
</script>
