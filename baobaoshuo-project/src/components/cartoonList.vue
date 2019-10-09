<template>
    <div class="cartoon_item" v-if="title" @click="goToDetailsList(title.tracks,title.id,title.name)">
       <div class="img">
            <img v-lazy="title.pic" alt="">
            <span class="score">{{title.score}}分</span>
       </div>
       <div class="title">
           <h4 >{{ind+1}}.{{title.name}}</h4>
            <p >共{{title.tracks}}集</p>
       </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:Object,
            value:{}
        },
        ind:{
            type:Number,
            value:0
        }
    },
    components:{

    },
    data(){
        return {

        };
    },
    computed:{

    },
    methods:{
        goToDetailsList(pagesize,id,title){
            this.$router.push(`/details?pagesize=${pagesize}&id=${id}&title=${title}`);
        }
    },
    created(){

    },
    mounted(){

    }
};
</script>
<style scoped lang="scss">
.cartoon_item{
    width: 46%;
    height: 152px;
    float: left;
    // background: #ccc;
    margin: 10px 0 0 10px;
    display: flex;
    flex-direction: column;
    .img{
        width: 100%;
        height: 100px;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        .score{
            width: 30px;
            height: 16px;
            font-size: 11px;
            background: #fff;
            color:red;
            line-height: 16px;
            text-align: center;
            position: absolute;
            z-index: 11;
            right: 8px;
            bottom: 5px;
            border-radius: 5px;
        }
    }
    .title{
        flex: 1;
        box-sizing: border-box;
        padding-left: 10px;
        h4{
            font-size: 16px;
            padding: 8px 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap;
            width: 100%;
        }
        p{
            font-size: 12px;
            color:#666;
        }
    }
}
</style>