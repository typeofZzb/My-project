<template>
    <div class="wrap">
        <div class="songHeader">
            <span @click="backFn()">《 宝宝说</span>
            <p>{{title}}</p>
        </div>
        <div class="main">
              <template v-if="detaiList.length>0">
                 <BLSitem v-for="(item,index) in detaiList" :key="index" 
                        :artist="item.artist"
                        :downurl="item.downurl"
                        :id="item.id*1"
                        :name="item.name"
                        :pic="item.pic" 
                        :playcnt="item.playcnt"
                        :index="index+1"
                />
              </template>
                <div v-else class="img">
                    <img src="@/static/images/loading.gif" alt="">
                </div>
        </div>
    </div>
</template>
<script>
import api from "@/api/index";
export default {
    data(){
        return {
            title:"",
            detaiList:[]
        };
    },
    methods:{
        backFn(){
            this.$router.back()
        }
    },
     created(){
         let {pagesize,id,title}=this.$route.query;
         this.title=title;
         api.CartoonList(pagesize,id).then(({data:{list}})=>{
            
              setTimeout(()=>{
                    this.detaiList=list.slice(1)
                },2000)
         })
    }
};
</script>
<style scoped lang="scss">
.songHeader{
    width: 100%;
    height: 44px;
    background: #f9f9f9;
    display: flex;
    line-height: 44px;
    >span{
        width: 100%;
        height: 100%;
    }
    >p{
        flex:1;
        position: fixed;
        left:50%;
        transform: translateX(-50%);
    }
}
.main{
    flex: 1;
    overflow: auto;
}
</style>
