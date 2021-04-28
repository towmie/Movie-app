"use strict";

function saveToLS(list) {
  const parsed = JSON.stringify(list);
  localStorage.setItem("movies", parsed);
}

export default {
  addToWhishlist(state, payload) {
    state.movieList.push(payload);
    console.log(state.movieList, payload);
    const id = payload.id;
    const alreadyIn = state.moviesLocal.find((mov) => mov.id === id);
    if (alreadyIn) return;
    state.moviesLocal.unshift(payload);
    saveToLS(state.moviesLocal);
  },

  allWishlistMovies(state, payload) {
    state.movieList = payload;
  },

  deleteFromWhishlist(state, payload) {
    state.moviesLocal = state.moviesLocal.filter((mov) => mov.id !== payload);
    state.movieList = state.moviesLocal;

    saveToLS(state.moviesLocal);
  },
};
