<template>
  <div>
    <h2 class="title">Your WishList:</h2>
    <ul class="list" @click="show">
      <movie-item
        v-for="movie of wishList"
        :key="movie.id"
        :id="movie.id"
        :title="movie.title"
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
