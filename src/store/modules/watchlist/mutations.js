"use strict";

export default {
  addToWhishlist(state, payload) {
    // console.log(payload);
    // state.movieList.push(payload);
    const id = payload.id;
    const alreadyIn = state.movieList.find((mov) => mov.id === id);
    if (alreadyIn) return;
    state.movieList.unshift(payload);
    console.log(state.movieList);
  },

  allWishlistMovies(state, payload) {
    state.movieList = payload;
  },

  deleteFromWhishlist(state, payload) {
    console.log(state, payload);
  },
};
