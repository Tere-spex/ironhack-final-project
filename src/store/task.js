// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  //GET (obtener las tareas)
  actions: {
    async fetchTasks() {
      const { data: tasks, error } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
      if (error) {
        console.log('error', error);
      }
    },
    // Hacer POST (crear la tarea)
    async createTask(taskTitle) {
        const { data: task, error } = await supabase
        .from('tasks')
        .insert({ title: taskTitle})
        .single();
        if (error) {
          console.log('error', error);
        }
    }
    
    // Hacer el PUT (edit)
    // Hacer el delete
    // Hacer el PUT (cambiar entre completada y pendiente)
  },
});
