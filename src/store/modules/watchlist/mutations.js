"use strict";

function saveToLS(list) {
  const parsed = JSON.stringify(list);
  localStorage.setItem("movies", parsed);
}

export default {
  addToWhishlist(state, payload) {
    // const { id } = payload;
    // let isInLS = null;
    // state.moviesLocal.forEach((mov) => {
    //   mov.id === id ? (isInLS = true) : (isInLS = true);
    // });

    // isInLS
    //   ? console.log(" film  already inls")
    //   : state.moviesLocal.unshift(payload);
    state.moviesLocal.unshift(payload);
    saveToLS(state.moviesLocal);
  },
};
