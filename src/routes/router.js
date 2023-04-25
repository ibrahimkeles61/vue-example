import { createRouter, createWebHashHistory } from "vue-router";
import Words from "../components/Words.vue";
import AddNewWord from "../components/AddNewWord.vue";

const routes = [
  {
    name: "Words",
    path: "/",
    component: Words,
    // component: () => import("@/views/Home.vue"),
  },
  {
    name: "AddNewWord",
    path: "/add-new-word",
    component: AddNewWord,
  },
];

const router = createRouter({
  routes,
  // history: createWebHistory(),
  history: createWebHashHistory(),
});

// depending routing
// const isAuthenticate = false;
// const authRequired = ["Details"];
// router.beforeEach((to, from, next) => {
//   console.log(from.name, "->", to.name);

//   if (authRequired.indexOf(to.name) !== -1) {
//     if (isAuthenticate) next();
//     else next({ name: "Home" });
//   } else next();
// });

export default router;
