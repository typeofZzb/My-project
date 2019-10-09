<template>
    <div class="wrap">
        <my-header :title="title"></my-header>
        <div class="main">
            <template v-if="userinfo">
                 <car-item 
                    v-for="item in add_allCar_getters" 
                    :key="item.id"
                    :shopdata="item.shopdata"
                    :count="item.count"
                    :flag="item.flag"
                    @countFn="countFn"
                    @checkBox="checkBox"
                ></car-item>
            </template>
            <template v-else>
                 <div>
                     未登录，请去进行
                     <router-link to="/login" tag="a">登录</router-link>
                 </div>
            </template>
        </div>
        <div class="sum">
            <span>
                <span :class="['ischeck',all_allCheck_getters?'actived':'']" @click="changeCheck" ></span>
                <b>全选</b>
            </span>
            <p>合计<span>￥</span><b>{{userinfo? all_allPrice_getters : 0}}</b></p>
            <button>结算({{all_allCount_getters}})</button>
        </div>

        <my-footer></my-footer>
    </div>
</template>
<script>
import {mapActions,mapGetters,mapMutations,mapState} from "vuex";
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            title:"购物车",
        }
    },
    computed:{
         ...mapGetters("car",["add_allCar_getters","all_allPrice_getters","all_allCount_getters","all_allCheck_getters"]),
         ...mapState("user",["userinfo"])
         
    },
    
    methods:{
        ...mapMutations("car",["add_addCar_mutations","checkbox_type_mutations","allCheck_mutations"]),
        ...mapActions("car",["add_allCar_actions","del_removeCar_actions","add_addCar_actions"]),
         ...mapActions("user",["getuserinfo"]),
        //全选
        changeCheck(){
            this.allCheck_mutations()
        },
         //添加数量与删除数量
        countFn(obj){
            let {flag,shopdata:{id}}=obj;
            this.add_addCar_mutations({flag,id})
            if(flag){ //添加购物车商品件数
                this.add_addCar_actions({
                    user_id:this.userinfo.uid,
                    shop_id:id
                })
            }else{//删除购物车商品件数
                this.del_removeCar_actions({
                    user_id:this.userinfo.uid,
                    shop_id:id
                })
            }
        },
        //单选
        checkBox(id){
          this.checkbox_type_mutations(id)
        }
    },
    async created(){
        await this.getuserinfo()
        this.add_allCar_actions({
            user_id:this.userinfo.uid
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.sum{
    @include width(100%);
    @include height(pxTorem(50px));
    display: flex;;
    background: #fff;
    
    >span{
        @include width(30%);
        @include height(100%);
         @include box_flex;
         @include align;
        @include justify;
        font-size:pxTorem(14px);
        >b{
            font-size:pxTorem(14px);
            margin-left:pxTorem(10px);
        }
        >.ischeck{
            
            display: inline-block;
            @include width(pxTorem(16px));
            @include height(pxTorem(16px));
            border:1px solid #999;
            border-radius: 50%;
        }
    }
    >p{
        @include width(40%);
        @include height(100%);
        font-size:pxTorem(14px);
        @include box_flex;
         @include align;
        @include justify;
        >span{
            color:#f90;
            font-size:pxTorem(14px);
        }
        >b{
            color:#f90;
            font-size:pxTorem(18px);
        }
    }
    >button{
        @include width(30%);
        @include height(100%);
        background: #f90;
        color:#fff;
        border:0;
        font-size:pxTorem(14px);
    }
}
.actived{
    background: #f90;
}
</style>