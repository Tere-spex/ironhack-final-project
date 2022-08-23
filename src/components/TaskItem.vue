<template>
    <div class="textlg">
        <ul v-if="tasks.tasks">
            <!-- <li v-for="task in tasks.tasks" :key="task.id" class="py-3 sm:py-4"> -->
            <li v-for="task in tasks.tasks" :key="task.id" class="py-3 sm:py-4">
                <div class="flex justify-between items-center border rounded-lg p-4 hover:text-blue-400">
                    <div class="flex justify-center items-center gap-5">
                        <button class="text-2xl"><i class="hover:text-green-400 fa-solid fa-circle-check"></i></button>
                        <p  class="capitalize font-medium">{{task.title}}</p>
                    </div>
                    <div class="inline-flex items-center font-semibold">
                        <ul class="flex gap-5 text-xl">
                            <li><button class="hover:text-green-400"><i class="fa-solid fa-pen-to-square"></i></button></li>
                            <li><button @click="deleteTask(task.id)" class="hover:text-red-500"><i class="fa-solid fa-trash"></i></button></li>
                        </ul>
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
        newTask: "",
        taskList: null,
    }
  },
  methods:{
    async deleteTask(id){
         await this.tasks.deleteTask(id)
    },
  },
   async mounted(){  
        await this.tasks.fetchTasks();
        this.taskList = this.tasks.tasks;
  }
}
</script>