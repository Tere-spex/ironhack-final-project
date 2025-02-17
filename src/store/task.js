import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
    completed: null,
    completedLength: 0,
    uncompletedLength: 0,
    tasksLength: 0,
    uncompleted: null,
  }),
  actions: {
    //GET (obtener las tareas)
    async fetchTasks() {
      const { data: tasks, error } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      
        this.tasks = tasks;
        //Para separar las tareas según su estado
        this.completed = tasks.filter(task => task.is_complete === true)
        this.completedLength = this.completed.length;
        this.uncompleted = tasks.filter(task => task.is_complete === false)
        this.uncompletedLength = this.uncompleted.length;
        this.tasksLength = tasks.length;
      
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
    // Hacer el PUT / Actualizar tarea
    async updateTask( taskTitle, taskId){
      const { tasks, error } = await supabase
      .from("tasks")
      .update({ title: taskTitle })
      .match({ id: taskId})
      if (error) {
        console.log('error', error);
      }
      this.fetchTasks();
    },
    // Hacer el PUT (cambiar entre completada y pendiente)
    async changeTaskState( state, taskId){
      const { tasks, error } = await supabase
      .from("tasks")
      .update({ is_complete: state })
      .match({ id: taskId})
      if (error) {
        console.log('error', error);
      }
      this.fetchTasks();
    },
  },
});
