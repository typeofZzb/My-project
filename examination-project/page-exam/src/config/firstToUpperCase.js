import Vue from "vue";
//vue filter过滤方法
Vue.filter("firstToUpperCase",(value,value1)=>{
    return value.substr(0,1).toUpperCase()+value.substr(1)+"--"+value1

})