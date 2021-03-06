"use strict";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      searchedMovies: [],
      isLoading: true,
      searchedInput: "",
    };
  },
  actions,
  getters,
  mutations,
};
