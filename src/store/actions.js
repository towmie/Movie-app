"use strict";

export default {
  async getMovieList(context, payload = 1) {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?page=${payload}`
    );
    const respData = await response.json();
    const { data } = respData;
    const newData = {
      ...data.movies,
      currentPage: payload,
    };
    context.commit("getMovieList", newData);
  },
  selectedMovie(context, payload) {
    context.commit("selectedMovie", payload);
  },
  async renderRecommends(context, payload) {
    const resp = await fetch(
      `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${payload}`
    );
    const { data } = await resp.json();

    context.commit("renderRecommends", data.movies);
  },
};
