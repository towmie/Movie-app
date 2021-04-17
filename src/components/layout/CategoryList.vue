<template>
  <div @click="showCat">category</div>
  <transition name="fade">
    <ul v-if="isOpend">
      <category-item
        v-for="category in categories"
        :key="category"
        :category="category"
      ></category-item>
    </ul>
  </transition>
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
</style>
