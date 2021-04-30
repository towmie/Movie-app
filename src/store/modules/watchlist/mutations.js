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
    console.log(payload);
    console.log(state.movieList);
    let arr = [];
    arr = Object.values(state.movieList);
    console.log(arr);
    state.movieList = state.movieList.filter((movie) => movie.id !== payload);
  },
};
