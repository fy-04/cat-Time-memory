import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// TODO: 改成引入文件，不要用 style 标签做 =>  global.css
const style = document.createElement("style");
style.textContent = `body, html { margin: 0; padding: 0; font-family: sans-serif; } * { box-sizing: border-box; }`;

document.head.appendChild(style);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
