"use strict";

export default {
  getMovieList(state, { data }) {
    state.homeMovieList = data.movies;
  },
};
