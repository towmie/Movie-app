"use strict";
import { createStore } from "vuex";
import searchedmovies from "./modules/searchedmovies/index";
import toplistserials from "./modules/toplistserials/index";
import watchlist from "./modules/watchlist/index";
import profile from "./modules/profile/index";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default createStore({
  modules: {
    searchedFilm: searchedmovies,
    topSerial: toplistserials,
    wishlist: watchlist,
    profile,
  },
  state() {
    return {
      homeMovieList: [],
      currentPage: null,
      selectedMovie: {},
      recommends: [],
      catMovieList: [],
      movieDetails: {},
    };
  },
  mutations,
  actions,
  getters,
});
