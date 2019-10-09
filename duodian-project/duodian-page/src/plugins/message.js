import Dialog from './dialog.js'
export default {
    install(Vue){
        Vue.prototype.$message=function(options){
            return new Dialog(Vue,options)
        }
    }   
}