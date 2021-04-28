"use strict";

export default {
  async getAllWishListMovies(context) {
    const userId = context.rootGetters["profile/userId"];
    const token = context.rootGetters["profile/token"];
    const response = await fetch(
      `https://movie-app-d7512-default-rtdb.firebaseio.com/users/${userId}/wishlist.json?auth="${token}`
    );
    const data = await response.json();
    context.commit("allWishlistMovies", data);
  },

  async addToWhishlist(context, payload) {
    const userId = context.rootGetters["profile/userId"];
    const token = context.rootGetters["profile/token"];
    const response = await fetch(
      `https://movie-app-d7512-default-rtdb.firebaseio.com/users/${userId}/wishlist/${payload.id}.json?auth=${token}`,
      {
        method: "PUT",
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      console.log("error");
    }

    context.commit("addToWhishlist", payload);
  },

  async deleteFromWhishlist(context, payload) {
    const userId = context.rootGetters["profile/userId"];
    const token = context.rootGetters["profile/token"];
    const response = await fetch(
      `https://movie-app-d7512-default-rtdb.firebaseio.com/users/${userId}/wishlist/${payload.id}.json?auth=${token}`,
      {
        method: "DELETE",
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    context.commit("deleteFromWhishlist", data);
  },
};
