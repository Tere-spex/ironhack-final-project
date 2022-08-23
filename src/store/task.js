import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    //GET (obtener las tareas)
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      
        this.tasks = tasks;
      
        if (error) {
        console.log('error', error);
      }
    },
    //POST (crear la tarea)
    async createTask(taskTitle, userid) {
      const { tasks, error } = await supabase
      .from("tasks")
      .insert([{ title: taskTitle, is_complete: false, user_id: userid }])
        if (error) {
          console.log('error', error);
        }
        this.fetchTasks();
    },
    // Hacer el PUT (edit)
    async updateTask(taskid){
      const { tasks, error } = await supabase
      .from("tasks")
      .update({ title: taskTitle, })
      .match({ title: taskTitle, })
      if (error) {
        console.log('error', error);
      }
      this.fetchTasks();
    },
    // Hacer el delete
    async deleteTask(taskid){
      const { tasks, error } = await supabase
      .from("tasks")
      .delete()
      .match({ id: taskid })
      if (error) {
        console.log('error', error);
      }
      this.fetchTasks();
    },
    // Hacer el PUT (cambiar entre completada y pendiente)
  },
});
