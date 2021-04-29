<template>
  <div>
    <h2 class="title">Your WishList:</h2>
    <p v-if="!isLoggedIn">Login To see your Watch List</p>
    <ul v-else class="list" @click="show">
      <movie-item
        v-for="movie of localMovies"
        :key="movie.id"
        :id="movie.id"
        :title="movie.title"
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
  mounted() {
    this.$store.dispatch("wishlist/getAllWishListMovies");
  },

  computed: {
    localMovies() {
      return this.$store.getters["wishlist/getWishListForPage"];
    },
    isLoggedIn() {
      return this.$store.getters["profile/getIsLoggedin"];
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
@media (max-width: 700px) {
  .title {
    text-align: center;
  }
}
</style>
