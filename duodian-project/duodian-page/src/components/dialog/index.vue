<template>
  <div class="phone-dialog" @click.self="closeDialog">
    <div class="phone-dialog-content">
      <div class="phone-dialog-content-box">
        <h2>请输入验证码</h2>
        <div class="phone-dialog-content-box-state">
          <span>6位短信验证码已发送至</span>
          <b>{{phone}}</b>
        </div>
        <div class="phone-dialog-content-input">
          <input
            type="tel"
            class="input-box"
            maxlength="6"
            @keyup="inputNumber"
            v-model="checkcode"
          >
          <div
            :class="{'active':index+1 === inputList.length}"
            v-for="(item,index) in num"
            :key="index"
          >{{inputList[index]}}</div>
        </div>
        <div class="phone-dialog-content-box-state">
          <span class="afterseconds">{{count}}秒后可重新发送</span>
        </div>
        <div class="phone-dialog-content-box-btn">
          <div @click="againCheckCode" :class="{'checkcode':isCheck}" :disabled="isCheck">获取验证码</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/api/";

export default {
  props: {
    phone: {
      type: String,
      default: "13994518994"
    }
  },
  components: {},
  data() {
    return {
      inputList: [],
      num: 6,
      checkcode: "",
      count: 0,
      timer: null,
      isCheck: false //获取验证码按钮中间量
    };
  },
  computed: {},
  methods: {
    //关闭弹框
    closeDialog() {
      this.$emit("closeDialog");
    },
    //验证码
    inputNumber(res) {
      if (this.inputList.length < 6 && res.key !== "Backspace") {
        this.inputList.push(res.key);
      }
      if (res.key === "Backspace") {
        this.inputList.pop();
      }
      //判断输入值长度为6时   执行登录
      if (this.inputList.length == 6) {
        this.login();
        
      }
    },
    //登录
    login() {
      api
        .Login({
          phone: this.phone,
          checkcode: this.checkcode
        })
        .then(res => {
          this.$emit("goHome",res)
        });
    },
    //再次获取验证码
    againCheckCode() {
      if (this.count) {
        return;
      }
      //把按钮状态改成禁止的
      this.isCheck = true;
      //执行倒计时
      this.getCode();
      //获取验证码
      api.checkCode({ phone: this.phone }).then(res => {
        // console.log(res);
      });
    },
    //60秒倒计时
    getCode() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    }
  },
  created() {
    //默认打开遮罩   执行倒计时 把按钮设置成禁止的
    this.getCode();
    this.isCheck = true;
  },
  mounted() {},
  //监听count 变化
  watch: {
    count: function(val, oldVal) {
      //当旧值等于1时，把按钮状态改成可点击状态
      if (oldVal == "1") {
        this.isCheck = false;
      }
    }
  }
};
</script>
<style scoped lang="scss">
.phone-dialog {
  @include width(100%);
  @include height(100%);
  @include sizing;
  @include absolute(fixed);
  background: rgba(0, 0, 0, 0.25);
  .phone-dialog-content {
    @include width(75%);
    background: #ffffff;
    @include absolute(absolute);
    left: 50%;
    transform: translateX(-50%);
    top: 25%;
    border-radius: pxTorem(10px);
    .phone-dialog-content-box {
      @include width(86%);
      margin: pxTorem(23px) auto;
      h2 {
        @include width(pxTorem(108px));
        @include height(pxTorem(25px));
        font-size: pxTorem(18px);
        font-weight: 900;
        color: rgba(0, 0, 0, 1);
        line-height: pxTorem(25px);
      }
      .phone-dialog-content-box-state {
        @include height(pxTorem(13px));
        line-height: pxTorem(13px);
        font-size: pxTorem(9px);
        margin-top: pxTorem(10px);
        span {
          color: #3f3f3f;
        }
        b {
          color: #000000;
        }
        .afterseconds {
          color: #999999;
        }
      }
      .phone-dialog-content-input {
        @include height(pxTorem(36px));
        @include width(100%);
        margin-top: pxTorem(27px);
        @include box_flex;
        @include absolute(relative);
        .input-box {
          @include absolute(absolute);
          @include width(100%);
          @include height(100%);
          left: 0;
          top: 0;
          background: transparent;
          opacity: 0;
        }
        > div {
          flex: 1;
          @include box_flex;
          @include align;
          @include justify;
          font-size: pxTorem(16px);
          border: 1px solid rgba(151, 151, 151, 1);
          margin-right: pxTorem(4px);
        }
        .active {
          @include sizing;
          border: pxTorem(1px) solid orange;
        }
      }
      .phone-dialog-content-box-btn {
        margin-top: pxTorem(20px);
        div {
          @include height(pxTorem(36px));
          background: linear-gradient(
            135deg,
            rgba(253, 88, 48, 1) 0%,
            rgba(254, 71, 35, 1) 100%
          );
          box-shadow: 0px pxTorem(1px) pxTorem(2px) 0px rgba(252, 36, 33, 0.21);
          border-radius: pxTorem(50px);
          line-height: pxTorem(36px);
          @include center(center);
          font-size: pxTorem(12px);
          color: rgba(255, 255, 255, 1);
        }
        .checkcode {
          background: #eeeeee;
          color: #d0d0d0;
        }
      }
    }
  }
}
</style>
