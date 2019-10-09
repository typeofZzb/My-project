import BaseUi from "../components"
export default {
    install(Vue){
        Object.keys(BaseUi).forEach(componentItem=>
            Vue.component(componentItem,BaseUi[componentItem])
        )
    }
}