<template>
    <div class="footer">
         <router-link v-for="(item,index) in List" 
                        :key="index"
                        :to="item.link"
                        tag="div"
            >{{item.title}}</router-link>
    </div>
</template>
<script>
export default {
    data(){
        return {
             List:[
                {
                    title:"宝宝看",
                    link:"/babylook"
                },
                {
                    title:"宝宝听",
                    link:"/babylisten"
                },
                {
                    title:"我的",
                    link:"/person"
                }
            ]
        }
    }
}
</script>
<style  lang="scss">
.footer{
     width: 100%;
    height: 44px;
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
</style>