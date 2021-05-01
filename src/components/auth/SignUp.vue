<template>
  <div class="bg">
    <base-form>
      <form @submit.prevent="signUp" class="box">
        <p>
          Create a new account or
          <router-link class="login" to="/login">login</router-link>
        </p>
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
        <p v-if="wrongemail" class="">Enter correct email</p>
        <input
          type="password"
          placeholder="Password"
          class="username"
          v-model.trim="password"
          required
        />
        <p v-if="wrongpass" class="">Enter at least 6 symbols</p>
        <textarea
          id=""
          placeholder="Description"
          v-model.trim="description"
        ></textarea>
        <p class="error" v-if="error">Check if all fields are correct</p>
        <button @submit.prevent="signUp" type="submit" class="submit">
          Sign Up
        </button>
        <span
          >*Please note, you can enter any email which looks like normal e-mail
          and your password should be at least 6 symbols<br />(for example:
          test@test.com, 123456)</span
        >
      </form>
    </base-form>
  </div>
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
      error: null,
      wrongemail: false,
      wrongpass: false,
    };
  },
  methods: {
    async signUp() {
      try {
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
      } catch (error) {
        return (this.error = true);
      }
    },
  },
};
</script>

<style scoped>
.submit {
  margin-bottom: 15px;
}
.error {
  color: #e71c60;
}
span {
  font-size: 14px;
  font-weight: 300;
  line-height: 10px;
  color: rgb(109, 109, 109);
}

p {
  text-align: center;
  margin-bottom: 20px;
}
.login {
  color: #e71c60;
  text-decoration: underline;
}
.bg {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
}
.box {
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
