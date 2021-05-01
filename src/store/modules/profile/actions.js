"use strict";

export default {
  async createUser(context, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAGtDYLXq7jhwAD8r15xhxtbvQ-sf9PHr0",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      if (!response.ok) {
        const error = new Error(response);
        throw error;
      }
    }

    const data = await response.json();

    context.commit("setUser", {
      token: data.idToken,
      userId: data.localId,
      tokenExpiration: data.expiresIn,
    });
  },

  async addUserInfo(context, payload) {
    if (!localStorage.getItem("data")) return;

    const lsData = JSON.parse(localStorage.getItem("data"));
    const { userId, token } = lsData;
    const response = await fetch(
      `https://movie-app-d7512-default-rtdb.firebaseio.com/users/${userId}/info.json?auth=${token}`,
      {
        method: "PUT",
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      console.log("error");
    }
    context.commit("addUserInfo", payload);
  },

  async login(context, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAGtDYLXq7jhwAD8r15xhxtbvQ-sf9PHr0",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    if (!response.ok) {
      const error = "fasle";
      throw error;
    }
    const data = await response.json();

    context.commit("setUser", {
      token: data.idToken,
      userId: data.localId,
      tokenExpiration: data.expiresIn,
    });
  },

  async setUserInfo(context) {
    if (!localStorage.getItem("data")) return;
    const lsData = JSON.parse(localStorage.getItem("data"));
    const { userId, token } = lsData;
    const response = await fetch(
      `https://movie-app-d7512-default-rtdb.firebaseio.com/users/${userId}/info.json?auth=${token}`
    );
    const data = await response.json();

    context.commit("addUserInfo", data);
  },

  logout(context) {
    context.commit("logout");
  },
};
