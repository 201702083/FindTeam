import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import Sign from "../views/Sign.vue";
import SignUp from "../views/SignUp.vue";

import Team from "../views/Team.vue";
import Mypage from "../views/Mypage.vue";
import Event from "../views/Event.vue";
import Orderlist from "../views/Orderlist.vue";
import Index from "../views/Index.vue"
import Status from "../views/Status.vue";
Vue.use(VueRouter);

const routes = [
  { path: '/home', name: 'Home', component: Home,
    children:[
      { path: 'signin', name: 'SignIn', component: SignIn,},
      { path: 'sign', name: 'Sign', component: Sign,},
      { path: 'signup', name: 'SignUp', component: SignUp,},
      { path: 'status', name: 'Status', component: Status },
      { path: 'team', name: 'Team', component: Team },
      { path: 'mypage', name: 'Mypage', component: Mypage },
      { path: 'event', name: 'Event', component: Event },
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
