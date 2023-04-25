export default {
  state: {
    naviBarActive: false,
    naviOptions: [
      {
        id: 1,
        value: "Kelimelerim",
      },
      {
        id: 2,
        value: "Kelime Dağı",
      },
      // {
      //   id: 3,
      //   value: "Çalışmam",
      // },
      {
        id: 5,
        value: "Yeni Kelime Ekle",
      },
      {
        id: 4,
        value: "Seçilenleri Sil",
      },
    ],
  },
  getters: {
    navi_getNaviOptions: (state) => state.naviOptions,
  },
  mutations: {
    navi_naviBarChanger: (state) =>
      state.naviBarActive
        ? (state.naviBarActive = false)
        : (state.naviBarActive = true),
  },
};
