<template>
  <div class="wrapper">
    <aside-menu
      class="left"
      @nav-active="showNav"
      :style="openMob"
    ></aside-menu>
    <div class="main-info">
      <router-view></router-view>
    </div>
    <right-widgets class="right"></right-widgets>
  </div>
</template>

<script>
import AsideMenu from "./components/layout/AsideMenu";
import RightWidgets from "./components/layout/RightWidgets";
export default {
  components: { AsideMenu, RightWidgets },
  data() {
    return {
      openMob: null,
    };
  },
  methods: {
    showNav(val) {
      val ? (this.openMob = "left: 0;") : (this.openMob = "left: -155px;");
    },
  },
};
</script>

<style>
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  background-blend-mode: lighten;
  position: relative;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

ul {
  padding: 0;
  list-style: none;
}

.wrapper {
  display: flex;
}
.left {
  width: 350px;
  background-color: #fff;
  height: 100vh;
}
.right {
  width: 450px;
  background-color: #fff;
}
.main-info {
  width: 100%;
  border-right: 2px solid rgba(163, 163, 163, 0.3);
  border-left: 2px solid rgba(163, 163, 163, 0.3);
}

.list {
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 1400px) {
  .list {
    justify-content: space-around;
  }
}
@media (max-width: 910px) {
  .right {
    display: none;
  }
}

@media (max-width: 700px) {
  .left {
    position: fixed;
    width: 150px;
    left: -155px;
    z-index: 20;
  }
}
</style>
