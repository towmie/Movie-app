<template>
  <form @submit.prevent="signUp" class="box">
    <input
      type="text"
      placeholder="First Name"
      class="first"
      v-model.trim="firstName"
      required
    />
    <input
      type="text"
      placeholder="Last Name"
      class="last"
      v-model.trim="lastName"
      required
    />
    <input
      type="email"
      placeholder="E-mail"
      class="username"
      v-model.trim="email"
      required
    />
    <input
      type="password"
      placeholder="Password"
      class="username"
      v-model.trim="password"
      required
    />
    <textarea
      id=""
      placeholder="Description"
      v-model.trim="description"
    ></textarea>
    <button @submit.prevent="signUp" type="submit">Sign Up</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      description: "",
    };
  },
  methods: {
    async signUp() {
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        description: this.description,
        password: this.password,
      };

      await this.$store.dispatch("profile/createUser", newUser);
      await this.$store.dispatch("profile/addUserInfo", newUser);
      this.$router.replace("/");

      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.password = "";
      this.description = "";
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
}
input:focus {
  background-color: #fff;
}
.username {
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-radius: 10px;
}
.first {
  border-radius: 10px 0 0 10px;
}
.last {
  border-radius: 0 10px 10px 0;
}
button {
  display: block;
  border: none;
  background-color: #e71c60;
  color: #fff;
  font-size: 17px;
  padding: 10px 10px;
  width: 100%;
  border-radius: 10px;
}
textarea {
  outline: none;
  background-color: rgb(240, 239, 239);
  border: 1px solid rgb(240, 239, 239);
  padding: 10px 15px;
  font-family: inherit;
  font-size: 16px;
  margin-bottom: 10px;
  margin-right: 2px;
  border-radius: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  width: 100%;
}
textarea:focus {
  background-color: #fff;
}
</style>
