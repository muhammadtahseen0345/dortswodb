import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Projects from "./views/Projects.vue";
import Team from "./views/Team.vue";
import Dummy from "./views/Dummy.vue";
import About from "./views/About.vue";
import Trainer from "./views/Trainer.vue";
import Youtube from "./views/Youtube.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/Projects",
      name: "project",
      component: Projects
    },
    {
      path: "/Team",
      name: "team",
      component: Team
    },
    {
      path: "/Youtube",
      name: "youtube",
      component: Youtube
    },
    {
      path: "/Dummy",
      name: "dummy",
      component: Dummy
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     component: About 
    }, 
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    },
    
    {
      path: "/Trainer",
      name: "trainer",
      component: Trainer
    }
  ]
});
