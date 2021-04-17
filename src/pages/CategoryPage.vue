<template>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <div v-else>
    <div>category: {{ category }}</div>
    <ul class="list">
      <movie-item
        v-for="movie of categoryList"
        :key="movie.id"
        :id="movie.id"
        :title="movie.title_english"
        :idImdb="movie.imdb_code"
        :desc="movie.description_full"
        :year="movie.year"
        :cover="movie.large_cover_image"
        :rating="movie.rating"
        :genres="movie.genres"
        :delete-from-wl="false"
      ></movie-item>
    </ul>
  </div>
</template>

<script>
import MovieItem from "./../components/movies/MovieItem";
export default {
  components: {
    MovieItem,
  },
  data() {
    return {
      categoryList: [],
      category: "",
      isLoading: false,
    };
  },
  watch: {
    async $route(newRoute) {
      this.isLoading = true;
      await this.$store.dispatch("showCat", newRoute.params.cat);
      this.categoryList = this.$store.getters.getCategories;
      this.category = newRoute.params.cat;
      this.isLoading = false;
    },
  },
  async created() {
    this.isLoading = true;
    await this.$store.dispatch("showCat", this.$route.params.cat);
    this.categoryList = this.$store.getters.getCategories;
    this.category = this.$route.params.cat;
    this.isLoading = false;
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
</style>
