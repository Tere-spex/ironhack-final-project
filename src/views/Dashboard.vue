<template>
    <div class="dark:bg-gray-800 h-100vh md:h-[calc(100vh-168px)] md:grid md:grid-cols-3 bg-white text-gray-500 font-semibold md:text-lg">
    <tasks-states />
    <div class="col-span-2">
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