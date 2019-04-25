import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "../components/layout/Layout";

export const constantRouterMap = [
  // 报表
  {
    path: "/dashboard",
    component: Layout,
    meta: { title: "dashboard", icon: "dashboard" },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/dashboard"),
        meta: { title: "dashboard", icon: "dashboard" }
      }
    ]
  }
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
