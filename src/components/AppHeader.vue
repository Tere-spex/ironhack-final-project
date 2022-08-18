<template>
    <header class="flex flex-row justify-between items-center p-5 bg-gray-200">
        <div><img class="w-24" src="https://images.squarespace-cdn.com/content/v1/571fc0ea1d07c0fd6d72c167/1461887197044-7RHEUQBY7XNIQCWHZDUV/planning+icon.png" alt=""></div>
        <Nav />
        <label for="large-toggle" class="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" id="large-toggle" class="sr-only peer">
            <div class="w-14 h-7 bg-blue-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-blue-400 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gray-500"></div>
            <span class="ml-3 text-sm hidden md:block font-medium text-gray-900 dark:text-gray-300">Dark</span>
        </label>
        
    </header>
</template>

<script>
import Nav from "../components/Nav.vue";
export default {
    components:{
        Nav,
    }
}
</script>

<style>

</style>