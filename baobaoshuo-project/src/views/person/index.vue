<template>
    <div class="wrap">
        <div class="header">我的</div>
        <div class="main">
            <ul>
                <li>我的下载</li>
                <li>我的收藏</li>
            </ul>
            <ol>
                <li>清除缓存</li>
                <li>关于我们</li>
            </ol>
            <button>退出应用</button>
        </div>
        <My-foot/>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.main{
    width:100%;
    height: 100%;
    background: #eee;
}
    ul{
        width:100%;
        height: 80px;
        padding-left:10px;
        background: white;  
        margin-top:10px;
        
        li{
            width:100%;
            height: 40px;
            line-height: 40px;
        }
    }
    ol{
        width:100%;
        height: 80px;
        padding-left:10px;
        list-style: none;
        margin-top:50px;
         background: white;  
        
        li{
            width:100%;
            height: 40px;
            line-height: 40px;
        }
    }
    button{
        width:100%;
        height: 50px;
        background: red;
        border:none;
        margin-top:10px;
        font-size: 16px;
        color:white;
    }
</style>
