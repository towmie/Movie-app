<template>
  <div class="wrapper">
    <div @click="showCat">
      <img class="icon" src="./../../assets/icons/video.svg" />
      <span class="title">Categories</span>
    </div>
    <transition name="fade">
      <ul v-if="isOpend">
        <category-item
          v-for="category in categories"
          :key="category"
          :category="category"
        ></category-item>
      </ul>
    </transition>
  </div>
</template>

<script>
import CategoryItem from "./CategoryItem.vue";
export default {
  components: { CategoryItem },
  data() {
    return {
      isOpend: false,
      categories: [
        "Action",
        "Thriller",
        "Drama",
        "Crime",
        "Comedy",
        "Horror",
        "Sci-Fi",
        "Adventure",
        "Family",
        "Mystery",
        "Romance",
        "Fantasy",
        "Western",
      ],
    };
  },
  methods: {
    showCat() {
      this.isOpend = !this.isOpend;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.wrapper {
  display: flex;
  flex-direction: column;
}
.icon {
  width: 20px;
  height: 20px;
  z-index: 100;
}
.title {
  padding-left: 10px;
  font-weight: 700;
  color: rgb(53, 53, 53);
}
</style>
