<template>
  <div class="wrap">
    <my-header></my-header>
    <div class="main">
      <my-search  :fn="true"></my-search>
      <div class="classification_conent">
        <div class="classification_left">
          <div
            v-for="(item,index) in shopTypeList"
            :key="item.id"
            :class="{'active':ind==index}"
            @click="shopTypeFn(index,item.id,item.children)"
          >{{item.title}}</div>
        </div>
        <div class="classification_right">
          <div class="right_top">
            <div v-for="(item,index) in children"
                :key="item.id" 
                :class="{'active':typeId==index}" 
                @click="selectTypeFn(index,item.id)"
            >{{item.name}}</div>
          </div>
          <div class="right_bottom">
            <shop-item v-for="(item,index) in selectType" :key="index" :option="item" @addShop="addShop"></shop-item>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      ind: 0,
      typeId:0,
      parentId:"2xe4he1vu9k00002xe4he1vu9"
    };
  },
  computed: {
    ...mapState("classification", ["shopTypeList", "selectType", "children"]),
      ...mapState("user",["userinfo"])
  },
  methods: {
    ...mapActions("classification", [
      "set_shopType_actions",
      "set_selectType_actions"
    ]),
    ...mapActions("car", ["add_addCar_actions"]),
    ...mapMutations("classification", ["set_shopChildren_mutations"]),
     ...mapActions("user",["getuserinfo"]),
    //切换左侧列表，高亮， 右侧类型改变
    shopTypeFn(ind, type_id, children) {
      this.ind = ind;
      this.typeId=0;
      this.parentId=type_id;
      let flag = children.find(item => item.name == "全部");
      if (!flag) {
        children.unshift({
          name: "全部",
          id:""
        });
      }

      this.set_selectType_actions({ type_id });
      this.set_shopChildren_mutations(children);
    },
    selectTypeFn(index,category_id){
        this.typeId=index;
        if(category_id){
           //切换分类页面商品
        this.set_selectType_actions({ type_id: this.parentId,category_id});
        }else{
          //全部商品
           this.set_selectType_actions({ type_id: this.parentId});
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
    //分类页面分类
    this.set_shopType_actions();
    //筛选分类页面商品
    this.set_selectType_actions({ type_id: "2xe4he1vu9k00002xe4he1vu9" });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.main {
  @include box_flex;
  @include direction(column);
  .classification_conent {
    flex: 1;
    overflow: hidden;
    @include box_flex;
    .classification_left {
      @include width(pxTorem(86px));
      background: #fafafa;
      overflow: auto;
      div {
        text-align: center;
        padding: pxTorem(20px) pxTorem(0px);
        font-size: pxTorem(14px);
        color: #ababab;
      }
       .active {
          color: red;
      }
    }
    .classification_right {
      flex: 1;
      @include box_flex;
      @include direction(column);
      .right_top {
        @include height(pxTorem(28px));
      overflow: hidden;
        line-height: pxTorem(28px);
        div {
         float: left;
          @include height(100%);
          padding: pxTorem(0px) pxTorem(7px);
          text-align: center;
          font-size: pxTorem(12px);
        }
      }
      .right_bottom {
        flex: 1;
        overflow: auto;
      }
    }
  }
 
}
 .active {
    color: red;
}
</style>