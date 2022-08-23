<template>
    <section class="bg-white dark:bg-black max-w-2xl mx-auto text-gray-500 font-semibold p-5 md:p-10">
        <new-task />
        <div class="bg-white border shadow-md sm:p-8 text-gray-500 p-5">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold leading-none">ToDo List</h3>
            </div>
            <TaskItem />
        </div>
        <tasks-states />
    </section>
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