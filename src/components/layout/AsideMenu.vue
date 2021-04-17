<template>
  <div class="nav">
    <router-link class="logo-link" to="/"> Norton </router-link>
    <div>
      <h3>Menu</h3>
      <div class="menu-wrapper">
        <router-link to="/" class="home">Home</router-link>
        <router-link to="/profile" class="profile">Profile</router-link>
        <router-link to="/wishlist" class="wishlist">Wishlist</router-link>
        <category-list></category-list>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryList from "./CategoryList";
export default {
  components: {
    CategoryList,
  },
};
</script>

<style scoped>
h3 {
  display: block;
  text-align: center;
  margin-bottom: 20px;
  color: rgb(53, 53, 53);
}
.menu-wrapper {
  display: flex;
  flex-direction: column;
}
.active {
  border-bottom: 1px solid #000;
}
.menu-wrapper a {
  display: inline-block;
  margin-bottom: 10px;
  padding-left: 20px;
}
.logo-link {
  display: inline-block;
  margin: 10px;
  padding-left: 50px;
  position: relative;
}
.logo-link::before {
  content: "";
  position: absolute;
  top: -6px;
  left: 6px;
  width: 40px;
  height: 30px;
  background-image: url(./../../assets/logo.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.nav {
  padding: 20px;
}
</style>
