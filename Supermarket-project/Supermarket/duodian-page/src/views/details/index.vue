<template>
    <div class="wrap">
        <Header class="header">{{this.$route.params.name}}</Header>
        <div class="main">
            <div class="detail-banner">
                <swiper ref="mySwiper" :options="swiperOption" class="swiper-container " >
                    <swiper-slide class="swiper-item" v-for='(item,index) of banner' :key='index'>
                        <img class='swiper-img' :src='item' :key="index" />
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <div class="detail-price">
                ￥{{this.$route.params.price}}
            </div>
            <div class="detail-name">
                {{this.$route.params.name}}
            </div>
        </div>
        <div class="detail-footer">
            <p>
                <span>客服</span>
                <span>商家</span>
            </p>
            <button style="background:#f90">加入购物</button>
            <button style="background:red" @click="mai">立即购买</button>
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:"detail",
    props:{

    },
    components:{

    },
    data(){
        return {
            banner:[],
            swiperOption:{
                // 参数选项,显示小点
                notNextTict:true,
                //循环
                loop:true,
                //每张播放时长3秒，自动播放
                autoplay:2000,
                //滑动速度
                speed:1000,
                // delay:1000
            },
        }
    },
    computed:{

    },
    methods:{
        mai(){
            alert("臣妾买不了啊")
        }
    },
    created(){
        this.banner = JSON.parse(this.$route.params.pictures);
    },
    mounted(){

    }
}
</script>
<style lang="scss">
.header{
     font-size:pxTorem(20px);
     font-weight: 500;
     text-align: center;
     line-height: 40px;
}
.detail-banner{
    @include width(100%);
    @include height(pxTorem(254px));
    background: #fcc;
    img{
        @include width(100%);
        @include height(pxTorem(254px));
    }
    
}
.detail-price{
    @include width(100%);
    @include height(pxTorem(50px));
    font-size:pxTorem(16px);
    background: #fd4e28;
    border-top-left-radius: pxTorem(15px);
    border-top-right-radius: pxTorem(15px);
    color:#fff;
    line-height: pxTorem(50px);
    text-indent:pxTorem(15px);
}
.detail-name{
    @include width(100%);
    @include height(pxTorem(110px));
    line-height: pxTorem(70px);
    text-indent:pxTorem(15px);
     font-size:pxTorem(16px);
}
.detail-footer{
    @include width(100%);
    @include height(pxTorem(40px));
    display: flex;
    >p{
        flex:1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size:pxTorem(14px);
    }
    button{
        @include width(30%);
        @include height(100%);
        font-size:pxTorem(14px);
        border:none;
        color:white;
    }
}
</style>