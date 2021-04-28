<template>
  <form @submit.prevent="loginConfirm">
    <input type="text" placeholder="E-mail" required v-model="email" />
    <input type="password" placeholder="Password" required v-model="password" />
    <button type="submit">Login</button>
    <p v-if="error">Error</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  methods: {
    async loginConfirm() {
      try {
        await this.$store.dispatch("profile/login", {
          email: this.email,
          password: this.password,
        });
        this.$router.replace("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
input {
  outline: none;
  background-color: rgb(240, 239, 239);
  border: 1px solid rgb(240, 239, 239);
  padding: 10px 15px;
  font-size: 16px;
  margin-bottom: 10px;
  margin-right: 2px;
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-radius: 10px;
}
input:focus {
  background-color: #fff;
}
button {
  display: block;
  cursor: pointer;
  border: none;
  background-color: #e71c60;
  color: #fff;
  font-size: 17px;
  padding: 10px 10px;
  width: 100%;
  border-radius: 10px;
}
</style>
