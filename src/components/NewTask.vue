<template>
  <form @submit.prevent="submitTask" class="flex flex-row justify-between bg-white rounded-md py-5 w-ful border my-5">
     <input v-model="taskTitle" class="outline-none px-5 text-lg" type="text" placeholder="Create a new list item...">
     <button class="px-5"><i class="fa-solid fa-circle-plus hover:text-blue-400 text-2xl"></i></button>
  </form>
</template>

<script>
//datos obtenidos desde pinia store
import { useTaskStore } from '../store/task'
import { useUserStore } from '../store/user'
export default {
  setup(){
    const tasks = useTaskStore();
    const user = useUserStore();

    return { tasks, user }
  },
  data(){
    return {
        taskTitle: "",
    }
  },
  methods:{
    async submitTask(){
      // try{
        await this.tasks.createTask(this.taskTitle, this.user.user.id );
        // console.log(this.tasks);
      // }catch{
      //   console.log(error.message);
      // }
    }
  },
}
</script>