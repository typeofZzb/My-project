import dialogConfig from '@/components/dialog/index.vue'
class Dialog{
    constructor(Vue,options){
        if(Dialog.instance instanceof Dialog){
            return Dialog.instance
        }
        Dialog.instance=this
        let dialogClass=Vue.extend(dialogConfig)
        let dialogComponent=new dialogClass({
            propsData:{
                type:options.type,
                message:options.message
            }
        });
        dialogComponent.$mount()
        let el=dialogComponent.$el;
        document.body.appendChild(el);
    }
}

export default Dialog