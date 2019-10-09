<template>
    <div class="banner-list">
        <div class="list-lazy" v-if="!timer">图片已过期</div>
        <div class="list-top">
            <img :src="item.image"/>
        </div>
        <div class="list-center">
            <h4>{{item.active_name}}</h4>
            <p>你是最棒的</p>
        </div>
        <div class="list-bottom">
            <span class="iconfont icon-xiazai"></span>
            <span class="iconfont icon-bianji1"></span>
            <span class="iconfont icon-fenxiang11"></span>
            <span class="iconfont icon-share"></span>
        </div>
    </div>
</template>
<script lang="ts">
import {Vue,Component} from 'vue-property-decorator';
@Component({
    props:{
        item:{
            type:Object,
            default:""
        }
    },
    computed:{  
        timer(){
            return (new Date(this.item.start_time)*1 < new Date()*1) && (new Date(this.item.end_time)*1 > new Date()*1)
        }   
        
    }
})
class BannerList extends Vue {
    
}
export default BannerList;
</script>
<style lang="scss">

.banner-list{
    width: 19%;
    height: 290px;
    border:1px solid #ccc;
    margin-left:33px;
    margin-top:31px;
    display: flex;
    flex-direction: column;
    position: relative;
    >.list-top{
        width: 100%;
        height: 160px;
        >img{
            width: 100%;
            height: 100%;
        }
    }
    >.list-center{
        width: 100%;
        height:90px;
        display: flex;
        flex-direction: column;
        text-indent:20px;
        >h4{
            width: 100%;
            height: 50%;
            font-weight: 500;
        }
        >p{
            width: 100%;
            height: 50%;
            font-size:12px;
        }
    }
    >.list-bottom{
        flex:1;
        display:flex;
        justify-content: space-around;
        align-items: center;
    }
}
.list-lazy{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    text-align: center;
    line-height: 290px;
    color:#fff;
    position: absolute;
    top:0;
    left:0;
}
</style>

