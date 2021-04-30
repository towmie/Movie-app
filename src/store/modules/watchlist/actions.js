"use strict";

export default {
  // async getAllWishListMovies(context) {
  //   const lsData = JSON.parse(localStorage.getItem("data"));
  //   const { userId, token } = lsData;
  //   const response = await fetch(
  //     `https://movie-app-d7512-default-rtdb.firebaseio.com/users/${userId}/wishlist.json?auth=${token}`
  //   );
  //   const data = await response.json();
  //   if (!response.ok) {
  //     console.error();
  //   }
  //   context.commit("allWishlistMovies", data);
  // },

  addToWhishlist(context, payload) {
    context.commit("addToWhishlist", payload);
  },

  deleteFromWhishlist(context, payload) {
    context.commit("deleteFromWhishlist", payload);
  },
};
