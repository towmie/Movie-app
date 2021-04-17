<template>
  <!-- <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div> -->
  <ul class="list">
    <movie-item
      v-for="movie of serchedMovieList"
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
</template>

<script>
import MovieItem from "./../components/movies/MovieItem";
export default {
  components: { MovieItem },
  // data() {
  //   return {
  //     isLoading: true,
  //     searched: null,
  //   };
  // },

  computed: {
    serchedMovieList() {
      return this.$store.getters["searchedFilm/getSearchedMovies"];
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
</style>
