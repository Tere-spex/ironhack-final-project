<template>
  <!-- <div class="md:grid md:grid-cols-2 bg-white dark:bg-black max-w-2xl mx-auto text-gray-500 font-semibold md:p-10"> -->
    <div class="md:grid md:grid-cols-3 bg-white text-gray-500 font-semibold md:text-lg h-[50vh]">
    <tasks-states />
    <div class="col-span-2">
      <!-- <div class="py-16 px-5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-semibold">
        <h1 class="text-2xl">To-Do List</h1>
      </div> -->
      <new-task />
      <TaskItem />
    </div>
  </div>
</template>

<script>
//componentes
import NewTask from '../components/NewTask.vue'
import TaskItem from '../components/TaskItem.vue';
import TasksStates from '../components/TasksStates.vue';
//pinia
import { useTaskStore } from '../store/task'
export default {
    components: {
    NewTask,
    TaskItem,
    TasksStates
},
setup(){
    const task = useTaskStore();
    return { task }
},
}
</script>NewTask