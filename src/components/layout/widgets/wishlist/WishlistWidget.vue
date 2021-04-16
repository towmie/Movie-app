<template>
  <div>
    <h3>WishList</h3>
    <p v-if="isNotEmpty">now movies in wishlist</p>
    <ul v-else class="list">
      <wish-list-widget-item
        v-for="movie of localMovies"
        :key="movie.id"
        :id="movie.id"
        :title="movie.title"
        :genres="movie.genres"
        :rating="movie.rating"
        :cover="movie.cover"
      ></wish-list-widget-item>
    </ul>
    <router-link v-if="isMoreThenFour" to="/wishlist" class="info"
      >Show More</router-link
    >
  </div>
</template>

<script>
import WishListWidgetItem from "./WishListWidgetItem";
export default {
  components: { WishListWidgetItem },

  computed: {
    localMovies() {
      return this.$store.getters["wishlist/getWidgetWishList"];
    },

    isNotEmpty() {
      if (this.localMovies.length > 0) {
        return false;
      } else {
        return true;
      }
    },

    isMoreThenFour() {
      if (this.localMovies.length > 3) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.list {
  max-height: 330px;
  overflow-y: hidden;
}
.info {
  margin-top: auto;
  display: block;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  color: #fff;
  background-color: #e71c60;
}
</style>
