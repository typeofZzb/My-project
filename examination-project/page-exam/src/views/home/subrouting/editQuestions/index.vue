<template>
  <div class="wrap">
    <h2>编辑试题</h2>
    <div class="content">
      <div class="con_message">
        <h3>题目信息</h3>
        <h3>题干</h3>
        <input type="text" placeholder="请输入题目标题，不超过20个字" :value="questionInfo.title">
        <h3>题目主题</h3>
        <mavon-editor
          class="mavonbox"
          :scrollStyle="false"
          defaultOpen="edit"
          :subfield="false"
          :value="questionInfo.questions_stem"
        />
        <h3>请选择考试类型：</h3>
        <Quetype :options="getExamTypeters" :type="type" @changes="changes" ></Quetype>
        <h3>请选择课程类型：</h3>
        <Quetype :options="getSubjectters" :type="sel" @changes1="changes1"></Quetype>
        <h3>请选择题目类型：</h3>
        <Quetype :options="getterTypeters" :type="ts" @changes2="changes2"></Quetype>
        <h3>答案信息</h3>
        <mavon-editor
          class="mavonbox"
          :scrollStyle="false"
          defaultOpen="edit"
          :subfield="false"
          :value="questionInfo.questions_answer"
        />
        <el-button type="text" class="mainbtn">点击提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { questionsedtior } from "@/utils/userinfo";
export default {
  props: {},
  components: {},
  data() {
    return {
      examValue: "", // 考试类型ID
      subjectValue: "", // 课程类型ID
      questionValue: "", // 题目类型ID
      titleText: "", // 题干
      subjectText: "", // 题目主题
      anwerText: "", // 题目答案
      questionsId: "", // 试题Id
      list: [], // 接收本地数组
      value1: "",
      questionInfo: {}, // 每个编辑试题的信息,
      type: "type",
      sel: "sel",
      ts: "ts",
      show: false
    };
  },
  computed: {
    ...mapGetters("exam", [
      "getSubjectters",
      "getExamTypeters",
      "getterTypeters"
    ])
  },
  methods: {
    ...mapActions("exam", ["getSubject", "getExamtype", "getTypeters"]),
    changes(value) {
      this.examValue=value;
    },
    changes1(value) {
      this.subjectValue=value;
    },
    changes2(value) {
      this.questionValue=value;
    }
  },
  created() {
    this.getSubject(); // 获取所有的课程
    this.getExamtype(); // 获取所有的考试类型
    this.getTypeters(); //获取所有的试题类型
    this.questionInfo = questionsedtior();
  }
};
</script>
<style  lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  overflow: auto;
  h2 {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    font-weight: 500;
    margin: 5px 0;
    padding: 10px 0;
  }

  .content {
    width: 100%;
    border-radius: 10px;
    background: #fff;
    box-sizing: border-box;
    padding: 24px;
    h3,
    p {
      width: 100%;
      height: 35px;
      font-size: 16px;
      line-height: 35px;
      font-weight: 400;
      margin: 10px 0;
    }
    .con_message {
      font-size: 16px;
      line-height: 40px;
      input {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        font-size: 15px;
        color: #999;
        background: #fff;
        box-sizing: border-box;
        padding: 6px 11px;
        border-radius: 5px;
        border: 1px solid #ccc;
      }
    }

    .mainbtn {
      margin: 20px;
      background: #999;
      color: #fff;
      width: 150px;
    }
  }
}
</style>