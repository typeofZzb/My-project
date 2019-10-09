<template>
  <div class="showUser">
    <h3>用户展示</h3>
    <el-tabs v-model="activeName" class="showUser-tab" @tab-click="handleClick">
    <el-tab-pane :label="item.title" :name="item.name" :interface="item.interface"
     v-for="(item, index) in list" :key="index">
        <h2>{{item.title}}</h2>
        <el-table
          :data="show_user_list.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          style="width: 100%" v-if="show_user_list.length > 0">
          <el-table-column
            :prop="item.prop"
            :label="item.title"
            :width="item.wid" v-for="(item,ind) in show_user_listkeys_title" :key="ind">
          </el-table-column>
        </el-table>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          layout="total, prev, pager, next, jumper"
          :total="show_user_list.length">
        </el-pagination>
      </el-tab-pane>
    </el-tabs> 
  </div>
</template>
<script>
import { mapActions,mapState } from 'vuex'
export default {
    props: {

    },
    components: {

    },
    data () {
        return {
            activeName: 'first',
            currentPage: 1,
            pagesize: 10,
            ind: 0,
            list: [
                {
                    title: '用户数据',
                    interface: '/api/user/user',
                    name: 'first'
                },
                {
                    title: '身份数据',
                    interface: '/api/user/identity',
                    name: 'second'
                },
                {
                    title: 'api接口权限',
                    interface: '/api/user/api_authority',
                    name: 'third'
                },
                {
                    title: '身份和api接口关系',
                    interface: '/api/user/identity_api_authority_relation',
                    name: 'fourth'
                },
                {
                    title: '视图接口权限',
                    interface: '/api/user/view_authority',
                    name: 'fiveth'
                },
                {
                    title: '身份和视图权限关系',
                    interface: '/api/user/identity_view_authority_relation',
                    name: 'sixth'
                }
            ]
        }
    },
    computed: {
        ...mapState("user",["show_user_list","show_user_listkeys_title"])
    },
    methods: {
        ...mapActions("user",[
            'show_user_getdata'
        ]),
        handleCurrentChange: function (currentPage) {
            this.currentPage = currentPage;
        },
        handleClick (tab) {
            let ind = +tab.index;
            this.ind = ind;
            this.currentPage = 1
            this.show_user_getdata({port: tab.$attrs.interface, ind: ind})
        }
    },
    created () {
        this.show_user_getdata({port: this.list[this.ind].interface, ind: this.ind});
      

    }
}
</script>
<style scoped lang="scss">

.showUser{
  display: flex;
  line-height: 30px;
  flex-direction: column;
  font-size: 14px;
    h3{
        font-size: 20px;
        font-weight: normal;
        text-align: left;
        height: 60px;
        line-height: 60px;
        margin-bottom: 20px;
    }
    .showUser-tab{
        h2{
            font-size: 20px;
            font-weight: normal;
            text-align: left;
        }
        .el-tabs__content{
           >div{
                width: 100%;
           }
        }
    }
}

 
</style>


