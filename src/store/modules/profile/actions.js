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
      console.log("error");
    }

    const data = await response.json();

    context.commit("setUser", {
      token: data.idToken,
      userId: data.localId,
      tokenExpiration: data.expiresIn,
    });
  },

  async addUserInfo(context, payload) {
    const userId = context.rootGetters["profile/userId"];
    const token = context.rootGetters["profile/token"];
    const infoObj = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      description: payload.description,
    };
    const response = await fetch(
      `https://movie-app-d7512-default-rtdb.firebaseio.com/users/${userId}.json?auth=${token}`,
      {
        method: "PUT",
        body: JSON.stringify(infoObj),
      }
    );

    if (!response.ok) {
      console.log("error");
    }
    context.commit("addUserInfo", infoObj);
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
      console.log("error");
    }
    const data = await response.json();

    context.commit("setUser", {
      token: data.idToken,
      userId: data.localId,
      tokenExpiration: data.expiresIn,
    });
  },

  async setUserInfo(context) {
    const lsData = JSON.parse(localStorage.getItem("data"));
    const { userId, token } = lsData;
    const response = await fetch(
      `https://movie-app-d7512-default-rtdb.firebaseio.com/users/${userId}.json?auth=${token}`
    );
    const data = await response.json();
    console.log(data);
    context.commit("addUserInfo", data);
  },

  logout(context) {
    context.commit("logout");
  },
};
