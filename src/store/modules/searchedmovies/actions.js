"use strict";

export default {
  async searchMovie(context, payload) {
    const resp = await fetch(
      `https://yts.mx/api/v2/list_movies.json?query_term=${payload}&limit=50`
    );
    const { data } = await resp.json();
    this.isLoading = false;

    context.commit("searchMovie", data.movies);
  },
};
