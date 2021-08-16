import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sign from "../views/Sign.vue";
import Store from "../views/Store.vue";
import Mypage from "../views/Mypage.vue";
import Histroy from "../views/History.vue";
import Orderlist from "../views/Orderlist.vue";
import Index from "../views/Index.vue"
import Dashboard from "../views/Dashboard.vue";
Vue.use(VueRouter);

const routes = [
  { path: '/sign', name: 'Sign', component: Sign,},
  { path: '/home', name: 'Home', component: Home,
    children:[
      { path: 'dashboard', name: 'Dashboard', component: Dashboard },
      { path: 'store', name: 'Store', component: Store },
      { path: 'mypage', name: 'Mypage', component: Mypage },
      { path: 'history', name: 'Histroy', component: Histroy },
      { path: 'order', name: 'Orderlist', component: Orderlist },

      ],
  },
  { path: '/', name: 'Index', component: Index },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
