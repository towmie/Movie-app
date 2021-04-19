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

  showCat(state, payload) {
    state.catMovieList = payload;
  },

  movieDetails(state, payload) {
    state.movieDetails = payload;
  },
};
