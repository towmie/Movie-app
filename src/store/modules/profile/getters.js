"use strict";

export default {
  token(state) {
    return state.token;
  },
  userId(state) {
    return state.userId;
  },

  // getCurrentUser(state) {
  //   return state.selectedUser;
  // },
  getUserFirstName(state) {
    return state.userInfo.firstName;
  },
  getUserLastName(state) {
    return state.userInfo.lastName;
  },
  getUserDescription(state) {
    return state.userInfo.description;
  },
  // getIsLoggedin(state) {
  //   return state.isLoggedIn;
  // },
};
