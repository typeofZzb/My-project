<template>
    <div class="header">
         <h3 class="header_title">{{title}}</h3>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:"校园超市"
        }
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.header{
    @include width(100%);
    @include height(pxTorem(44px));
    @include box_flex;
    @include justify;
    @include align;
    .header_title{
        font-size:pxTorem(18px);
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(0,0,0,1);
    }
}
</style>