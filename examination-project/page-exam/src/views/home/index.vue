<template>
    <div class="wrap">
        <el-container class="wrapper">
            <el-header>
                <el-container>
                    <el-header style="text-align: right; font-size: 16px">
                    <el-dropdown :hide-on-click="false" placement="bottom">
                         <span class="el-dropdown-link" >{{userInfo.user_name,userInfo.identity_text | firstToUpperCase}}</span>
                        <el-dropdown-menu slot="dropdown" style="font-size: 14px;width:152px; text-align: center; line-height:32px">
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item>我的班级</el-dropdown-item>
                            <el-dropdown-item>设置</el-dropdown-item>
                            <el-dropdown-item>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    
                    </el-header>
                </el-container>
            </el-header>
            <el-container class="main">
                <el-aside width="200px">
                    <el-menu 
                        default-active="$route.path"
                        background-color="#232A41"
                        text-color="#ccc"
                        active-text-color="#fff"
                        router
                    >
                        <el-submenu  
                            v-for="(item,ind) in UserinfoNew"
                            :index="ind+''"
                            :key="ind"
                        >
                            <template slot="title"><i :class="item.icon" ></i>{{item.title}}</template>
                            <el-menu-item-group >
                                <el-menu-item  
                                    v-for="(val,key) in item.list"
                                    :key="key"
                                    :index="ind+'-'+key" 
                                    :route="'/home/'+val.path"
                                    style="height: 50px;line-height: 50px;"
                                >{{val.meta.title}}</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main class="router">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
 
    </div>
</template>
<script>
import subrouting from "@/router/subrouting";
import {getUserinfoNew} from "@/utils/userinfo"

export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            userInfo:{},
            UserinfoNew:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
        let list=subrouting.getMenuData();
        this.UserinfoNew=list;
        this.userInfo=getUserinfoNew().data;
    
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.wrap,.wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // overflow: hidden;
    .el-header {
        background:url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg") no-repeat left;
        background-size: 160px;
        background-position: 50px center;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .main{
        flex: 1;
        overflow: hidden;
        display: flex;
        .router{
            flex: 1;
            overflow: auto;
        }

    }
    .el-dropdown{
        text-align: center;
        margin-right: 100px;
        .el-dropdown-link {
            cursor: pointer;
            color: #409EFF;
        }
    }
    

    .el-aside {
        // color: rgba(255, 255, 255, 0.65);
        background: #232A41;
        text-align: center;
        line-height: 200px;
        font-size: 14px;
    }
    
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        line-height: 160px;
        flex: 1;
        overflow: hidden;
    }
    
    body > .el-container {
        margin-bottom: 40px;
    }
    
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
    
    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    

    
}
</style>