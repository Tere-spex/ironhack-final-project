<template>
  <div class="flex justify-between items-center hover:text-blue-400 dark:hover:text-blue-400 dark:text-gray-100 p-5">
    <div class="flex justify-center items-center w-full">
       <button @click="changeTaskState(id)" class=" text-xl md:text-2xl">
         <i :class="`text-${!is_complete ?'gray-400' : 'green-600'} fa-solid fa-circle-check`"></i>
        </button>
       <p v-if="!editable" class="mx-2 px-2 w-full">{{title}}</p>
       <input v-else class="mx-2 px-2 w-full" v-model="newTaskTitle" placeholder="Editar tarea" type="text">
    </div>
    <div class="flex gap-2 md:gap-5 md:text-xl md:mx-2">
       <button @click="updateTask(id)" class="hover:text-green-400"><i class="fa-solid fa-pen-to-square"></i></button>
       <button @click="deleteTask(id)" class="hover:text-red-500"><i class="fa-solid fa-trash"></i></button>
    </div>
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
  props:{
    id: "",
    title: "",
    is_complete: "",
  },
  data(){
    return {
      taskList: null, //Lo estoy utilizando en el mounted
      editable: false,
      newTaskTitle: "",
    }
  },
  methods:{
    // Eliminar tarea
    async deleteTask(id){
      await this.tasks.deleteTask(id)
    },
    // Actualizar tarea 
    async updateTask(id){
        if(this.editable){
            await this.tasks.updateTask(this.newTaskTitle, id)
            this.editable = false;
        }else{
            this.editable = true;
        }
    },
    // Hacer el PUT (cambiar entre completada y pendiente)
    async changeTaskState(id){
      if (this.is_complete === false) {
        await this.tasks.changeTaskState(true, id)
      }else{
        await this.tasks.changeTaskState(false, id)
      }
    },
  },
  //Solicito las tareas para que se rendericen al cargar la pagina del usuario
  async mounted(){  
    await this.tasks.fetchTasks();
    this.taskList = this.tasks.tasks;
  }
}
</script>