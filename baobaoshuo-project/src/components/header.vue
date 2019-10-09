<template>
    <div class="songHeader">
        <span @click="backFn()">《 宝宝说</span>
        <p><slot></slot></p>
    </div>
</template>
<script>
export default {
    methods:{
        backFn(){
            this.$router.back()
        }
    }
}
</script>
<style lang="scss">
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
</style>