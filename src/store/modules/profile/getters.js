"use strict";

export default {
  token(state) {
    return state.token;
  },
  userId(state) {
    return state.userId;
  },

  getUserFirstName(state) {
    return state.userInfo.firstName;
  },
  getUserLastName(state) {
    return state.userInfo.lastName;
  },
  getUserDescription(state) {
    return state.userInfo.description;
  },
  getIsLoggedin(state) {
    localStorage.getItem("data")
      ? (state.isLoggedIn = true)
      : (state.isLoggedIn = false);
    return state.isLoggedIn;
  },
};
