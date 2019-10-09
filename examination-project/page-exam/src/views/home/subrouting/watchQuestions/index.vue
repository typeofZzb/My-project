<template>
    <div class="detail">
       <div class="detail-header">查看试题</div>
       <div class="detail-search">
           <div class="search-top">
                <span>试题类型</span>
                <ul>
                    <li v-for="(item) in getSubjectters" 
                        :key="item.subject_id" 
                        @click="selSubject(item.subject_id,item.subject_text)"
                        :class="{active:index==item.subject_id}"
                    >{{item.subject_text}}</li>
                </ul>
           </div>
           <div class="search-bottom">
                <div class="bottom-item">
                    <span>考试类型：</span>
                     <Quetype :options="getExamTypeters" :type="type" @changes="changes"></Quetype>
                </div>
                <div class="bottom-item">
                    <span>题目类型：</span>
                   <Quetype :options="getterTypeters" :type="ts" @changes2="changes2"></Quetype>
                </div>
                <div class="bottom-item">
                    <el-button type="primary" icon="el-icon-search" @click="gosearch">搜索</el-button>
                </div>
           </div>
       </div>
       <div class="detail-main">
          <WatchItem :options="questionNew"></WatchItem>
       </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex"
import {getQuestions,getQuestionNew} from "@/api/index"
export default {
    data(){
        return {
            questionNew:[],
            type: "type",
            sel: "sel",
            ts: "ts",
            index:-1,
            search:{
                questions_type_id:'',
                subject_id:'',
                exam_id:""
            }
        }
    },
    computed:{
      ...mapGetters("exam", ["getSubjectters", "getExamTypeters","getterTypeters"])
    },
    methods:{
          ...mapActions("exam", ["getSubject", "getExamtype", "getTypeters"]),
        changes(value) {
            this.search.exam_id = value;
        },
        gosearch(){
            let obj={};
            Object.keys(this.search).map(item=>{
                if(this.search[item]){
                obj[item]=this.search[item]
                }
            })
            getQuestions(obj).then(({data})=>{
               this.questionNew=data
            })
        },
        changes2(value) {
             this.search.questions_type_id = value;
        },
        selSubject(id,text){
            this.index=id;
            this.search.subject_id=text
        },
    },
    created(){
        this.getSubject(); // 获取所有的课程
        this.getExamtype(); // 获取所有的考试类型
        this.getTypeters();//获取所有的试题类型
       getQuestionNew().then(res=>{
            this.questionNew = res.data;
        })
    }
}
</script>
<style lang="scss">
.detail{
    width: 100%;
    height: 100%;
    margin:0 auto;
    overflow:auto;
}
.detail-header{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    text-align: left;
}
.detail-search{
    width: 100%;
    height: 216px;
    background: #fff;
    border-radius: 10px;
    margin:20px 0 ;
    box-sizing: border-box;
    padding:24px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    .search-top{
        width: 100%;
        height: 104px;
        display: flex;
        box-sizing: border-box;
        padding-bottom: 24px;
        >span{
            width: 150px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        >ul{
            flex: 1;
            display:flex;
            justify-content: space-around;
             align-items: center;
            font-size: 12px;
            >li{
                color:#777;
            }
        }
    }
    .search-bottom{
        flex:1;
        display: flex;
        // justify-content: space-between;
        >.bottom-item{
            flex: 1;
            height: 100%;
            display:flex;
             justify-content: center;
            align-items: center;
            margin-left: 10px;
            >span{
                 width: 150px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .el-select{
                flex:1;
                .el-input{
                    display:flex;
                    justify-content: flex-start;
                    align-items: center;
                }
                 
            }
            >.exam-type{
                flex:1;
                 display:flex;
                justify-content: flex-start;
                align-items: center;
            }
        }
    }
}
.detail-main{
    width: 100%;
    border-radius: 10px;
    background: #fff;
    border-radius: 10px;
    margin:0 auto;
    box-sizing: border-box;
    padding:24px;
}
</style>
