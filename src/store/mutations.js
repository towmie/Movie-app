"use strict";

export default {
  getMovieList(state, payload) {
    state.homeMovieList = payload;
  },
  selectedMovie(state, payload) {
    state.selectedMovie = payload;
  },

  renderRecommends(state, payload) {
    state.recommends = payload;
  },
};
