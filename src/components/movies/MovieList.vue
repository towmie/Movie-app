<template>
  <ul class="list">
    <movie-item
      v-for="movie of movieList"
      :key="movie.id"
      :id="movie.id"
      :title="movie.title_english"
      :desc="movie.description_full"
      :year="movie.year"
      :cover="movie.large_cover_image"
      :rating="movie.rating"
      :genres="movie.genres"
      :current-page="movieList.currentPage"
      :delete-from-wl="false"
    ></movie-item>
  </ul>
</template>

<script>
import MovieItem from "./MovieItem";

export default {
  components: { MovieItem },
  computed: {
    movieList() {
      const resceived = this.$store.getters.getMovieList;
      delete resceived.currentPage;
      return resceived;
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 1420px) {
  .list {
    justify-content: space-around;
  }
} ;
</style>
