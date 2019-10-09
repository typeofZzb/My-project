<template>
  <div class="wrap">
    <h2>添加试题</h2>
    <div class="content">
      <div class="con_message">
        <h3>题目信息</h3>
        <h3>题干</h3>
        <el-input v-model="addTest.title" placeholder="请输入题目标题，不超过20字" class="input"></el-input>
        <h3>题目主题</h3>
        <mavon-editor
          class="mavonbox"
          v-model="addTest.questions_stem"
          :scrollStyle="false"
          :subfield="true"
        />
        <h3>请选择考试类型：</h3>
        <Quetype :options="getExamTypeters" :type="type" @changes="changes"></Quetype>
        <h3>请选择课程类型：</h3>
        <Quetype :options="getSubjectters" :type="sel" @changes1="changes1"></Quetype>
        <h3>请选择题目类型：</h3>
        <Quetype :options="getterTypeters" :type="ts" @changes2="changes2"></Quetype>
        <h3>答案信息</h3>
        <mavon-editor
          class="mavonbox"
          v-model="addTest.questions_answer"
          :scrollStyle="false"
          :subfield="true"
        />
        <el-button type="text" class="mainbtn" @click="add">点击提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { addQuestion } from "@/api/";
import { getUserinfoNew } from "@/utils/userinfo";
export default {
  props: {},
  components: {},
  data() {
    return {
      type: "type",
      sel: "sel",
      ts: "ts",
      addTest: {
        questions_type_id: "",
        questions_stem: "",
        subject_id: "",
        exam_id: "",
        user_id: "",
        questions_answer: "",
        title: ""
      }
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
    add() {
      const {
        data: { user_id }
      } = getUserinfoNew();
      this.addTest.user_id = user_id;

      this.$confirm("你确定要添加这道试题吗？", "真的要添加吗？", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          addQuestion(this.addTest).then(res => {
            this.$message({
              type: "success",
              message: "添加成功!"
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    changes(value) {
      this.addTest.exam_id = value;
    },
    changes1(value) {
      this.addTest.subject_id = value;
    },
    changes2(value) {
      this.addTest.questions_type_id = value;
    }
  },
  created() {
    this.getSubject(); // 获取所有的课程
    this.getExamtype(); // 获取所有的考试类型
    this.getTypeters(); //获取所有的试题类型
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