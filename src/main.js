import Vue from "vue";
import VCharts from "v-charts";

// 地图
import BaiduMap from "vue-baidu-map";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import i18n from "./lang";
import { global } from "@/global/global";

Vue.use(VCharts);
Vue.use(ElementUI, { locale });
// 地图
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "aEqbp6FKpETwT7Y8vDYDks8I5SoWxihk"
});

Vue.use(ElementUI, {
  size: "medium", // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
});
// 加载用户主题
if (localStorage.getItem("themeValue")) {
  global.changeTheme(localStorage.getItem("themeValue"));
} else {
  global.changeTheme("default");
}
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
