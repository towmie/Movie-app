<template>
  <div>category</div>
  <ul>
    <category-item
      v-for="category in categories"
      :key="category"
      :category="category"
    ></category-item>
  </ul>
</template>

<script>
import CategoryItem from "./CategoryItem.vue";
export default {
  components: { CategoryItem },
  data() {
    return {
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
};
</script>

<style scoped></style>
