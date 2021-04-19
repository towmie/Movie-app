<template>
  <h2 class="title">
    Search Results: <span>{{ searchedInput }}</span>
  </h2>
  <ul class="list">
    <movie-item
      v-for="movie of serchedMovieList"
      :key="movie.id"
      :id="movie.id"
      :title="movie.title_english"
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
  data() {
    return {
      isLoading: true,
      searched: null,
    };
  },

  computed: {
    serchedMovieList() {
      return this.$store.getters["searchedFilm/getSearchedMovies"];
    },

    searchedInput() {
      return this.$store.getters["searchedFilm/getSearchedInput"];
    },
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
