
import Component from "@/components/";
// 全局注册组件
export default {
    install(Vue){
        Object.keys(Component).forEach(item=>{
            Vue.component(item,Component[item])
        })
    }
}