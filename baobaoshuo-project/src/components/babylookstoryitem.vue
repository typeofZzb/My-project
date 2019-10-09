<template>
    <div class="story_item" @click="storydetail">
        <template v-if="pic">
          <div  class="story_item_img">
              <img v-lazy="pic" alt="">
          </div>
        </template>
        <div class="story_item_content">
            <div class="story_item_name">
              <h4>{{index}}.{{name}}</h4>
            </div>
            <div class="story_item_dis"> 
              <span class="story_item_dis_artist">{{artist}}</span>
              <span>播放:{{playcnt}}</span>
            </div>
        </div>
        <template>
            <div v-if="type" class="story_item_go">
             <img src="@/static/images/1.jpg"/>
          </div>
          <div v-else class="story_item_go">
              >
          </div>
        </template>
        
    </div>
</template>
<script>
export default {
  props:{
    artist:{
      type:String,
      value:""
    },
    downurl:{
      type:String,
      value:""
    },
    name:{
      type:String,
      value:""
    },
    pic:{
      type:String,
      value:""
    },
    playcnt:{
      type:Number,
      value:0
    },
    id:{
      type:Number,
      value:0
    },
    index:{
      type:Number,
      value:0
    },
    type:{
      type:String,
      value:""
    },
    flag:{
      type:String,
      value:""
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    storydetail(){
      if(this.flag==='songItem'){
        this.$router.push({name:"songDetails",params:{id:this.id,name:this.name,downurl:this.downurl}})
      }else if(this.flag==='song_erge'){
       
            this.$router.push({ path:'/songList',
                query:{
                  url:this.downurl
                }})
             
      }
      this.$emit('storydetail',this.downurl)
    }
  },
  created() {
    
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.story_item {
  width: 100%;
  height: 65px;
  display: flex;
  box-sizing: border-box;
  padding:0 10px;
  .story_item_img{
    width: 92px;
    box-sizing: border-box;
    padding: 5px;
    img{
     
     width: 100%;
     height: 100%;
      border-radius: 5px;
    }
  }
  .story_item_content{
    flex: 1;
    .story_item_name{
      margin-top: 10px;
      font-weight: 900;
      font-size: 16px;
    }
    .story_item_dis{
      font-size: 12px;
      color: #636363;
      margin-top: 6px;
      .story_item_dis_artist{
        display: inline-block;
        margin-right: 12px;
      }
    }
  }
  .story_item_go{
    width: 45px;
    text-align: center;
    line-height: 65px;
  }
}
</style>