<template>
  <div class="flex justify-between items-center hover:text-blue-400 dark:hover:text-blue-400 dark:text-gray-100 p-5n">
    <div class="flex justify-center items-center w-full">
       <button @click="changeTaskState(id)" class=" text-xl md:text-2xl">
         <i :class="`text-${!is_complete ?'gray-400' : 'green-600'} fa-solid fa-circle-check`"></i>
        </button>
       <input v-show="editable" type="text" class="px-2 mx-2 w-full" v-model="title" placeholder="Editar tarea">
       <label v-show="!editable" class="mx-2 px-2 w-full" @dblclick="editTask">{{title}}</label>
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