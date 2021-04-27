<template>
  <div class="menu-profile">
    <router-link to="/profile">
      <img src="./../../assets/profile.jpg" alt="" />
    </router-link>
    <router-link class="text" to="/profile">{{ fullName }}</router-link>
    <span>logout</span>
  </div>
</template>

<script>
export default {
  computed: {
    fullName() {
      return "Andrey Ziuzin";
    },
    profileImg() {
      return "./../../assets/profile.jpg";
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
