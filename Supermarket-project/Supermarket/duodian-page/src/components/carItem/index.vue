<template>
    <slide-move :height="128" :id="shopdata.id">
        <div class="car_item">
            <div class="car_box">
                <div>
                    <span @click="checkBox(shopdata.id)" :class="{'active':flag}"></span>
                </div>
                <dl>
                    <dt>
                        <img :src="shopdata.cover" alt="">
                    </dt>
                    <dd>
                        <div class="top">
                            <span>{{shopdata.name}}</span>
                            <span>规格： 1.2 / Kg</span>
                        </div>
                        <div class="bottom">
                            <p class="car_num">
                                <b>￥{{shopdata.price}}</b>
                                <span v-if="shopdata.old_price">￥{{shopdata.old_price}}</span>
                            </p>
                            <p class="car_count">
                                <button
                                    @click="countFn(false,shopdata)"
                                    :disabled="count>1?false:true"
                                >-</button>
                                <span>{{count}}</span>
                                <button @click="countFn(true,shopdata)">+</button>
                            </p>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    </slide-move>
</template>
<script>
export default {
  props: {
    shopdata: {
      type: Object,
      default: {}
    },
    count: {
      type: Number,
      default: 0
    },
    flag:{
      type:Boolean,
      default:false
    }
  },
  components: {},
  data() {
    return {
      open: false
    };
  },
  computed: {},
  methods: {
    //单选
    checkBox(id) {
       this.$emit("checkBox",id);
    },
    //添加数量与删除数量
    countFn(flag, shopdata) {
      this.$emit("countFn", {
        flag,
        shopdata
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.car_item {
  @include width(100%);
  @include height(pxTorem(128px));
  // background: #ccc;
  @include sizing;
  padding: pxTorem(15px) pxTorem(0px);
  .car_box {
    @include width(100%);
    @include height(100%);
    @include box_flex;
    overflow: hidden;
    > div {
      @include width(pxTorem(34px));
      @include box_flex;
      @include align;
      @include justify(flex-end);
      span {
        display: block;
        @include width(pxTorem(16px));
        @include height(pxTorem(16px));
        @include sizing;
        border-radius: pxTorem(8px);
        border: pxTorem(2px) solid rgba(0, 0, 0, 0.5);
      }
      .active {
        background: red;
        border: none;
      }
    }
    > dl {
      flex: 1;
      @include width(100%);
      @include height(100%);
      @include box_flex;
      dt {
        @include width(pxTorem(100px));
        @include sizing;
        padding: pxTorem(0px) pxTorem(8px);
        img {
          @include width(100%);
          @include height(100%);
        }
      }
      dd {
        flex: 1;
        @include box_flex;
        @include direction(column);
        .top {
          span {
            @include width(pxTorem(220px));
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:first-child {
              font-size: pxTorem(16px);
              font-weight: 600;
              padding-bottom: pxTorem(8px);
            }
            &:last-child {
              font-size: pxTorem(14px);
              color: #ccc;
            }
          }
        }
        .bottom {
          flex: 1;
          @include box_flex;
          .car_num {
            @include box_flex;
            @include align;
            b {
              font-size: pxTorem(14px);
              color: orangered;
              font-weight: 600;
            }
            span {
              font-size: pxTorem(10px);
              color: #a5a5a5;
              margin-left: pxTorem(5px);
              text-decoration: line-through;
            }
          }
          .car_count {
            flex: 1;
            @include box_flex;
            @include align;
            @include justify;
            button {
              @include width(pxTorem(24px));
              @include height(pxTorem(24px));
              border-radius: pxTorem(12px);
              margin: pxTorem(0px) pxTorem(12px);
              border: none;
              outline: none;
              font-size: pxTorem(18px);
            }
            span {
              font-size: pxTorem(14px);
            }
          }
        }
      }
    }
  }
}
</style>