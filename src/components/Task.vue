<template>
  <div class="flex justify-between items-center pb-2 hover:text-blue-400">
    <div class="flex justify-center items-center w-full">
       <button @click="changeTaskState(id)" class="text-2xl"><i class="hover:text-green-400 fa-solid fa-circle-check"></i></button>
       <p v-if="!editable" class="font-medium px-2 mx-5 w-full">{{title}}</p>
       <input v-else class="mx-2 px-2 w-full" v-model="newTaskTitle" placeholder="Editar tarea" type="text">
    </div>
    <div class="flex gap-5 text-xl mx-2">
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
      taskList: null,
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
    // cambiar el estado de la tarea complete true or false ❓❓❓
    async changeTaskState(id){
        await this.tasks.changeTaskState(this.is_complete, id)
         if (!this.is_complete) {
            this.this.state.first = true;
        }
       console.log(this.is_complete)
       console.log(id)
    },
  },
  //Solicito las tareas para que se rendericen al cargar la pagina del usuario
  async mounted(){  
    await this.tasks.fetchTasks();
    this.taskList = this.tasks.tasks;
  }
}
</script>