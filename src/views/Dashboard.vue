<template>
  <section class="flex flex-col h-[calc(100vh-65px)] justify-center items-center text-lg text-gray-500 font-semibold bg-white">
    <div class="max-w-2xl mx-auto text-gray-500 font-semibold">
        <div class="bg-gray-200 rounded-t-lg p-5">
            <ul class="flex gap-10">
                <li>
                    <div class="flex flex-row justify-center items-center  bg-blue-400 rounded-full px-4 py-2">
                        <span class="p-2">Tasks</span>
                        <span class="bg-white py-2 px-4 rounded-full text-xs">0</span>
                    </div>
                </li>
                 <li>
                    <div class="flex flex-row justify-center items-center  bg-blue-400 rounded-full px-4 py-2">
                        <span class="p-2">Tasks Done</span>
                        <span class="bg-white py-2 px-4 rounded-full text-xs">0</span>
                    </div>
                </li>
                <li>
                    <div class="flex flex-row justify-center items-center text-white bg-rose-400 rounded-full px-4 py-2">
                        <span class="p-2"><i class="fa-solid fa-trash"></i></span>
                        <span class="py-2 px-4">Tasks</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bg-white border shadow-md sm:p-8 text-gray-500 p-5">
            <div class="flex justify-between items-center mb-4">
                <h3 class="uppercase text-xl font-bold leading-none">lista de tareas</h3>
            </div>
            <div class="flow-root text-4xl">
                <ul role="list">
                  <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4 border rounded-lg p-4">
                             <div class="flex-shrink-0">
                                <button><i class="fa-solid fa-circle-check"></i></button>
                            </div>
                            <div class="flex-1 min-w-0">
                               <p class="text-xl font-medium">elemento de la lista</p>
                            </div>
                            <div class="inline-flex items-center font-semibold">
                                <ul class="flex gap-5 text-2xl">
                                    <li><button><i class="fa-solid fa-pen-to-square"></i></button></li>
                                    <li><button><i class="fa-solid fa-trash"></i></button></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4 border rounded-lg p-4">
                             <div class="flex-shrink-0">
                                <button><i class="fa-solid fa-circle-check"></i></button>
                            </div>
                            <div class="flex-1 min-w-0">
                               <p class="text-xl font-medium">elemento de la lista</p>
                            </div>
                            <div class="inline-flex items-center font-semibold">
                                <ul class="flex gap-5 text-2xl">
                                    <li><button><i class="fa-solid fa-pen-to-square"></i></button></li>
                                    <li><button><i class="fa-solid fa-trash"></i></button></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4 border rounded-lg p-4">
                             <div class="flex-shrink-0">
                                <button><i class="fa-solid fa-circle-check"></i></button>
                            </div>
                            <div class="flex-1 min-w-0">
                               <p class="text-xl font-medium">elemento de la lista</p>
                            </div>
                            <div class="inline-flex items-center font-semibold">
                                <ul class="flex gap-5 text-2xl">
                                    <li><button><i class="fa-solid fa-pen-to-square"></i></button></li>
                                    <li><button><i class="fa-solid fa-trash"></i></button></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bg-gray-200 rounded-b-lg p-5 text-2xl">
           <form class="flex justify-center" action="">
            <div class="bg-white rounded-full border-4 border-blue-400">
                <input class="rounded-full outline-none w-72 p-4" type="text">
                <button class="mx-2 p-5"><i class="fa-solid fa-circle-plus text-blue-400"></i></button>
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