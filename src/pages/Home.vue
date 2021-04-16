<template>
  <div>Home</div>
  <div><MovieList /></div>
</template>

<script>
import MovieList from "./../components/movies/MovieList";
export default {
  components: { MovieList },
  created() {
    this.$store.dispatch("getMovieList");
  },
};
</script>

<style scoped></style>
