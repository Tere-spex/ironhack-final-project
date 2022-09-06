<template>
  <div>
    <SignUp />
    <SignIn />
    <SignUpVerification />
  </div>
</template>

<script>
import SignUp from '../components/SignUp.vue';
import SignIn from '../components/SignIn.vue';
import SignUpVerification from '../components/SignUpVerification.vue';

export default {
  name: "Auth",
  components:{
    SignUp,
    SignIn,
    SignUpVerification
  }
}
</script>