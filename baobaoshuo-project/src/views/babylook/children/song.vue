<template>
  <div class="main">
      <MyBScroll @scrollLoad="scrollLoad">
        <template v-if="list.length>0">
           <BLSitem v-for="(item,index) in list" :key="index" 
                 :artist="item.artist"
                 :downurl="item.downurl"
                  :id="item.id*1"
                 :name="item.name"
                 :pic="item.pic" 
                 :playcnt="item.playcnt"
                 :index="index+1"
                 type="song"
                 flag="song_erge"
            />
        </template>
        <div v-else class="img">
             <img src="@/static/images/loading.gif" alt="">
        </div>
      </MyBScroll>
  </div>
  
</template>
<script>
import api from '@/api';
import { setTimeout } from 'timers';
export default {
    data(){
        return {
            pagesize:20,
            collectid:29,
            list:[]
        }
    },
    methods:{
       scrollLoad(){
            this.pagesize+=30;
            this.getData()
        },
        getData(){
            api.getSong(this.pagesize,this.collectid).then(res=>{
                setTimeout(()=>{
                    this.list = res.data.list.slice(1)
                },2000)
            })
        }    
    },
    created(){    
         this.getData()
    }  
};
</script>