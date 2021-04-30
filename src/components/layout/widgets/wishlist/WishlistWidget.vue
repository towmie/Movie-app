<template>
  <div>
    <h3 class="heading">WishList:</h3>
    <p v-if="isNotEmpty">
      You have added no movies yet<br />
      <span>*press + on the movie card to add the movie to the whishlist</span>
    </p>
    <ul v-else class="list-widget">
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
      >Show All</router-link
    >
  </div>
</template>

<script>
import WishListWidgetItem from "./WishListWidgetItem";
export default {
  components: { WishListWidgetItem },

  computed: {
    localMovies() {
      return this.$store.getters["wishlist/getWishlistMovies"];
    },
    isNotEmpty() {
      if (this.localMovies && this.localMovies.length > 0) {
        return false;
      } else {
        return true;
      }
    },

    isMoreThenFour() {
      if (this.localMovies && this.localMovies.length > 3) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.list-widget {
  max-height: 345px;
  overflow-y: hidden;
}
p {
  font-size: 16px;
  font-weight: 400;
  color: #353535;
}
p span {
  display: block;
  margin-top: 10px;
  font-size: 14px;
}
.heading {
  text-transform: uppercase;
  font-size: 22px;
  color: #e71c60;
  font-weight: 700;
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
