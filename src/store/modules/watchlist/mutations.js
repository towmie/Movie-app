"use strict";

export default {
  allWishlistMovies(state, payload) {
    state.movieList = payload;
  },

  addToWhishlist(state, payload) {
    const id = payload.id;
    const alreadyIn = state.movieList.find((mov) => mov.id === id);
    if (alreadyIn) return;
    state.movieList.unshift(payload);
  },

  deleteFromWhishlist(state, payload) {
    state.movieList = state.movieList.filter((mov) => mov.id !== payload);
  },
};
