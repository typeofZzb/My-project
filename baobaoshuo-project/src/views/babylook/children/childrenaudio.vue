<template>
    <div class="main">
        <template v-if="CartoonList.length>0">
            <Cartoon-item 
                v-for="(item,index) in CartoonList"
                :key="item.id"
                :title="item"
                :ind="index"
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
            CartoonList:[],
            pageSize:30
        };
    },
    created(){
        api.Cartoon(this.pageSize).then(res=>{
           
            setTimeout(()=>{
                this.CartoonList=res.data.list.slice(1)
            },2000)
        });
    }
};
</script>