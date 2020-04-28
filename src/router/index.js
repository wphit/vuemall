import VueRouter from "vue-router"
import Vue from "vue";
import Home from "../pages/Home"
Vue.use(VueRouter);
let router = new VueRouter({
    routes:[
        {
            path:"/home",
            name:"Home",
            component:Home

        }
    ]
});

export default router;