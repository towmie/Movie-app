"use strict";

export default {
  addToWhishlist(state, payload) {
    const id = payload.id;
    const alreadyIn = state.movieList.find((mov) => mov.id === id);
    if (alreadyIn) return;
    state.movieList.unshift(payload);
  },

  allWishlistMovies(state, payload) {
    state.movieList = payload;
  },

  deleteFromWhishlist(state, payload) {
    state.movieList = state.movieList.filter((movie) => movie.id !== payload);
  },
};
