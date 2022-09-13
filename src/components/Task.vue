<template>
  <div class="flex justify-between items-center hover:text-black dark:hover:text-white dark:text-gray-300">
    <button @click="changeTaskState(id)" class=" text-xl md:text-2xl mr-2">
      <i :class="`text-${!is_complete ?'gray-300' : 'green-600'} fa-solid fa-circle-check hover:text-green-400`"></i>
    </button>
    <input v-show="editable" @keyup.enter="updateTask(id)" type="text" class="p-2 w-full dark:bg-gray-800 outline-0" v-model="title" placeholder="Editar tarea">
    <label v-show="!editable" class="p-2 w-full" @click="editTask">{{title}}</label>
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
    }
  },
  methods:{
    // Eliminar tarea
    async deleteTask(id){
      await this.tasks.deleteTask(id)
    },
    //Editar tarea, funcionan unicamente para cambiar es estado de editable
    editTask(){
       this.editable = true;
    },
    // Actualizar tarea 
    async updateTask(id){
        if(this.editable){
            await this.tasks.updateTask(this.title, id)
        }
        this.editable = false;
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