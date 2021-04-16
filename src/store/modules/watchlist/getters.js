"use strict";
export default {
  getWishListFromLS(state) {
    if (localStorage.getItem("movies")) {
      state.moviesLocal = JSON.parse(localStorage.getItem("movies"));
    }
    return state.moviesLocal;
  },

  getWidgetWishList(state) {
    if (localStorage.getItem("movies")) {
      state.moviesLocal = JSON.parse(localStorage.getItem("movies"));
    }
    return state.moviesLocal;
  },
};
