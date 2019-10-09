<template>
    <div class="wrap">
        <div class="header">宝宝看</div>
        <div class="nav">
            <router-link v-for="(item,index) in navList" 
                        :key="index"
                        :to="item.link"
                        tag="div"
            >{{item.title}}</router-link>
        </div>
        <router-view></router-view>
        <My-foot/>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            navList:[
                {
                    title:"儿歌",
                    link:"song"
                },
                {
                    title:"故事",
                    link:"story"
                },
                {
                    title:"动画片",
                    link:"childrenaudio"
                }
            ]
        }
    }
};
</script>
<style scoped lang="scss">
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