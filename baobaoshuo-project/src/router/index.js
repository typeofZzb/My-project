import Vue from "vue";
import Router from "vue-router";
import {babylook,song,story,childrenaudio,songs,storys,songDetails, babylisten,person,detailsList,songDetail} from "../views/index"

Vue.use(Router);


const router=new Router({
    mode:"history",
    routes:[
        {
            path:"/",
            redirect:"/babylook"
        },
        {
            path:"/babylook",
            component:babylook,
            children:[
                {
                    path:"/babylook",
                    redirect:{ name: 'song' }
                },
                {
                    path:"song",
                    name:"song",
                    component:song
                },
                {
                    path:"story",
                    component:story
                },
                {
                    path:"childrenaudio",
                    component:childrenaudio
                },
            ]
        },
        {
            path:"/person",
            component:person
        },
        {
            path:"/details",
            name:"detailsList",
            component:detailsList
        },
        {

            path:"/babylisten",
            component:babylisten,
            children:[
                {
                    path:"/babylisten",
                    redirect:{ name: 'songs' }
                },
                {
                    path:"songs",
                    name:"songs",
                    component:songs
                },
                {
                    path:"storys",
                    component:storys
                }
            ]
        },
        {
            path:"/songDetail",
            name:"songDetails",
            component:songDetails
        },
        {
            path:"/songList",
            name:"songList",
            component:songDetail
        }
    ]
})
export default router;