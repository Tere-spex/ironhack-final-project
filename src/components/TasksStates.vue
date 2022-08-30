<template>
  <div class="flex lg:hidden bg-gray-100">
    <button
      @click="showMenu = !showMenu"
      class="space-y-2 px-5 py-3 bg-gray-300 rounded-full ml-5 my-2"
    >
      <!-- <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
      <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
      <span class="block w-8 h-0.5 bg-gray-600 animate-pulse"></span> -->
      <i v-if="!showMenu" class="fa-solid fa-arrow-down"></i>
      <i v-else class="fa-solid fa-arrow-up"></i>
    </button>
  </div>
  <nav class="container flex md:justify-center sm:justify-endn px-2 bg-white">
    <!-- <ul :class="showMenu ? 'flex' : 'hidden'" class="absolute top-38 left-0 flex-col p-5 gap-5 border-r-2 w-56 h-full md:flex bg-white"> -->
    <!-- <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col fixed top-30 left-0 transition-all z-50 w-full p-5 gap-5 bg-white"> -->
    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex-col p-5 gap-5 md:border-r-2 w-full md:flex font-normal"
    >
      <li class="flex gap-5">
        <!-- <span class="bg-green-300 rounded-full w-20 h-20"></span> AVATAR ???????? -->
        <div>
          <span class="font-bold text-xl" v-if="email">{{ userName }}</span>
          <br />
          <span v-if="email">{{ email }}</span>
          <span v-else
            ><RouterLink
              class="underline text-blue-700 font-normal"
              :to="`/auth/signup`"
              >Create an acount!</RouterLink
            ></span
          >
        </div>
      </li>
      <li class="flex flex-row justify-between items-center">
        <div class="flex flex-row justify-center items-center">
          <span class="pr-3"
            ><i class="fa-solid fa-list text-blue-600 text-2xl"></i
          ></span>
          <span>All</span>
        </div>
        <div
          class="flex flex-row justify-center items-center bg-gray-100 rounded-full w-10 h-10"
        >
          <span>{{ numberOfTasks }}</span>
        </div>
      </li>
      <li class="flex flex-row justify-between items-center">
        <div class="flex flex-row justify-center items-center">
          <span class="pr-3"
            ><i class="fa-regular fa-circle-check text-green-600 text-2xl"></i
          ></span>
          <span>Complited</span>
        </div>
        <div
          class="flex flex-row justify-center items-center bg-gray-100 rounded-full w-10 h-10"
        >
          <span>{{ tasks.completedLength }}</span>
        </div>
      </li>
      <li class="flex flex-row justify-between items-center">
        <div class="flex flex-row justify-center items-center">
          <span class="pr-3"
            ><i class="fa-regular fa-circle-xmark text-red-400 text-2xl"></i>
          </span>
          <span>Uncompleted</span>
        </div>
        <div
          class="flex flex-row justify-center items-center bg-gray-100 rounded-full w-10 h-10"
        >
          <span>{{ tasks.uncompletedLength }}</span>
        </div>
      </li>
      <!-- <li class="flex flex-row justify-between items-center">
        <div class="flex flex-row justify-center items-center">
          <span class="pr-3"><i class="fa-regular fa-star text-yellow-400 text-2xl"></i> </span>
          <span>Important</span>
        </div>
        <div class="flex flex-row justify-center items-center bg-gray-100 rounded-full w-10 h-10">
          <span>{{}}</span>
        </div>
      </li> -->
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
      numberOfTasks: null,
      completedTasks: 0,
      uncompletedTasks: 0,
      showMenu: false,
      taskList: null, //Lo estoy utilizando en el mounted
    };
  },
  methods: {
    // async getAllTasks(){
    //   const numberOfTasks = this.taskList;
    //   // console.log(numberOfTasks);
    //   return numberOfTasks.length;
    // },
    // getCompletedTasks(){
    //   const completedTasks = this.taskList.filter(task => task.is_complete === true)
    //   console.log(completedTasks);
    //   return completedTasks.length
    // },
    // getUncompletedTasks(){
    //   const uncompletedTasks = this.taskList.filter(task => task.is_complete === false)
    //   console.log(uncompletedTasks);
    //   return uncompletedTasks.length
    // },
  },
  async mounted() {
    const session = JSON.parse(localStorage.getItem("supabase.auth.token"));

    const email = session["currentSession"].user.email;
    this.userName = email.slice(0, email.indexOf("@"));
    this.email = email;

    await this.tasks.fetchTasks();
    this.taskList = this.tasks.tasks;

    this.numberOfTasks = this.taskList.length;
    this.completedTasks = this.tasks.completed.length;
    this.uncompletedTasks = this.tasks.uncompleted.length;

    // = this.tasks.completedTasks.length;

    // this.uncompletedTasks = this.getUncompletedTasks();

    // this.getAllTasks();
    // this.getCompletedTasks();
    // this.getUncompletedTasks()
  },
};
</script>
