import api from "@/api/";
const home={
    namespaced: true,
    state: {
        //轮播图数据
        bannerList: [],
        //首页商品数据
        shopList:[],
        //条数
        pageid:0,
        //页数
        limit:10
    },
    mutations: {
        set_shop_mutations(state,opt){
            state.shopList= state.shopList.concat(opt);
        },
        set_banner_mutations(state,opt){
            state.bannerList=opt;
        },
        set_limit_mutations(state,opt){
            state.pageid=opt;
        },
    },
    getters:{
        get_shop_list(state){
            return state.shopList
        },
        get_banner_list(state){
            return state.bannerList
        }
    },
    actions: {
        //获取首页数据
        set_shop_actions({commit,state}){
            let obj={
                pageid:state.pageid,
                limit:state.limit
            }
            api.Shop(obj).then(({ data }) => {
               commit("set_shop_mutations",data)
            })
        },
        //获取banner 图片数据
        set_banner_actions({commit}){
            api.Banner().then(({ data }) => {
                data = data.filter(item => {
                  if (new Date(item.end_time) * 1 > new Date() * 1) {
                    return item;
                  }
             });
             commit("set_banner_mutations",data)
            });
        },
    },

}
export default home;