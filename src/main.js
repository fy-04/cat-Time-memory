import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// TODO: 全局样式没有清除 加一个 global 的样式来清除全局没用的样式 比如 body 上的 margin 等

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
