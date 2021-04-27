"use strict";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      usersList: [
        {
          userId: 1,
          firstName: "Andrey",
          lastName: "Ziuzin",
          profileImg: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo id labore dignissimos fugiat eum.",
          login: "admin",
          password: "admin",
        },
        {},
      ],
    };
  },
  actions,
  getters,
  mutations,
};
