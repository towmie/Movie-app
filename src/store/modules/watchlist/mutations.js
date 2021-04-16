"use strict";

function saveToLS(list) {
  const parsed = JSON.stringify(list);
  localStorage.setItem("movies", parsed);
}

export default {
  addToWhishlist(state, payload) {
    state.moviesLocal.unshift(payload);
    saveToLS(state.moviesLocal);
  },
};
