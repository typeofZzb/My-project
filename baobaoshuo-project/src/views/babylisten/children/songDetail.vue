<template>
    <div class="detail">
        <songHeader>{{this.$route.params.name}}</songHeader>
        <div class="header-audio">
            <span></span>
            <audio :src="this.$route.params.downurl" autoplay loop ref="song"></audio>
            <span></span>
        </div>
        <div class="main-audio">
            <div class="main-wrapper">
                <li v-for="(item,index) in songArr" :key="index" :class="index === ind?'active':''">{{item.text}}</li>
            </div>
        </div>
        <div class="detail-paly">
            <span>《</span>
            <span @click="playFn()">{{flag?'||':'△'}}</span>
            <span>》</span>
        </div>
    </div>  
</template>
<script>
import api from "../../../api/index"
import BScroll from "better-scroll"
export default {
    data(){
        return {
            songArr : [],// 歌词数据
            ind:null,  // 正在播放的歌词的下标
            flag:true  // 歌曲的暂停/播放
        }
    },
    created(){
        let {id} = this.$route.params;
        // 请求歌词详情数据
        api.getlistenSongStr(id).then(({data})=>{
            // 歌词数据
            let str = data.replace(/<\d+,-?\d+>/g,"")
            str.replace(/\[(\d+:\d+\.\d+)\]([^[]+)/g,($0,$1,$2)=>{
                this.songArr.push({
                    text:$2,
                    time:$1,
                    s:this.getSecond($1)
                })
            })
            // 给歌词加滚动效果
            this.better = new BScroll(".main-audio")
            // 控制歌词播放
            let music = this.$refs.song;
            music.addEventListener("timeupdate",()=>{
                let e = music.currentTime;
                this.ind = this.songArr.filter(item=>item.s<e).length - 1;
            })
        })
    },
    methods:{
        //  设置每一行的秒数
        getSecond(time){
            let m = time.split(":")[0] * 60;
            let s = time.split(":")[1] * 1;
            return (m + s).toFixed(2)
        },
        //  设置暂停/播放
        playFn(){
            if(this.flag){
                this.$refs.song.pause();
            }
            else{
                this.$refs.song.play();
            }
            this.flag = !this.flag;
        }
    }
}
</script>
<style lang="scss">
    .detail{
        width: 100%;
        height: 100%;
        display:flex;
        flex-direction: column;
    }
    .header-audio{
        width: 100%;
        height: 80px;
    }
    .main-audio{
        flex:1;
        overflow: hidden;
        li{
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            list-style: none;
        }
    }
    .detail-paly{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-around;
    }
    .active{
        color:red;
        font-size: 24px;
    }
</style>
