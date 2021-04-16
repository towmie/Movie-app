"use strict";

export default {
  async getMovieList(context, payload = 1) {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?page=${payload}`
    );
    const data = await response.json();
    context.commit("getMovieList", data);
  },
  searchInput(_, payload) {
    console.log(payload);
  },
};
