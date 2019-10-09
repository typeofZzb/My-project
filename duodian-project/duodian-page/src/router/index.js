import Vue from "vue";
import Router from "vue-router";
import {
    Home,
    Login,
    My,
    Search,
    ShoppingCart,
    Classification,
    Details,
    Seat
} from "../views/index";

Vue.use(Router);


const router=new Router({
    mode:"history",
    routes:[
        {//重定向
            path:"/",
            redirect:"/home"
        },
        {//详情
            path:"/details",
            components:Details,
            name:"details"
        },
        {//登录
            path:"/login",
            components:Login
        },
        {//首页
            path:"/home",
            components:Home
        },
        {//搜索
            path:"/search",
            components:Search
        },
        {//购物车
            path:"/shopping_cart",
            components:ShoppingCart
        },
        {//分类
            path:"/classification",
            components:Classification
        },
        {//定位
            path:"/seat",
            components:Seat
        },
        {//我的
            path:"/my",
            components:My
        }
    ]
})

export default router;