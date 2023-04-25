import { createStore } from "vuex";
import users from "./users.js";
import words from "./words.js";
import navi from "./navi.js";

const store = createStore({
  state: {
    activeUser: {
      id: 1,
      userName: "ibrahim6114",
      userWords: [1, 2, 3],
      trainingWords: [1, 5],
    },
  },
  modules: {
    users,
    words,
    navi,
  },
});

export default store;
