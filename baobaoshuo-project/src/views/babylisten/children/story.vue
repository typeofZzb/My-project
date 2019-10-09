<template>
    <div class="story">
        <template v-if="songlist.length>0">
            <BLSitem v-for="(item,index) in songlist" :key="index" 
                 :id="item.id"
                 :name="item.name"
                 :playcnt="item.id"
                 :index="index+1"
                 artist="儿童故事"
            />
        </template>
        <div v-else class="img">
             <img src="@/static/images/loading.gif" alt="">
        </div>
    </div>
</template>
<script>
import api from "@/api/index";
export default {
    data(){
        return {
              songlist:[]
        }
    },
    created(){
         api.getlistenStory("getlist",30,6).then((res)=>{
            this.songlist= res.data.nav.slice(1);
        })
    }
};
</script>