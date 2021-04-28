"use strict";
export default {
  getWishlistMovies(state) {
    if (JSON.parse(localStorage.getItem("movies"))) {
      state.moviesLocal = JSON.parse(localStorage.getItem("movies"));
    }
    return state.moviesLocal;
  },

  getWishListForPage(state) {
    return state.movieList;
  },
};
