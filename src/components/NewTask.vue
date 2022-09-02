<template>
  <div class="flex justify-between items-center px-5 md:p-0">
    <form @submit.prevent="submitTask"  class="flex justify-left items-center w-full border-b-2 py-5 md:p-5 mx-2">
      <button class="text-blue-400"><i class="fa-solid fa-circle-plus text-2xl"></i></button>
      <input v-model="taskTitle" class="outline-none mx-2 px-2  w-full" type="text" placeholder="Add task">
    </form>
  </div>
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
      try{
        await this.tasks.createTask(this.taskTitle, this.user.user.id );
        console.log(this.tasks);
      }catch{
        console.log(error.message);
      }
      this.taskTitle = "";
    }
  },
}
</script>