<template>
  <form @submit.prevent="createTask" class="flex flex-row justify-between bg-white rounded-md py-5 w-ful border my-5">
     <input v-model="taskTitle" class="outline-none px-5 text-lg" type="text" placeholder="Create a new list item...">
     <button class="px-5"><i class="fa-solid fa-circle-plus hover:text-blue-400 text-2xl"></i></button>
  </form>
</template>

<script>
//datos obtenidos desde pinia store
import { useTaskStore } from '../store/task'
export default {
  setup(){
    const tasks = useTaskStore();
    return { tasks }
  },
  data(){
    return {
        taskTitle: "",
    }
  },
  methods:{
    async createTask(){
      // try{
        await this.tasks.createTask(this.taskTitle);
        console.log(this.tasks);
      // }catch{
      //   console.log(error.message);
      // }
    }
  },
}
</script>