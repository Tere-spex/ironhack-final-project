<template>
  <div class="flex flex-col justify-center items-center h-[calc(100vh-136px)] md:h-[calc(100vh-168px)]">
    <h1 class="font-semibold text-4xl
     p-5">Manage Account</h1>
      <div class="border-2 bg-gray-400">
        <div class="flex flex-row items-center dark:bg-gray-800 gap-5 p-5">
          <div class="bg-green-300 rounded-full w-20 h-20"><RouterLink class="underline text-blue-700 font-normal" :to="`/settings`"></RouterLink></div>
          <div class="pr-16">
            <span class="font-bold text-xl dark:text-gray-300">Nombre usuario</span>
            <br />
            <span class="dark:text-gray-300">Email</span>
          </div>
          <div>
            <button class="bg-red-500 text-white px-4 py-2 rounded-lg">Send changes</button>
          </div>
        </div>
        <form action="" class="p-5 space-y-6 bg-gray-200">
          <div class="border-gray-400 border-b-2 flex flex-col">
          <label for="">Your Email</label>
          <!-- <span>email.............</span> -->
          <input class="" type="text" placeholder="Email">
          </div>
          <div class="border-gray-400 border-b-2 flex flex-col">
          <label for="">Your Password</label>
          <input class="" type="text" placeholder="User name">
          </div>
          <div class="border-gray-400 border-b-2 flex flex-col">
          <label for="">Image Url</label>
          <input class="" type="text" placeholder="Website">
          </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>