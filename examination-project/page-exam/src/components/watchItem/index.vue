<template>
    <div>
        <div class="watchBox" v-for="(item,index) in options" :key="index">
            <div class="watchCon" @click="detailItem(item)">
                <p class="watchName">{{item.title}}</p>
                <p class="watchContent">
                    <span class="con_type">{{item.questions_type_text}}</span>
                    <span class="con_name">{{item.subject_text}}</span>
                    <span class="con_subject">{{item.exam_name}}</span>
                </p>
                <p class="watchInquire">{{item.user_name}}发布</p>
            </div>
            <b class="edit" @click="edtiorItem(item)">编辑</b>
        </div>
    </div>
</template>

<script>
export default {
    props: ['options'],
    methods: {
        edtiorItem (item) {
            sessionStorage.setItem('questionsedtior', JSON.stringify(item))
            this.$router.push({
                path: '/home/editQuestions'
            })
        },
        detailItem (item) {
            this.$router.push({
                path: '/home/QuestionsDetail',
                query: {detailCon: item}
            })
        }
    }
}
</script>

<style scoped lang="scss">
.watchBox{
    width:100%;
    height:150px;
    border-bottom: 1px solid #ccc;
    padding:10px;
    box-sizing: border-box;
    display: flex;
}
.watchCon{
    flex:8;
    line-height:50px;
}
.edit{
    flex:1;
    display:inline-block;
    text-align: center;
    font-size:16px;
    color:aquamarine;
    line-height:150px;
    font-weight: 400;
    cursor: pointer;
}
.watchName{
    font-size:16px;
    margin-left:5px;
    cursor: pointer;
   
}
.watchContent {
    display: flex;
    align-items: center;
    span{
        display: inline-block;
        width:100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin:0 5px;
        font-size: 12px;
        cursor: pointer;
    }
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
.watchInquire{
    cursor: pointer;
    font-size:16px;
    margin-left:5px;
    color: aqua;
}
</style>
