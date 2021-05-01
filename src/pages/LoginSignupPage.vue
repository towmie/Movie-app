<template>
  <div class="header">&nbsp;</div>
  <div class="bg">
    <base-form class="form">
      <div class="btn">
        <button @click="toggleToLogin" :class="{ activebtn: loginOpened }">
          Login
        </button>
        <button @click="toggleToSignUp" :class="{ activebtn: !loginOpened }">
          SignUp
        </button>
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
    toggleToLogin() {
      this.loginOpened = true;
    },
    toggleToSignUp() {
      this.loginOpened = false;
    },
  },
};
</script>

<style scoped>
.form {
  margin-top: 20%;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.btn button {
  cursor: pointer;
  margin: 0 10px;
  border: none;
  background-color: rgb(240, 239, 239);
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 16px;
}
.activebtn {
  color: #fff;
  background-color: #e71c60 !important;
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
