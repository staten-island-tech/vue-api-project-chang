import Vue from "vue";
import VueRouter from "vue-router";
// import Births from "../views/historicalBirths.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/births",
    name: "Births",
    component: () => import("../views/historicalBirths.vue"),
  },
  {
    path: "/deaths",
    name: "Deaths",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/deaths.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/home.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
var myMixin;= {
  return {
    index: 0,
  }
method: {
  increaseIndex() {
    this.index = this.index++;

    if (this.index > this.index.length) {
      alert("you can't do that");
      return;
    }
  },
  decreaseIndex() {
    this.index = this.index--;
    if (this.index < 0) {
      alert("you can't do that");
      return;
    }
  },
},
}

var Component = Vue.extend ({
  mixins: [myMixin]
});

export default router;
