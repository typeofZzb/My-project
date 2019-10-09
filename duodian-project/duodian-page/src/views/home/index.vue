<template>
  <div class="wrap">
    <div class="img" v-if="mapimg">
      <img src="../../static/img/location.png" alt="">
    </div>
    <my-header></my-header>
    <div class="main">
      <my-bscroll @scroll="bscrollFn">
        <div class="search">
          <span></span>
          <div @click="toSeat">送至:{{local}}</div>
          <p></p>
        </div>
        <div class="home_banner">
          <swiper :options="swiperOption" v-if="get_banner_list.length>1">
            <!-- slides -->
            <swiper-slide v-for="item in get_banner_list" :key="item.id">
              <img :src="item.image">
            </swiper-slide>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="home_nav">
          <div class="home_nav_item" v-for="(item,index) in navData" :key="index">
            <span :style="'background-position-x:'+item.bg"></span>
            <b>{{item.title}}</b>
          </div>
        </div>
        <div class="hot-day">
          <div class="hot-top">
            <p>
              <img src="../../static/img/gou.png" alt="">
            </p>
            <span>大家都在买</span>
          </div>
          <div class="hot-bottom">
            <img src="../../static/img/hot.png" alt="">
          </div>
        </div>
        <div class="shop_nav"></div>
        <div class="shop_list">
          <shop-item v-for="(item,index) in get_shop_list" :key="index" :option="item" @addShop="addShop"></shop-item>
        </div>
      </my-bscroll>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import { getMap } from "@/utils/map.js";
import { mapActions, mapGetters, mapMutations,mapState } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      navData: [
        {
          title: "蔬菜每日鲜",
          bg: "-0px"
        },
        {
          title: "肉蛋禽",
          bg: "-75px"
        },
        {
          title: "母婴天地",
          bg: "-155px"
        },
        {
          title: "进店必买",
          bg: "-225px"
        },
        {
          title: "美通卡",
          bg: "-300px"
        },
        {
          title: "早晚市",
          bg: "-370px"
        },
        {
          title: "品牌汇",
          bg: "-450px"
        },
        {
          title: "领劵中心",
          bg: "-520px"
        },
        {
          title: "支付优惠",
          bg: "-599px"
        },
        {
          title: "直采品牌",
          bg: "-670px"
        }
      ],
      swiperOption: {
        notNextTick: true,
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        //pagination: ".swiper-pagination", //分页器挂载到swiper-pagination类对应的元素上
        loop: true, //开启轮播图前后循环模式
        autoplay: true,
        speed: 1000
      },
      pageid: 0,
      mapimg: true,
      local: "",
      maxPage:1
    };
  },
  computed: {
    ...mapGetters("home", ["get_shop_list", "get_banner_list"]),
      ...mapState("user",["userinfo"])
    
  },
  methods: {
    ...mapActions("home", ["set_shop_actions", "set_banner_actions"]),
    ...mapActions("car", ["add_addCar_actions"]),
    ...mapMutations("home", ["set_limit_mutations"]),
      ...mapActions("user",["getuserinfo"]),
    bscrollFn() {
      this.pageid ++;
      if(this.pageid<=this.maxPage){
          this.set_limit_mutations(this.pageid);
          //获取首页数据
          this.set_shop_actions();
      }
    },
    init() {
      const that = this;
      this.geolocation.getCurrentPosition((status, result) => {
        if (status === "complete") {
          window.localStorage.setItem("local", result.formattedAddress);
          this.local = window.localStorage.getItem("local");
          this.mapimg = false;
        } else {
          that.$router.push("/seat");
        }
      });
    },
    toSeat() {
      this.$router.push("/seat");
    },
    async mapFn() {
      let local = window.localStorage.getItem("local");
      if (local) {
        this.mapimg = false;
        this.local = local;
      } else {
        //触发获取AMap
        this.geolocation = await getMap("AMap.Geolocation");
        //获取自动定位函数
        this.init();
      }
    },
    //添加购物车
    addShop(id){
            if(this.userinfo){
                this.add_addCar_actions({
                    user_id:this.userinfo.uid,
                    shop_id:id
                })
              alert("添加成功")
            }else{
                this.$router.push("/login")
            }
        }
  },
  async created() {
      await this.getuserinfo()
    //获取首页数据
    this.set_shop_actions();
    //获取banner 图片数据
    this.set_banner_actions();
    //判断是否要定位
    this.mapFn();

  },
  mounted() {
  }
};
</script>
<style scoped lang="scss">
.wrap{
  position: relative;
}
.home_banner {
  @include width(100%);
  @include height(pxTorem(138px));
  overflow: hidden;
  img {
    @include width(100%);
    @include height(100%);
  }
}
.search {
  @include width(100%);
  @include height(pxTorem(48px));
  display: flex;
  align-items: center;
  span {
    display: block;
    @include width(pxTorem(11px));
    @include height(pxTorem(13px));
    background: url("../../static/img/icon.png") no-repeat;
    background-position-y: -121px;
    background-position-x: -5px;
    margin: 0 pxTorem(20px) 0 pxTorem(20px);
  }
  div {
    flex: 1;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    font-size: pxTorem(12px);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  p {
    @include width(pxTorem(11px));
    @include height(pxTorem(13px));
    background: url("../../static/img/icon.png") no-repeat center;
    background-position-y: -122px;
    background-position-x: -96px;
    margin: 0 pxTorem(20px) 0 pxTorem(20px);
  }
}
.home_nav {
  @include width(100%);
  @include height(pxTorem(156px));
  @include box_flex;
  flex-wrap: wrap;
  .home_nav_item {
    @include width(20%);
    @include height(50%);
    color: #b3b3b3;
    font-size: pxTorem(12px);
    @include box_flex;
    @include direction(column);
    @include justify;
    @include align;
    span {
      @include width(80%);
      @include height(pxTorem(44px));
      background: url("../../static/img/navlist.png");
      background-repeat: no-repeat;
      background-position-y: -0px;
    }
    b {
      margin: pxTorem(4px) 0;
    }
  }
}
.hot-day {
  @include width(100%);
  @include height(pxTorem(192px));
  display: flex;
  flex-direction: column;
  margin-top: pxTorem(15px);
  > .hot-top {
    @include width(100%);
    @include height(pxTorem(40px));
    display: flex;
    align-items: center;
    > p {
      margin-left: pxTorem(20px);
      @include width(pxTorem(80px));
      @include height(100%);
      @include box_flex;
      @include justify;
      @include align;
      > img {
        @include width(pxTorem(67px));
        @include height(pxTorem(17px));
      }
    }
    > span {
      flex: 1;
      font-size: pxTorem(14px);
    }
  }
  > .hot-bottom {
    flex: 1;
    img {
      @include width(100%);
      @include height(100%);
    }
  }
}
.shop_nav {
  @include width(100%);
  @include height(pxTorem(44px));
}
.img{
  @include width(100%);
  @include height(100%);
  @include absolute(absolute);
  top: 0;
  left: 0;
  z-index: 10;
  img{
    @include width(100%);
      @include height(100%);

  }
}
</style>