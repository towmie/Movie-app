<template>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <div v-else>
    <h2 class="title">
      Category: <span>{{ category }}</span>
    </h2>
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
.title {
  display: block;
  padding: 15px;
  margin-top: 16px;
  padding-bottom: 26px;
  color: #353535;
  font-size: 18px;
  font-weight: 300;
  border-bottom: 1px solid rgba(53, 53, 53, 0.3);
}
.title span {
  text-transform: uppercase;
  font-size: 22px;
  color: #e71c60;
}
.list {
  display: flex;
  flex-wrap: wrap;
}
</style>
