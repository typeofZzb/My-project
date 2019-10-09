<template>
    <div class="right">
        <div class="banner-header">
            <div class="header-top">
                <p>首页/运营管理/banner/</p>
            </div>
            <div class="header-bottom">
                <div class="header-left">首页banner</div>
                <div class="header-right">
                    <button class="addBanner" @click="openFn">
                        <span>+</span>添加banner
                    </button>
                    <my-dialog v-show="dialogFormVisible" @submitAdd="submitAdd"/>
                </div>
            </div>
        </div>
        <div class="banner-main" >
            <template v-if="homeShopBanner_GETTERS">
              <my-bannerList  v-for="(item,index) in homeShopBanner_GETTERS" :key="index" :item="item"></my-bannerList>
            </template>
            <template v-else>没有商品</template>
        </div>
        <div class="banner-page">
            <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import MyBannerList from "@/components/bannerList/index.vue";
import MyDialog from "@/components/dialog/index.vue";
import { namespace } from "vuex-class"
const someModule = namespace("home");

@Component({
  components: {
    MyBannerList,
    MyDialog
  },
  mounted() {
    // 关闭添加banner
    this.$bus.$on("closeDialog",()=>{
      this.dialogFormVisible = false
    })
  },
  methods:{
    async submitAdd(obj){
      await this.addShopBanner_ACTIONS(obj);
      await this.homeShopBanner_ACTIONS();
    }
  }
})
class Banner extends Vue {
  // 进入首页渲染
  created(){ 
    this.homeShopBanner_ACTIONS();
  }
  // 获取banner最初数据
  @someModule.Action('homeShopBanner_ACTIONS') homeShopBanner_ACTIONS!:any;
  @someModule.Getter('homeShopBanner_GETTERS') homeShopBanner_GETTERS!:any;
  // addBanner
  @someModule.Action('addShopBanner_ACTIONS') addShopBanner_ACTIONS!:any;

  // 控制弹框的显示隐藏
  dialogFormVisible = false;
  // 点击添加banner控制弹框显示
  openFn() {
    this.dialogFormVisible = true;
  }
  
}
export default Banner;
</script>
<style lang="scss" >
.el-dialog__body {
  width: 500px;
  margin: 0 auto;
  .el-form {
    width: 100%;
    .add-list>.el-form-item__content {
      width: 100%;
      height: 50px;
        // margin-left:0px;
      display: flex;
      > .add-left {
        width: 100px;
        height: 100%;
      }
      > .add-right {
        flex: 1;
        input{
         width: 300px;
        }
      }
    }
  }
}
.el-dialog__footer {
 margin:0 auto;
}
.avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409eff;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
     width: 300px;
      height: 200px;
      vertical-align: middle;
      text-align: center;
    }
    .avatar {
      width: 300px;
      height: 200px;
      display: block;
    }
.wrap {
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .banner-header {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #dcdcdc;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 5px 10px red insert;
    .header-top {
      width: 100%;
      height: 30%;
      color: #999;
      font-size: 12px;
    }
    .header-bottom {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-right {
        .addBanner {
          width: 120px;
          height: 40px;
          background: #1890ff;
          color: #fff;
          border: 0;
          border-radius: 5px;
        }
      }
    }
  }
  .banner-main {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    .banner-list {
      width: 250px;
      height: 290px;
      border: 1px solid #ccc;
      margin-left: 33px;
      margin-top: 31px;
      display: flex;
      flex-direction: column;
      > .list-top {
        width: 100%;
        height: 160px;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      > .list-center {
        width: 100%;
        height: 90px;
        display: flex;
        flex-direction: column;
        text-indent: 20px;
        > h4 {
          width: 100%;
          height: 50%;
          font-weight: 500;
        }
        > p {
          width: 100%;
          height: 50%;
          font-size: 12px;
        }
      }
      > .list-bottom {
        flex: 1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        > span:hover {
          color: #1890ff;
        }
      }
    }
  }
  .banner-page {
    width: 100%;
    height: 150px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
