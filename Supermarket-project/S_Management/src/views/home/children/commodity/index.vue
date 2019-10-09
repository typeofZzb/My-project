<template>
  <div class="right">
    <div class="foodlist">
      <h2>商品列表</h2>
      <div class="primary">
        <el-form :inline="true" :model="formInline" class="demo-form-inline" :rules="searchRule">
          <el-form-item label="商品名称" prop="content">
            <el-input v-model="formInline.content" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="optionsValue" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
          </el-form-item>
          <el-button
            class="addBanner"
            @click="$router.push({
                name:'addshop'
            })"
          >
            <span>+</span>添加商品
          </el-button>
        </el-form>
      </div>
      <div>
        <!-- 表格 -->
        <el-table
          :data="allShop_GETTERS.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          style="width: 100%"
          @row-click="details"
          fit
        >
          <el-table-column width="350" label="商品信息" header-align="center">
            <template slot-scope="scope">
              <div class="left">
                <img :src="scope.row.cover" alt="">
              </div>
              <div class="right">
                <p class="names">{{scope.row.name}}</p>
                <p class="title">HPP超高压技术 · 锁住水果新鲜滋味</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="价格" width="110">
            <template slot-scope="scope">￥{{scope.row.price}}</template>
          </el-table-column>
          <el-table-column prop="volume" label="销量" width="110"></el-table-column>
          <el-table-column prop="stock" label="库存" width="110"></el-table-column>
          <el-table-column prop="status" label="状态" width="110"></el-table-column>
          <el-table-column label="更新时间" width="120">
            <template slot-scope="scope">{{new Date().toLocaleDateString()}}</template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <p
                :style="{
                        'color':'rgba(24,144,255,1)',
                        'cursor': 'pointer'
                    }"
              >
                <span
                  :style="{
                            'margin-right':'10px',
                        }"
                >上架</span>
                <span >编辑</span>
              </p>
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: center;margin-top: 20px;">
          <el-pagination
            background=""
            layout="prev, pager, next, jumper, ->, total"
            :total="allShop_GETTERS.length"
            @current-change="current_change"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { Action, namespace, Getter } from "vuex-class";
import api from "@/api/";
const someModule = namespace("home");
@Component
class Commodity extends Vue {
  formInline = {
    content: "",
    region: ""
  };
  total = 0; //默认页数
  pagesize = 7; //条数
  currentPage = 1; //页数
  optionsValue = "";
  options = [
    {
      value: "选项1",
      label: "黄金糕"
    },
    {
      value: "选项2",
      label: "双皮奶"
    },
    {
      value: "选项3",
      label: "蚵仔煎"
    },
    {
      value: "选项4",
      label: "龙须面"
    },
    {
      value: "选项5",
      label: "北京烤鸭"
    }
  ];
  //监听搜索内容为不为空，为空再次发起请求 下面的就是监听的函数你需要监听多少个参数，就需要@watch多少下
  @Watch("formInline.content")
  watchCount(newVal: any) {
    if (newVal.trim() === "") {
      this.allShop_ACTIONS();
    }
  }
  //搜索内容的判断
  searchContent = (rule: any, value: any, callback: any) => {
    let reg = /^[\u4e00-\u9fa5]+/;
    if (!value) {
      callback(new Error("请输入您要搜索的商品"));
      return;
    }
    if (!reg.test(value)) {
      callback(new Error("请输入正确格式:以汉字开头的内容"));
      return;
    }
  };
  searchRule = {
    content: {
      validator: this.searchContent,
      trigger: ["change", "blur"]
    }
  };
  @someModule.Action("allShop_ACTIONS")
  allShop_ACTIONS!: any;
  @someModule.Action("search_ACTION")
  search_ACTION!: any;
  @someModule.Getter("allShop_GETTERS")
  allShop_GETTERS!: any;
 

  current_change(currentPage: any) {
    this.currentPage = currentPage;
  }
  //详情页
  details(item: any,event: any,column: any){
   this.$router.push({
      name:"details",
      query:{
        id:item.id
      }
    })
  }
  //点击搜索按钮
  search() {
    this.search_ACTION({ search_key: this.formInline.content });
  }
  created() {
    this.allShop_ACTIONS();
  }
}
export default Commodity;
</script>
<style lang="scss" scoped>
.foodlist {
  width: 100%;
  height: 100%;
  .type-header {
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ededed;
    > div {
      font-weight: 900;
      font-size: 16px;
      float: left;
    }
    .el-button {
      float: right;
      margin-top: 10px;
      background: rgba(24, 144, 255, 1);
      color: #ffffff;
    }
  }
  .primary {
    width: 100%;
    display: flex;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #ccc;
    font-size: 20px;
    font-weight: 500;
  }
  .shopName,
  .state {
    width: 350px;
    height: 100%;
    display: flex;
    align-items: center;

    .el-input {
      width: 255px;
      height: 32px;

      input {
        width: 100%;
        height: 100%;
      }
    }
  }
.el-table{
  .cell {
    height: 70px;
    // display: flex;
    // flex-direction: 
    .left {
      width: 80px;
      height: 70px;
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      > p {
        flex: 1;
      }

      > p:nth-child(1) {
        font-size: 14px;
        font-weight: bold;
      }

      > p:nth-child(2) {
        font-size: 10px;
      }
    }
  }
}
  

}
</style>
