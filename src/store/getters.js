"use strict";

export default {
  getMovieList(state) {
    return state.homeMovieList;
  },

  getSelectedMovie(state) {
    return state.selectedMovie;
  },
  getRecommends(state) {
    return state.recommends;
  },
};
