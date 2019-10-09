<template>
    <div>
      <h2>试题详情</h2>
        <BaseWrap>
                <template v-slot:base_wrap>
                    <div class="content_title">
                        <p class="userName">出题人：{{list.user_name}}</p>
                        <p class='titleInsert'>题目信息</p>
                        <p class="watchContent">
                            <span class="con_type">{{list.questions_type_text}}</span>
                            <span class="con_name">{{list.subject_text}}</span>
                            <span class="con_subject">{{list.exam_name}}</span>
                        </p>
                        <div class="detailContent">
                            <p class="detailName">{{list.title}}</p>
                            <mavon-editor 
                                :value="list.questions_stem"
                                defaultOpen="preview"
                                :toolbarsFlag="false"
                                :subfield="false"
                            >
                            </mavon-editor>
                        </div>
                    </div>
                    <div class="detailContent">
                        <p class='detailName'>答案信息</p>
                        <mavon-editor 
                            :value="list.questions_answer"
                            defaultOpen="preview"
                             :toolbarsFlag="false"
                             :subfield="false"
                        >
                        </mavon-editor>
                    </div>
                </template>
          </BaseWrap>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [],
            
        }
    },
    created(){
      this.list = this.$route.query.detailCon
    },
    mounted () {
        
    }
}
</script>

<style scoped lang="scss">
h2{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    font-weight: 500;
}
.content{
    display:flex;
}
.content_title{
    flex:6;
    background:#fff;
    border-radius: 10px;
    p{
        height: 30px;
        line-height: 30px;
        font-size:16px;
        margin:10px 0;
        font-weight: bold;
        span{
            display: inline-block;
            width:100px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            margin:0 5px;
            cursor: pointer;
            font-size: 12px;
        }
    }
    .content_awser{
        flex:4;
        background:#fff;
        border-radius: 10px;
        padding-left:20px;
    }

    .con_type{
        border:1px solid aquamarine;
        background:rgba(230,274,255,.5);
        color:aqua;
    }
    .con_name{
        border:1px solid #ccc;
        background:rgba(240,245,255,.5);
        color:#999;
    }
    .con_subject{
        border:1px solid #f90;
        background:rgba(254,247,234,.5);
        color:#f90;
    }
    
   
}


.detailContent{
    font-size: 14px;
    line-height:30px;
    margin:20px 0;
    .detailName{
        margin:10px 0;
        font-size:16px;
        font-weight: bold;
    }
}
</style>
