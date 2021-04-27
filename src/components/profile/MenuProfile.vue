<template>
  <div class="menu-profile">
    <router-link to="/profile">
      <img :src="profileImg" alt="" />
    </router-link>
    <router-link class="text" to="/profile">{{ fullName }}</router-link>
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
