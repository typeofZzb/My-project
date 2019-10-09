import Vue from "vue";
import Router from "vue-router";
import subrouting from "./subrouting"; //子路由
import {getUserinfoNew,authorization} from "@/utils/userinfo" // 获取的用户信息
const {
    Login,
    Home,
    Permission,
    Hundred
}=require("@/views/index");
Vue.use(Router);
//首页守卫
const isLogin=(to,from,next)=>{
    //第一层判断   判断 authorization 用户标识对不对
    if(authorization() && authorization().split(".").length===3){
         next();
    //第二层判断   判断 用户有没有登录
    }else if(getUserinfoNew()){
        next();
    //否则 跳回登录重新登录
    }else{
        next("/login");
    }
   
}

const router=new Router({
    mode:"history",
    routes:[
        {//重定向路由到登录
            path:"/",
            redirect:"/login"
        },
        {//登录路由
            path:"/login",
            components:Login
        },
        {//首页
            path:"/home",
            components:Home,
            beforeEnter:isLogin,
            children:subrouting.subrouting
        },
        {//无权限
            path:"/permission",
            components:Permission
        },
        {//404
            path:"*",
            components:Hundred
        },
    ]
})


export default router;