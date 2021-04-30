"use strict";
export default {
  getWishListForPage(state) {
    if (localStorage.getItem("wishlist")) {
      state.movieList = JSON.parse(localStorage.getItem("wishlist"));
    }
    return state.movieList;
  },
};
