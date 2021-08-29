/* eslint-disable no-console */
import { createApp } from "vue";
import App from "./CommentScreen.vue";

const container = document.createElement("div");
document.body.appendChild(container);
createApp(App).mount(container);
