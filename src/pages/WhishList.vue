<template>
  <div>
    <ul class="list" @click="show">
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
        :delete-from-wl="true"
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
      // return this.$store.getters["wishlist/getWidgetWishList"];
      return JSON.parse(localStorage.getItem("movies"));
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
