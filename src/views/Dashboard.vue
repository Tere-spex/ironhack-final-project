<template>
    <section class="max-w-2xl mx-auto text-gray-500 font-semibold p-5 md:p-10">
        <div class="bg-gray-200 rounded-t-lg p-5">
            <ul class="flex justify-between">
                <li>
                    <div class="flex flex-col md:flex-row justify-center items-center">
                        <span class="p-2">Tasks</span>
                        <span class="bg-white py-2 px-4 rounded-full text-xs">0</span>
                    </div>
                </li>
                 <li>
                     <div class="flex flex-col md:flex-row justify-center items-center">
                        <span class="p-2">Done</span>
                        <span class="bg-white py-2 px-4 rounded-full text-xs">0</span>
                    </div>
                </li>
                <li>
                    <button type="submit" class="flex flex-col md:flex-row justify-center items-center">
                        <span class="p-2">Tasks</span>
                        <span class="bg-white py-2 px-4 rounded-full text-xs"><i class="fa-solid fa-trash"></i></span>
                    </button>
                </li>
            </ul>
        </div>
        <div class="bg-white border shadow-md sm:p-8 text-gray-500 p-5">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold leading-none">ToDo List</h3>
            </div>
            <div class="text-4xl">
                <ul role="list">
                    <li class="py-3 sm:py-4">
                        <div class="flex justify-between items-center border rounded-lg p-4 hover:bg-blue-100">
                            <div class="flex justify-center items-center gap-5">
                                <button><i class="fa-solid fa-circle-check"></i></button>
                                <p class="text-xl font-medium">list element</p>
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
                        <div class="flex justify-between items-center border rounded-lg p-4 hover:bg-blue-100">
                            <div class="flex justify-center items-center gap-5">
                                <button><i class="fa-solid fa-circle-check"></i></button>
                                <p class="text-xl font-medium">list element</p>
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
                        <div class="flex justify-between items-center border rounded-lg p-4 hover:bg-blue-100">
                            <div class="flex justify-center items-center gap-5">
                                <button><i class="fa-solid fa-circle-check"></i></button>
                                <p class="text-xl font-medium">list element</p>
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
                <input class="rounded-full outline-none w-48 md:w-72 p-4" type="text">
                <button class="mx-2 p-5"><i class="fa-solid fa-circle-plus text-blue-400"></i></button>
            </div>
           </form>
        </div>
    </section>
</template>

<script>
export default {

}
</script>