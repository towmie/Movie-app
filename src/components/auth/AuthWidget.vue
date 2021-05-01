<template>
  <div class="wrapper">
    <div v-if="!isLoggedIn" class="auth">
      <router-link to="/login" class="login">Login</router-link>
      <router-link to="/signup" class="signup">Sign Up</router-link>
    </div>
    <router-link v-else to="/" @click="logout" class="logout"
      >Log Out</router-link
    >
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters["profile/getIsLoggedin"];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("profile/logout");
    },
  },
};
</script>

<style scoped>
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  display: inline-block;
  margin: 5px;
  font-size: 16px;
  font-size: 17px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid #e71c60;
  transition: all 0.3s;
  color: #353535;
}

a:hover {
  cursor: pointer;
  background-color: #e71c60;
  color: #fff;
}

.wrapper {
  display: flex;
  justify-content: center;
}
.logout {
  padding: 10px 25px;
}
</style>
