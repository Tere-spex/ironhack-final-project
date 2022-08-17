<template>
     <div class="flex flex-col h-[calc(100vh-65px)] justify-center items-center text-lg text-gray-500 font-semibold bg-purple-200">
        <div class="p-4 max-w-md bg-white border shadow-md sm:p-8 text-gray-500">
            <div class="flex flex-col justify-between items-center">
                <!-- <h3 class="uppercase text-xl font-bold leading-none">Sign In</h3> -->
                <img class="w-36" src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="User icon">
            </div>
            <form class="flow-root">
                <ul role="list">
                  <li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4 border rounded-lg p-2">
                            <i class="fa-solid fa-circle-user"></i>
                            <input class="outline-none w-72" type="text" placeholder="Username">
                        </div>
                    </li>
                    <li class="py-3 sm:py-4 text-gray-500">
                        <div class="flex items-center space-x-4 border rounded-lg p-2">
                            <div class="space-x-4">
                                <i class="fa-solid fa-unlock"></i>
                                <input class="outline-none w-72" type="password" min="6" placeholder="Password">
                            </div>
                           <div>
                             <i class="fa-solid fa-eye"></i>
                           </div>
                        </div>
                    </li>
                </ul>
                <div class="text-gray-500">
                     <div class="py-3 sm:py-4">
                        <div class="flex items-center space-x-16">
                            <div class="flex items-center space-x-2">
                                <input type="checkbox">
                                <span>Remember me</span>
                            </div>
                            <span><RouterLink class="text-blue-300 font-normal" :to="`/dashboard`">Forgot password?</RouterLink></span>
                        </div>
                    </div>
                    <div class=" flex justify-center py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div class="text-white w-full">
                                <button class="uppercase bg-blue-400 rounded-xl py-2 px-16">Login</button>
                            </div>
                        </div>
                    </div>
                    <div class=" flex justify-center py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            <div>
                               <span>Not registered? <RouterLink class="text-blue-300 font-normal" :to="`/dashboard`">Create an acount!</RouterLink></span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>