<template>
  <section class="flex flex-col h-screen justify-center items-center">
    <div class="max-w-2xl mx-auto text-gray-500 font-semibold">
        <div class="bg-gray-200 rounded-t-lg p-5">
            <ul class="flex gap-10">
                <li>
                    <div class="bg-blue-200 rounded-full p-2">
                        <span>Tasks</span>
                        <span  class="bg-white mx-2 p-2 rounded-full text-xs">3</span>
                    </div>
                </li>
                <li>
                    <div class="bg-blue-200 rounded-full p-2">
                        <span>Tasks Done</span>
                        <span  class="bg-white mx-2 p-2 rounded-full text-xs">3</span>
                    </div>
                </li>
                <li>
                    <button class="flex bg-rose-400 p-2 text-white gap-5">
                        <span><i class="fa-solid fa-trash"></i></span>
                        <span>Tasks</span>
                    </button>
                </li>
            </ul>
        </div>
        <div class="p-4 max-w-md bg-white border shadow-md sm:p-8 text-gray-500">
            <div class="flex justify-between items-center mb-4">
                <h3 class="uppercase text-xl font-bold leading-none">lista de tareas</h3>
            </div>
            <div class="flow-root">
                <ul role="list">
                  <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4 border rounded-lg p-4">
                             <div class="flex-shrink-0 text-2xl">
                                <i class="fa-solid fa-circle-check"></i>
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium">
                                    elemento de la lista
                                </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold">
                                <ul class="flex gap-5">
                                    <li><button><i class="fa-solid fa-pen-to-square"></i></button></li>
                                    <li><button><i class="fa-solid fa-trash"></i></button></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="py-3 sm:py-4 text-gray-500">
                        <div class="flex items-center space-x-4 border rounded-lg p-4">
                             <div class="flex-shrink-0 text-2xl">
                                <i class="fa-solid fa-circle-check"></i>
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium">
                                    elemento de la lista
                                </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold">
                                <ul class="flex gap-5">
                                    <li><button><i class="fa-solid fa-pen-to-square"></i></button></li>
                                    <li><button><i class="fa-solid fa-trash"></i></button></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="py-3 sm:py-4 text-gray-500">
                        <div class="flex items-center space-x-4 border rounded-lg p-4">
                             <div class="flex-shrink-0 text-2xl">
                                <i class="fa-solid fa-circle-check"></i>
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium">
                                    elemento de la lista
                                </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold">
                                <ul class="flex gap-5">
                                    <li><button><i class="fa-solid fa-pen-to-square"></i></button></li>
                                    <li><button><i class="fa-solid fa-trash"></i></button></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bg-gray-200 rounded-b-lg p-5">
           <form class="flex justify-center" action="">
            <div class="bg-white rounded-full border-4 border-blue-500">
                <input class="rounded-full" type="text">
                <button class="mx-2"><i class="fa-solid fa-circle-plus"></i></button>
            </div>
           </form>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>