import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Store from "./store/_store.js";
import router from "./routes/router.js";

const app = createApp(App);
app.use(Store);
app.use(router);
app.mount("#app");
