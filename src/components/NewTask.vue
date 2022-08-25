<template>
  <div class="flex justify-between items-center border-2 p-5 hover:text-blue-400">
    <form @submit.prevent="submitTask"  class="flex justify-left items-center w-full">
      <button class="text-blue-400"><i class="fa-solid fa-circle-plus text-2xl"></i></button>
      <input v-model="taskTitle" class="outline-none mx-2 px-2  w-full" type="text" placeholder="Add task">
       <!-- <input v-else class="mx-2 px-2 w-45" v-model="newTaskTitle" placeholder="Editar tarea" type="text"></input> -->
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