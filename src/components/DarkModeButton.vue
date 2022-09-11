<template>
  <div class="flex justify-end">
    <button @click="darkMode"><i class="fa-solid fa-moon text-gray-500 text-2xl"></i></button>
  </div>
</template>

<script>
export default {
  methods:{
    darkMode(){
      document.documentElement.classList.toggle('dark')
    }
  }
}
</script>