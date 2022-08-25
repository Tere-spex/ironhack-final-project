<template>
<!-- h-[calc(100vh-140px)] -->
  <div class="overflow-y-scroll px-5">
    <ul class="md:h-[calc(100vh-282px)]" v-if="tasks.tasks">
      <li v-for="task in tasks.tasks" :key="task.id" class="py-3 sm:py-4 border-b-2">
        <div class="flex justify-between items-center pb-2 hover:text-blue-400">
          <div class="flex justify-center items-center w-full">
            <button class="text-2xl"><i class="hover:text-green-400 fa-solid fa-circle-check"></i></button>
            <p v-if="!editable" class="font-medium px-2 mx-5 w-full">{{task.title}}</p>
            <input v-else class="mx-2 px-2 w-full" v-model="newTaskTitle" placeholder="Editar tarea" type="text">
          </div>
          <div class="flex gap-5 text-xl mx-2">
            <button @click="updateTask(task.id)" class="hover:text-green-400"><i class="fa-solid fa-pen-to-square"></i></button>
            <button @click="deleteTask(task.id)" class="hover:text-red-500"><i class="fa-solid fa-trash"></i></button>
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
      editable: false,
    }
  },
  methods:{
    // Eliminar tarea
    async deleteTask(id){
      await this.tasks.deleteTask(id)
    },
    // Actualizar tarea NO FUNCIONA 💩💩💩
    async updateTask(id){
      this.editable = true;
      await this.tasks.updateTask(this.taskTitle, this.newTaskTitle, id)
    },
  },
  //Solicito las tareas para que se rendericen al cargar la pagina del usuario
  async mounted(){  
    await this.tasks.fetchTasks();
    this.taskList = this.tasks.tasks;
  }
}
</script>