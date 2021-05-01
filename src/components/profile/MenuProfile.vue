<template>
  <div class="menu-profile" v-if="isLoggedIn">
    <router-link to="/profile">
      <img src="./../../assets/profile.jpg" alt="" />
    </router-link>
    <router-link class="text" to="/profile">{{ fullName }}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  async created() {
    await this.$store.dispatch("profile/setUserInfo");
    this.firstName = this.$store.getters["profile/getUserFirstName"];
    this.lasttName = this.$store.getters["profile/getUserLastName"];
  },
  computed: {
    fullName() {
      // const firstName = this.$store.getters["profile/getUserFirstName"];
      // const lasttName = this.$store.getters["profile/getUserLastName"];
      // if (this.firstName && this.lasttName) return;
      return `${this.firstName} ${this.lasttName}`;
    },
    profileImg() {
      return "./../../assets/profile.jpg";
    },
    isLoggedIn() {
      return this.$store.getters["profile/getIsLoggedin"];
    },
  },
};
</script>

<style scoped>
.menu-profile {
  text-align: center;
}
.img {
  width: 50px;
}
span {
  cursor: pointer;
  font-size: 14px;
  color: #e71c60;
  text-decoration: underline;
}
img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
}
.text {
  display: block;
  font-weight: 700;
  color: #e71c60;
}
a:hover {
  text-decoration: underline;
}
</style>
