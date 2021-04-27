"use strict";

export default {
  getUserImg(state) {
    return state.usersList.filter((user) => user.userId === 1)[0].profileImg;
  },
};
