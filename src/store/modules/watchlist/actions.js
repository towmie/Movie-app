"use strict";

export default {
  async getAllWishListMovies(context) {
    const lsData = JSON.parse(localStorage.getItem("data"));
    const { userId, token } = lsData;

    const response = await fetch(
      `https://movie-app-d7512-default-rtdb.firebaseio.com/users/${userId}/wishlist.json?auth=${token}`
    );
    const data = await response.json();
    if (!response.ok) {
      console.error();
    }
    context.commit("allWishlistMovies", data);
  },

  async addToWhishlist(context, payload) {
    const lsData = JSON.parse(localStorage.getItem("data"));
    const { userId, token } = lsData;
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
    const lsData = JSON.parse(localStorage.getItem("data"));
    const { userId, token } = lsData;
    const response = await fetch(
      `https://movie-app-d7512-default-rtdb.firebaseio.com/users/${userId}/wishlist/${payload}.json?auth=${token}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log(data);
    context.commit("deleteFromWhishlist", data);
  },
};
