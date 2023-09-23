import "./assets/css/resets.css";
import "./assets/css/main.css";
import router from './router'
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(router).mount('#app')
