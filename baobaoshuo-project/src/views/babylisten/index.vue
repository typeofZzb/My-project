<template>
    <div class="wrap">
        <div class="header">宝宝听</div>
        <div class="navListen">
            <router-link v-for="(item,index) in navList" 
                :key="index"
                :to="item.link"
                tag="span"
            >{{item.title}}</router-link>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
        <My-foot/>
    </div>
</template>
<script>
export default {
    data(){
        return {
            navList:[
                {
                    title:"儿歌",
                    link:"songs"
                },
                {
                    title:"故事",
                    link:"storys"
                }
            ]
        }   
    }
}
</script>
<style lang="scss">
    .navListen{
        width: 100%;
        height: 40px;
        text-align: center;
        >span{
            padding:5px 10px;
            border:1px solid red;
            font-size: 14px;
        }
        .router-link-active{
            background: red;
            color:#fff;
        }
    }
    .header,.nav{
    width: 100%;
    height: 44px;
}
.header{
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav{
    background: green;
    font-weight: 800;
}
.nav{
    display: flex;
    div{
        flex: 1;
       display: flex;
        justify-content: center;
        align-items: center;
    }
    .router-link-active{
        color:red
    }
}

.main{
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>