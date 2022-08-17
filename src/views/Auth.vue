<template>
  <SignUp />
  <SignIn />
</template>

<script>
import SignUp from '../components/SignUp.vue';
import SignIn from '../components/SignIn.vue';


export default {
    name: "Auth",
    components:{
        SignUp,
        SignIn,
    }

}
</script>