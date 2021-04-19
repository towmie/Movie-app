"use strict";

export default {
  searchMovie(state, payload) {
    state.searchedMovies = payload;
  },
  searchInput(state, payload) {
    state.searchedInput = payload;
  },
};
