"use strict";
function saveToLS(list) {
  const parsed = JSON.stringify(list);
  localStorage.setItem("wishlist", parsed);
}

export default {
  addToWhishlist(state, payload) {
    state.movieList.unshift(payload);
    saveToLS(state.movieList);
  },

  deleteFromWhishlist(state, payload) {
    state.movieList = state.movieList.filter((movie) => movie.id !== payload);
    saveToLS(state.movieList);
  },
};
