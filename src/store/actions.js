"use strict";

export default {
  async getMovieList(context) {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");
    const data = await response.json();
    context.commit("getMovieList", data);
  },
};
