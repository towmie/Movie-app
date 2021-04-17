<template>
  <div>
    <ul class="list">
      <movie-item
        v-for="movie of wishList"
        :key="movie.id"
        :id="movie.id"
        :title="movie.title"
        :idImdb="movie.imdb_code"
        :desc="movie.desc"
        :year="movie.year"
        :cover="movie.cover"
        :rating="movie.rating"
        :genres="movie.genres"
      ></movie-item>
    </ul>
  </div>
</template>

<script>
import MovieItem from "./../components/movies/MovieItem";
export default {
  components: { MovieItem },
  computed: {
    wishList() {
      return JSON.parse(localStorage.getItem("movies"));
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
}
</style>
