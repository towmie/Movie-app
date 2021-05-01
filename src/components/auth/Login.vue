<template>
  <div class="bg">
    <base-form class="form">
      <form @submit.prevent="loginConfirm">
        <p>
          Please LogIn or
          <router-link class="signup" to="/signup"
            >create an account</router-link
          >
        </p>
        <input type="text" placeholder="E-mail" required v-model="email" />
        <input
          type="password"
          placeholder="Password"
          required
          v-model="password"
        />
        <p v-if="error" class="error">Check if info is correct</p>
        <button type="submit">Login</button>
      </form>
    </base-form>
  </div>
</template>

<script>
import BaseForm from "../UI/BaseForm.vue";
export default {
  components: { BaseForm },
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
        return (this.error = true);
      }
    },
  },
};
</script>

<style scoped>
p {
  text-align: center;
  margin-bottom: 20px;
}
.error {
  color: #e71c60;
}
.signup {
  color: #e71c60;
  text-decoration: underline;
}
.form {
  margin-top: 20%;
}
input {
  outline: none;
  background-color: rgb(240, 239, 239);
  border: 1px solid rgb(240, 239, 239);
  padding: 10px 15px;
  font-size: 16px;
  margin-bottom: 15px;
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
.bg {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
}
</style>
