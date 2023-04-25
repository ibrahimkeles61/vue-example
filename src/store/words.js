export default {
  state: {
    // number: 2,
    wordsView: "userWords",
    deleteItemList: [],
    wordList: [
      {
        id: 1,
        en: "YES",
        tr: "EVET",
      },
      {
        id: 2,
        en: "NO",
        tr: "HAYIR",
      },
      {
        id: 3,
        en: "FIRE",
        tr: "ATEŞ",
      },
      {
        id: 4,
        en: "WATER",
        tr: "SU",
      },
      {
        id: 5,
        en: "MEAT",
        tr: "ET",
      },
    ],
  },
  getters: {
    words_globalWords: (localState) => localState.wordList,
    // words_userWords: (state) => (activeUser) =>
    //   activeUser.userWords.map((id) =>
    //     state.wordList.find((word) => word.id === id)
    //   ),

    words_userWords: (localState, _, rootState) =>
      rootState.activeUser.userWords.map((id) =>
        localState.wordList.find((word) => word.id == id)
      ),

    words_trainingWords: (localState, _, rootState) =>
      rootState.activeUser.trainingWords.map((id) =>
        localState.wordList.find((word) => word.id === id)
      ),
  },

  mutations: {
    words_changeWordsView_mut: (state, { wordsView }) =>
      (state.wordsView = wordsView),
  },

  actions: {
    words_changeWordsView_act: ({ commit, state }, { wordsView }) => {
      // commit("words_changeWordsView_mut", { wordsView })
      state.wordsView = wordsView;
    },

    words_deleteItemsPicker: ({ state }, { id }) =>
      state.deleteItemList.indexOf(id) == -1
        ? state.deleteItemList.push(id)
        : state.deleteItemList.splice(state.deleteItemList.indexOf(id), 1),

    words_deleteSelectedItems: ({ state, rootState }) => {
      rootState.activeUser.userWords = rootState.activeUser.userWords.filter(
        (id) => state.deleteItemList.indexOf(id) == -1
      );
      state.deleteItemList = [];
      rootState.navi.naviBarActive = false;
    },

    word_addNewWord: ({ state, getters, rootState }, { en, tr }) =>
      getters.words_userWords.findIndex((word) => word.en == en) == -1 // control if that word exist in that user's words
        ? getters.words_globalWords.findIndex((word) => word.en == en) == -1 // control if that word exist in all words list
          ? (state.wordList.push({
              // making an object for that word and saving it allwords and userwords both
              id: getters.words_globalWords.length + 1,
              en: en,
              tr: tr,
            }),
            rootState.activeUser.userWords.push(
              getters.words_globalWords.find((word) => word.en == en).id
            ),
            alert("Kelime Başarıyla Listenize Eklendi"))
          : (rootState.activeUser.userWords.push(
              // adding that existing word to user'words
              getters.words_globalWords.find((word) => word.en == en).id
            ),
            alert("Kelime Başarıyla Listenize Eklendi"))
        : alert("Eklemeye Çalıştığınız Kelime Zaten Listenizde Mevcut!"), // if that word exist in user's words
  },
};
