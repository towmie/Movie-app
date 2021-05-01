"use strict";

export default {
  async getAllWishlist(context) {
    if (!localStorage.getItem("data")) return;
    const lsData = JSON.parse(localStorage.getItem("data"));
    const { userId, token } = lsData;
    const response = await fetch(
      `https://movie-app-d7512-default-rtdb.firebaseio.com/users/${userId}/wishlist.json?auth=${token}`
    );
    const data = await response.json();
    const movies = [];
    for (let key in data) {
      const movie = {
        id: data[key].id,
        title: data[key].title,
        genres: data[key].genres,
        cover: data[key].cover,
        desc: data[key].genres,
        rating: data[key].rating,
        year: data[key].year,
      };
      movies.push(movie);
    }
    if (!response.ok) {
      console.error();
    }
    context.commit("allWishlistMovies", movies);
  },

  async addToWhishlist(context, payload) {
    if (!localStorage.getItem("data")) return;
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
    if (!localStorage.getItem("data")) return;

    const lsData = JSON.parse(localStorage.getItem("data"));
    const { userId, token } = lsData;
    const response = await fetch(
      `https://movie-app-d7512-default-rtdb.firebaseio.com/users/${userId}/wishlist/${payload}.json?auth=${token}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      console.log("error");
    }
    context.commit("deleteFromWhishlist", payload);
  },
};
