"use strict";

export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
    state.isLoggedIn = true;

    const lsObj = JSON.stringify({
      token: payload.token,
      userId: payload.userId,
    });

    localStorage.setItem("data", lsObj);
  },

  addUserInfo(state, payload) {
    state.userInfo = payload;
  },
  logout(state) {
    state.token = null;
    state.userId = null;
    state.tokenExpiration = null;

    state.isLoggedIn = false;

    localStorage.removeItem("data");
  },
};
