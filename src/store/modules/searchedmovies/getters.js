"use strict";

export default {
  getSearchedMovies(state) {
    return state.searchedMovies;
  },
  getIsLoading(state) {
    console.log(state.isLoading);
    return state.isLoading;
  },
};
