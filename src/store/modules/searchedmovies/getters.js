"use strict";

export default {
  getSearchedMovies(state) {
    return state.searchedMovies;
  },
  getIsLoading(state) {
    return state.isLoading;
  },

  getSearchedInput(state) {
    return state.searchedInput;
  },
};
