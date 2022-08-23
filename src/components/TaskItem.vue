<template>
    <div class="textlg">
        <ul v-if="tasks.tasks">
            <!-- <li v-for="task in tasks.tasks" :key="task.id" class="py-3 sm:py-4"> -->
            <li v-for="task in tasks.tasks" :key="task.id" class="py-3 sm:py-4">
                <div class="flex justify-between items-center border rounded-lg p-4 hover:text-blue-400">
                    <div class="flex justify-center items-center">
                        <button class="text-2xl"><i class="hover:text-green-400 fa-solid fa-circle-check"></i></button>
                        <p v-if="!editableTask" class="capitalize font-medium px-5">{{task.title}}</p>
                        <input v-else class="px-5 w-45" v-model="task.title" placeholder="task" type="text">
                    </div>
                    <div class="flex gap-5 text-xl">
                        <span><button @click="updateTask(task.id)" class="hover:text-green-400"><i class="fa-solid fa-pen-to-square"></i></button></span>
                        <span><button @click="deleteTask(task.id)" class="hover:text-red-500"><i class="fa-solid fa-trash"></i></button></span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
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
      taskList: null,
      taskTitle: "",//creo que no se esta utilizando
      editableTask: false,
    }
  },
  methods:{
    async deleteTask(id){
         await this.tasks.deleteTask(id)
    },
    async updateTask(id){
      this.editableTask = true,
      await this.tasks.updateTask(id);
    },
  },
   async mounted(){  
        await this.tasks.fetchTasks();
        this.taskList = this.tasks.tasks;
  }
}
</script>