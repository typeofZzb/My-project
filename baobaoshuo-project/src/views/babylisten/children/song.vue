<template >
    <div >
          <template v-if="babyList.length>0">
              <BLSitem v-for="(item,index) in babyList" :key="index" 
                 :artist="item.artist"
                 :downurl="item.downurl"
                 :id="item.id*1"
                 :name="item.name"
                 :pic="item.pic" 
                 :playcnt="item.playcnt"
                 :index="index+1"
                 flag='songItem'        
            />
          </template>
            <div v-else class="img">
                  <img src="@/static/images/loading.gif" alt="">
              </div>
          
    </div>
</template>
<script>
import api from "@/api/index"
import { setTimeout } from 'timers';
export default {
    data(){
        return {
            babyList:[],

        }
    },
    created(){
        api.getlistenData("getlist",50,6).then(({data:{list}})=>{
            setTimeout(()=>{
                this.babyList = list.slice(1)
            },2000)
        })
    }
};
</script>
