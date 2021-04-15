<template>
  <div class="nav">
    <router-link class="logo-link" to="/"> Norton </router-link>
    <div>
      <h3>Menu</h3>
      <div class="menu-wrapper">
        <router-link to="/" class="home">Home</router-link>
        <router-link to="/top-movies" class="/top-movs"
          >Top 20 Movies</router-link
        >
        <router-link to="/top-shows" class="top-show"
          >Top 20 Tv Shows</router-link
        >
        <router-link to="/wishlist" class="wishlist">Wishlist</router-link>
        <router-link to="/profile" class="profile">Profile</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.menu-wrapper {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
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
  border-right: 2px solid rgb(71, 71, 71);
  padding: 20px;
}
</style>
