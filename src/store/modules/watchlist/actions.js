"use strict";

export default {
  addToWhishlist(context, payload) {
    context.commit("addToWhishlist", payload);
  },

  deleteFromWhishlist(context, payload) {
    context.commit("deleteFromWhishlist", payload);
  },
};
