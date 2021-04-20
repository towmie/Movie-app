<template>
  <div class="nav">
    <button
      class="mobile-menu"
      :class="{ mob: openMob }"
      @click="navActive"
    ></button>

    <a class="logo-link" href="/"> Movie App </a>
    <div>
      <ul class="menu__wrapper">
        <li class="menu__item">
          <search-item class="search"></search-item>
        </li>
        <li class="menu__item">
          <img class="icon" src="./../../assets/icons/home.svg" />
          <router-link to="/" class="home" @click="navActive">Home</router-link>
        </li>
        <li class="menu__item">
          <img class="icon" src="./../../assets/icons/user.svg" />
          <router-link to="/profile" class="profile" @click="navActive"
            >Profile</router-link
          >
        </li>
        <li class="menu__item">
          <img class="icon" src="./../../assets/icons/heart.svg" />
          <router-link to="/wishlist" class="wishlist" @click="navActive"
            >Wishlist</router-link
          >
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
import SearchItem from "./widgets/SearchItem.vue";
export default {
  components: {
    CategoryList,
    SearchItem,
  },
  data() {
    return {
      openMob: false,
      mobScreenWidth: 700,
    };
  },
  watch: {
    onresize(data) {
      console.log(data);
    },
  },
  created() {
    window.addEventListener("resize", this.updateOpenMob);
  },
  methods: {
    updateOpenMob() {
      if (document.body.clientWidth <= this.mobScreenWidth) {
        this.openMob = false;
      }
    },
    navActive() {
      this.openMob = !this.openMob;
      this.$emit("nav-active", this.openMob);
    },
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
  width: 100px;
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
.mobile-menu {
  display: none;
}
.nav {
  padding: 20px 0 20px 20px;
}
@media (max-width: 700px) {
  .logo-link {
    font-size: 15px;
    width: 70px;
  }
  .menu__item {
    padding-left: 5px;
  }
  .nav {
    padding: 20px 0 20px 5px;
  }
  .mobile-menu,
  .mob {
    display: block;
    position: absolute;
    top: 20px;
    padding: 5px;
    right: -50px;
    width: 30px;
    height: 30px;

    background-color: transparent;
    background-color: #fff;
    background-position: center;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    border: 1px solid rgba(131, 131, 131, 0.3);
    border-radius: 5px;
    box-shadow: 0px 10px 10px rgba(95, 95, 95, 0.3);
  }
  .mobile-menu {
    background-image: url(./../../assets/icons/menu.svg);
  }
  .mob {
    background-image: url(./../../assets/icons/close.svg);
  }
}
</style>
