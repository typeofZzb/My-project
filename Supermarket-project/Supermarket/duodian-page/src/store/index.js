import Vuex from "vuex";
import Vue from "vue"
import home from "./modules/home"
import classification from "./modules/classification"
import car from "./modules/car"
import user from "./modules/user"
Vue.use(Vuex);


const store = new Vuex.Store({
   modules:{
        home,
        classification,
        car,
        user
   }
})

export default store;