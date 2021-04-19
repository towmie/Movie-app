<template>
  <div class="nav">
    <a class="logo-link" href="/"> Movie App </a>
    <div>
      <ul class="menu__wrapper">
        <li class="menu__item">
          <img class="icon" src="./../../assets/icons/home.svg" />
          <router-link to="/" class="home">Home</router-link>
        </li>
        <li class="menu__item">
          <img class="icon" src="./../../assets/icons/user.svg" />
          <router-link to="/profile" class="profile">Profile</router-link>
        </li>
        <li class="menu__item">
          <img class="icon" src="./../../assets/icons/heart.svg" />
          <router-link to="/wishlist" class="wishlist">Wishlist</router-link>
        </li>
        <li class="menu__item">
          <category-list></category-list>
        </li>
      </ul>
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
.icon {
  width: 20px;
  height: 20px;
  z-index: 100;
}
.menu__item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 15px;
}
a {
  display: block;
  width: 100%;
  padding: 5px 0 5px 10px;
  font-weight: 700;
  color: rgb(82, 82, 82);
}
h3 {
  display: block;
  /* text-align: center; */
  margin-bottom: 20px;
  color: rgb(53, 53, 53);
}
.menu__wrapper {
  display: flex;
  flex-direction: column;
}
.active {
  color: #e71c60;
  font-weight: 700;
  border-right: 4px solid #e71c60;
}

.logo-link {
  display: inline-block;
  margin: 10px;
  padding-left: 50px;
  position: relative;
  font-weight: 300;
  font-size: 20px;
}
.logo-link::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 0px;
  width: 40px;
  height: 50px;
  background-image: url(./../../assets/logo.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.nav {
  padding: 20px 0 20px 20px;
}
</style>
