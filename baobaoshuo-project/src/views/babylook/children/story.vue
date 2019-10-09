<template>
    <div class="main">
        <MyBScroll @scrollLoad="scrollLoad">
            <template v-if="babylookstorylist.length>0">
                 <BLSitem v-for="(item,index) in babylookstorylist" :key="index" 
                    :artist="item.artist"
                    :downurl="item.downurl"
                    :id="item.id*1"
                    :name="item.name"
                    :pic="item.pic" 
                    :playcnt="item.playcnt"
                    :index="index+1"
                    @storydetail="storydetail"
                />
            </template>
            <div v-else class="img">
                <img src="@/static/images/loading.gif" alt="">
            </div>
        </MyBScroll>
        <div class="story_mask" v-if="storyFlag" @click.self="storyShow">
            <video :src="downurl"
            controls
            autoplay
            ></video>
        </div>
    </div>
  
</template>
<script>
import api from '@/api'
export default {
    data(){
        return {
            pagesize:30,
            collectid:27,
            babylookstorylist:[],
            storyFlag:false,
            downurl:''
        }
    },
    methods:{
        scrollLoad(){
            this.pagesize+=30;
            this.getData()
        },
        storydetail(downurl){
            this.storyFlag=true;
            this.downurl=downurl
        },
        storyShow(){
            this.storyFlag=false;
        },
        getData(){
            api.getbabylookstory(this.pagesize,this.collectid).then((res)=>{
               
                setTimeout(()=>{
                   this.babylookstorylist=res.data.list.slice(1)
                },2000)
            })
        }
    },
    created(){
        this.getData()
    }
};
</script>
<style scoped lang="scss">
.story_mask{
    width: 100%;
    height: 100%;
}
.story_mask{
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    video{
        width: 100%;
        height: 260px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 99;
    }
}
</style>