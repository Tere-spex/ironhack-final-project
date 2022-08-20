<template>
 <div class="flex justify-center bg-gray-100 rounded-t-lg p-8">
  <form @submit.prevent="" class="flex flex-row justify-between bg-white rounded-md py-5 w-full">
     <input class="outline-none px-5 text-lg" type="text" v-model="newTask" placeholder="Create a new list element...">
     <button class="px-5"><i class="fa-solid fa-circle-plus hover:text-blue-400 text-2xl"></i></button>
  </form>
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
    }
  },
  methods:{

  },
}
</script>