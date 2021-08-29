/* eslint-disable no-console */
import { createApp } from "vue";
import App from "./Content.vue";

const container = document.createElement("div");
document.body.appendChild(container);
createApp(App).mount(container);
