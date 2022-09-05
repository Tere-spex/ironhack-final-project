<template>
    <div class="flex flex-col justify-center items-center min-h-[calc(100vh-168px)]">
       <div class="flex flex-col justify-center items-center gap-16 text-gray-500 font-semibold border shadow-md p-4 m-4 md:p-8">
            <p class="text-blue-500">The account has been created successfully, check your email to confirm the email!</p>
            <div class="flex flex-col justify-center items-center text-white w-full">
                <button @click="goToSignin" class="uppercase bg-blue-400 rounded-xl py-2 px-16">Ok</button>
            </div>
       </div>
    </div>       
</template>

<script>
export default {
    methods:{
        goToSignin(){
            this.$router.push("/auth/signin")
        },
    },
}
</script>
