"use strict";
import { createStore } from "vuex";
import toplistmovies from "./modules/toplistmovies/index";
import toplistserials from "./modules/toplistserials/index";
import watchlist from "./modules/watchlist/index";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default createStore({
  modules: {
    topMovie: toplistmovies,
    topSerial: toplistserials,
    wishlist: watchlist,
  },
  state() {
    return {
      homeMovieList: [],
    };
  },
  mutations,
  actions,
  getters,
});
