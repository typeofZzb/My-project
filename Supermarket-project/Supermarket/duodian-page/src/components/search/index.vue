<template>
    <div class="search" @click.self="goTo_Search">
        <p :class="{'active':search}">
            <input type="text" :disabled="!search" placeholder="搜索校园超市商品">
        </p>
        <span v-if="search">{{btn_title}}</span>
    </div>
</template>
<script>
export default {
  props: {
      search:{
          type:Boolean,
          default:false
      },
      fn:{
          type:Boolean,
          default:false
      },
      btn_title:{
          type:String,
          default:"搜索"
      }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    goTo_Search() {
     if(this.fn){
        this.$router.push("/search");
     }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">

.search {
  @include width(100%);
  @include height(pxTorem(48px));
  @include box_flex;
  @include sizing;
  @include align;
  padding: pxTorem(8px) pxTorem(14px);
  p {
    @include width(100%);
    @include height(100%);
    @include sizing;
    background: #f6f6f6;
    border-radius: pxTorem(16px);
     @include box_flex;
      @include align;
      overflow: hidden;

    input{
         @include width(100%);
        @include height(100%);
        font-size:pxTorem(12px);
          background: url("../../static/img/search_1.png") no-repeat left; 
        background-position-x:  pxTorem(10px); 
        padding-left: pxTorem(30px) ;
    }
   
  }
  .active{
      background: #fff;
      @include sizing;
      border: pxTorem(2px) solid #f6f6f6;
      input{
            background: url("../../static/img/search.png") no-repeat left;
             background-position-x:  pxTorem(10px);  
      }
  }
  span{
      display: block;
      font-size:pxTorem(12px);
       @include width(pxTorem(50px));
       text-align: center;
  }
}
</style>