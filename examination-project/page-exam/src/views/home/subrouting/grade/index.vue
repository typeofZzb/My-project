<template>
    <div class="classwrap">
        <h2>班级管理</h2>
        <div class="addclasswrap">
            <div class="button">
                <el-button
                    style="background:blue;color:white;"
                    @click="dialogFormVisible = true"
                >+添加班级</el-button>
            </div>
            <ul>
                <li>班级名</li>
                <li>课程名</li>
                <li>教室号</li>
                <li>操作</li>
            </ul>
            <div class="classlist">
                <ol>
                    <li v-for="(item,index) in classs" :key="index">{{item.grade_name}}</li>
                </ol>
                <ol>
                    <li v-for="(item,index) in classs" :key="index">{{item.subject_text}}</li>
                </ol>
                <ol>
                    <li v-for="(item,index) in classs" :key="index">{{item.room_text}}</li>
                </ol>
                <ol>
                    <li v-for="(item,index) in classs" :key="index">修改|删除</li>
                </ol>
            </div>
        </div>
        <el-dialog title="添加班级" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="班级名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off" placeholder="班级名"></el-input>
                </el-form-item>
                <el-form-item label="教室号" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择教室号">
                        <el-option label="区域一" value="shanghai"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="课程名" :label-width="formLabelWidth">
                    <el-select v-model="form.class" placeholder="请选择课程名">
                        <el-option label="区域一" value="shanghai"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { getClass } from "@/api/index";
export default {
  props: {},
  components: {},
  data() {
    return {
      classs: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        class: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  computed: {},
  methods: {
    show() {}
  },
  created() {
    getClass().then(res => {
      this.classs = res.data;
      console.log(res);
    });
  },
  mounted() {}
};
</script>
<style  lang="scss">
.classwrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  box-sizing: border-box;
  background: #eee;
  overflow: auto;
  h2 {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    font-weight: 500;
  }
}
.addclasswrap {
  width: 100%;
  background: white;
  padding: 24px;
  box-sizing: border-box;
  .button{
      margin: 0 0 25px 0;
      height: 60px;
      display: flex;
      align-items: center;
  }
}
.addclasswrap ul {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  background: #eee;
  font-size: 14px;
  margin-top: 20px;
  li {
    width: 20%;
    text-align: center;
  }
}

.classlist {
  width: 100%;
  ol {
    width: 20%;
    float: left;
    li {
      display: flex;
      width: 100%;
      height: 50px;
      justify-content: center;
      align-items: center;
      font-size: 14px;
    }
  }
}
</style>