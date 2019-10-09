import Vue from "vue";
import Vuex from "vuex";
import exam from "./modules/exam"
import questions from "./modules/questions"
import user from "./modules/user"
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        exam,
        questions,
        user
    }
})