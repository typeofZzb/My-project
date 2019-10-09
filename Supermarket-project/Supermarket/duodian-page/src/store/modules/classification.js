import api from "@/api/";
const classification={
    namespaced: true,
    state: {
        //分类页面分类
        shopTypeList: [],
        //筛选分类页面商品
        selectType:[],
        //筛选分类页面商品 id
        type_id:"",
        children:[],
        

    },
    mutations: {
        //分类页面分类
        set_shopType_mutations(state,opt){
            state.shopTypeList=opt;
            opt[0].children.unshift({
                name:"全部",
                id:""
            })
            state.children= opt[0].children;

        },
        //筛选分类页面商品
        set_selectType_mutations(state,opt){
           
            state.selectType=opt;
        },
        //切换右边商品类型
        set_shopChildren_mutations(state,opt){
            state.children= opt;
        }
    },
    getters:{
         //分类页面分类
        get_shopType_list(state){
            return state.shopTypeList
        },
         //筛选分类页面商品
        get_selectType_list(state){
            return state.selectType
        }
    },
    actions: {
       //分类页面分类
        set_shopType_actions({commit}){
            api.ShopType().then(({ data }) => {
               commit("set_shopType_mutations",data)
            })
        },
        //筛选分类页面商品
        set_selectType_actions(state,obj){
            api.SelectType(obj).then(({ data }) => {
                state.commit("set_selectType_mutations",data)
            });
        },
    },

}
export default classification;