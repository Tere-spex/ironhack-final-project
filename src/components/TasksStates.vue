<template>
    <!-- <div class="bg-gray-100 rounded-b-lg p-8"> -->
        <ul class="flex flex-row justify-between bg-white rounded-md p-5 w-ful border my-5">
            <li>
              <div class="flex flex-col md:flex-row justify-center items-center hover:text-yellow-500">
                <button class="p-2 uppercase">Actives</button>
              </div>
            </li>
            <li>
              <div class="flex flex-col md:flex-row justify-center items-center hover:text-blue-500">
                <button class="p-2 uppercase">All</button>
              </div>
            </li>
            <li>
              <div class="flex flex-col md:flex-row justify-center items-center hover:text-green-500">
                <button class="p-2 uppercase">Complete</button>
              </div>
            </li>
        </ul>
    <!-- </div> -->
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