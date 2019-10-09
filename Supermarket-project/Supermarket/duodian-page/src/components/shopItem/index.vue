<template>
    <div class="list" v-if="option.type_id" @click="details(option)">
        <dt>
            <img :src="option.cover" alt=""/>
        </dt>
        <dd>
            <div class="title">
                <h4>{{option.name}}</h4>
                <span>累计{{volume}}万份/已拼{{option.stock}}份</span>
                <p>
                    <span>自营</span>
                    <span>团购</span>
                </p>
            </div>
            <div class="price">
               <p class="price_num">
                   <b>￥{{option.price}}</b>
                   <span v-if="option.old_price">￥{{option.old_price}}</span>
               </p>
               <p class="shop">
                   <span @click="addShop(option.id)">

                   </span>
               </p>
            </div>
        </dd>
        
    </div>
</template>
<script>

import {mapActions,mapGetters} from "vuex";

export default {
    props:{
        option:{
            type:Object,
            default:{}
        }
    },
    computed:{
        volume(){
            return (this.option.volume/10000).toFixed(2)
        },

    },
    // inject:["delShopCar"],
    methods:{
        addShop(id){
            this.$emit("addShop",id)
        },
        details(item){
            this.$router.push({
                name:"details",
                params:item
            })
        }
    },
    created(){
       
        // console.log(this.option)
    }
}
</script>
<style  lang="scss">
    .list{
       @include width(100%);
       @include height(pxTorem(152px));
       @include box_flex;
       @include sizing;
       dt{
           @include width(40%); 
           @include sizing;
           padding:pxTorem(12px); 
           img{
             @include width(100%);
             @include height(100%);  
           }
       }
       dd{
           flex: 1;
           @include width(100%);
           @include height(100%);
           @include box_flex;
          @include direction(column);
          div{
              &:first-child{
                  flex: 1;
                  >h4{
                      margin-top:pxTorem(14px) ;
                      font-size: pxTorem(16px);
                      font-weight: 500;
                  }
                  >span{
                      display: block;
                      padding:pxTorem(10px)  pxTorem(0px);
                      font-size: pxTorem(14px);
                      color:#A5A5A5;
                  }
                  >p{
                     @include height(pxTorem(14px));
                     font-size: pxTorem(10px); 
                     span{
                        padding:pxTorem(3px)  pxTorem(10px);
                        background: orangered;
                        color:#fff;
                        border-radius:pxTorem(8px);
                        margin-right: pxTorem(5px);
                     } 
                  }
              }
              &:last-child{
                @include height(pxTorem(40px));
                @include box_flex;
                 @include width(100%);
                // @include align;
                p{
                    flex: 1;
                }
                .price_num{
                     @include box_flex;
                    @include align;
                    b{
                        font-size:pxTorem(14px);
                        color:orangered; 
                        font-weight: 600;
                    }
                    span{
                        font-size:pxTorem(10px);
                        color:#A5A5A5;
                        margin-left:pxTorem(5px) ;
                        text-decoration:line-through 
                    }
                }
                .shop{
                   @include box_flex;
                    @include justify(flex-end);
                    @include align;
                     @include sizing;
                     padding-right:pxTorem(15px) ;
                   span{
                        @include height(pxTorem(34px));
                         @include width(pxTorem(34px));
                        border-radius: pxTorem(17px);
                        overflow: hidden;
                        background: url("../../static/img/shop_icon.png") no-repeat center;
                
                   }
                }
              }
          }
       }
        
    }
</style>


