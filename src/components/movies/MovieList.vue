<template>
  <ul class="list">
    <movie-item
      v-for="movie of movieList"
      :key="movie.id"
      :title="movie.title_english"
      :id="movie.imdb_code"
      :desc="movie.description_full"
      :year="movie.year"
      :cover="movie.large_cover_image"
      :rating="movie.rating"
      :genres="movie.genres"
    ></movie-item>
  </ul>
</template>

<script>
import MovieItem from "./MovieItem";

export default {
  components: { MovieItem },
  computed: {
    movieList() {
      return this.$store.getters.getMovieList;
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
