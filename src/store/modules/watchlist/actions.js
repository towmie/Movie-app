"use strict";

export default {
  addToWhishlist(context, payload) {
    context.commit("addToWhishlist", payload);
  },
  search(_, payload) {
    console.log(payload);
  },
};