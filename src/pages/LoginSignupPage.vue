<template>
  <div class="header">&nbsp;</div>
  <div class="bg">
    <base-form class="form">
      <div class="btn">
        <button @click="toggleLogin">Login</button>
        <button @click="toggleLogin">SignUp</button>
      </div>
      <login v-if="loginOpened"></login>
      <sign-up v-else></sign-up>
    </base-form>
  </div>
</template>

<script>
import Login from "./../components/auth/Login";
import SignUp from "./../components/auth/SignUp";
export default {
  components: { Login, SignUp },
  data() {
    return {
      loginOpened: true,
    };
  },
  methods: {
    toggleLogin() {
      this.loginOpened = !this.loginOpened;
    },
  },
};
</script>

<style scoped>
.form {
  margin-top: 20%;
}
.bg {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
}
.header {
  display: block;
  padding: 15px;
  margin-top: 16px;
  padding-bottom: 26px;
  color: #353535;
  font-size: 18px;
  font-weight: 300;
}
</style>
