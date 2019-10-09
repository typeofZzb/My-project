import api from "@/api/";
//用来计算总价
const allPrice=(state)=>{
    return state.allCar.reduce((prev,cur)=>prev+(cur.flag && cur.shopdata.price*cur.count),0)
}
//用来计算总数
const allCount=(state)=>{
    return state.allCar.reduce((prev,cur)=>prev+(cur.flag && cur.count),0)
}

const car={
    namespaced: true,
    state: {
        //获取购物车商品
        allCar:[],
        //总价
        allPrice:0,
        //总数量
        allCount:0,
        //全选
        allCheck:false

    },
    mutations: {
        //添加/删除购物车或者增加件数
        add_addCar_mutations(state,opt){
            let {flag,id}=opt
           let data=state.allCar.filter(item=>{
                if(item.shopdata.id===id){
                    if(flag){
                        item.count++;
                    }else {
                        item.count--;
                        if( item.count<=0){
                            item.count=1
                        }
                    }
                }
                return item;
            })
            state.allCar= data;
            //总价
            state.allPrice=allPrice(state)
            //总件数
            state.allCount=allCount(state)
        },
        //获取购物车商品
        add_allCar_mutations(state,opt){
            state.allCar=opt.filter(item=>{
               item.flag=( state.allCar.length && state.allCar.find(val=>val.id==item.id).flag) || false;
               return item;
           });
         
          
        },
        //单选按钮 选中 类型切换
        checkbox_type_mutations(state,id){
            let data=state.allCar.filter(item=>{
                if(item.shopdata.id===id){
                    item.flag=!item.flag;
                }
                return item;
            })
            state.allCar= data;
            //全选
            state.allCheck= state.allCar.every(item=>item.flag)
            //总价
            state.allPrice=allPrice(state)
            //总件数
            state.allCount=allCount(state)

        }, 
        //全选
        allCheck_mutations(state){
            state.allCheck=!state.allCheck;
            state.allCar.filter(item=>{
                item.flag=state.allCheck;
                return item;
            })
             //总价
             state.allPrice=allPrice(state)
             //总件数
             state.allCount=allCount(state)
        },
        //删除购物车商品
        del_removeShop_mutations(state,id){
            let data=state.allCar.filter(item=>{
                if(item.shopdata.id!==id){
                        return item;
                }
            })
            state.allCar= data;
             //总价
             state.allPrice=allPrice(state)
             //总件数
             state.allCount=allCount(state)
        },
    },
    getters:{
         //总价
         all_allPrice_getters(state){
           return state.allPrice
        },
        // 总数量
        all_allCount_getters(state){
            return state.allCount
        },
        //获取购物车商品
        add_allCar_getters(state){
           return state.allCar
          
        },
      
         //全选
        all_allCheck_getters(state){
            return state.allCheck
        },
    },
    actions: {
       //添加购物车或者增加件数
        add_addCar_actions(state,obj){
            api.AddCar(obj).then(() => {
                // state.commit("add_addCar_mutations",data)
            });
        },
        //获取购物车商品
        add_allCar_actions(state,obj){
            api.AllCar(obj).then(({data}) => {
                state.commit("add_allCar_mutations",data)
            });
        },
        //删除购物车商品
        del_removeShop_actions(state,obj){
            api.RemoveShop(obj).then(() => {
                // state.commit("set_selectType_mutations",data)
            });
        },
        //删除购物车商品件数
        del_removeCar_actions(state,obj){
            api.RemoveCar(obj).then(() => {
                // state.commit("set_selectType_mutations",data)
            });
        },
    },

}
export default car;