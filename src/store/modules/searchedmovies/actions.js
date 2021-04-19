"use strict";

export default {
  async searchMovie(context, payload) {
    try {
      const resp = await fetch(
        `https://yts.mx/api/v2/list_movies.json?query_term=${payload}&limit=50`
      );
      const { data } = await resp.json();
      this.isLoading = false;
      console.log(resp);

      context.commit("searchMovie", data.movies);
    } catch (err) {
      console.log(err);
    }
  },

  searchInput(context, payload) {
    context.commit("searchInput", payload);
  },
};
