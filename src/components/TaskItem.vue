<template>
  <div class="overflow-y-scroll px-5 min-h-[calc(100vh-160px)] dark:bg-gray-800">
    <!-- <div class="flex flex-col justify-center items-center min-h-[calc(100vh-160px)] p-5"></div> -->
    <ul class="md:h-[calc(100vh-230px)]" v-if="tasks.tasks">
      <NewTask />
      <li v-for="task in tasks.uncompleted" :key="task.id" class="py-3 sm:py-4 border-b-2">
        <Task :id="task.id" 
        :title="task.title"
        :is_complete="task.is_complete"
        />
      </li>
      <div class="pt-2 text-gray-400" v-if="tasks.completed.length > 0">
        <span>Completed</span>
      </div>
      <li v-for="task in tasks.completed" :key="task.id" class="py-3 sm:py-4 border-b-2 line-through">
        <Task :id="task.id" 
        :title="task.title"
        :is_complete="task.is_complete"
        />
      </li>
    </ul>
  </div>
</template>

<script>
//datos obtenidos desde pinia store
import { useTaskStore } from '../store/task'
import Task from './Task.vue'
import NewTaskVue from './NewTask.vue';
import NewTask from './NewTask.vue';
export default {
    setup() {
      const tasks = useTaskStore();
      return { tasks };
    },
    //Solicito las tareas para que se rendericen al cargar la pagina del usuario
    //Si existe la sesion me muestra las tareas
    async mounted() {
      const session = JSON.parse(localStorage.getItem("supabase.auth.token"));
      if (session) {
        await this.tasks.fetchTasks(); 
      }
    },
    components: { Task, NewTask }
}
</script>