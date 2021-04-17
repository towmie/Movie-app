"use strict";

function saveToLS(list) {
  const parsed = JSON.stringify(list);
  localStorage.setItem("movies", parsed);
}

export default {
  addToWhishlist(state, payload) {
    const id = payload.id;
    const alreadyIn = state.moviesLocal.find((mov) => mov.id === id);

    alreadyIn ? console.log("already in") : state.moviesLocal.unshift(payload);

    saveToLS(state.moviesLocal);
  },
};
