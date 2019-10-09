<template>
  <div class="warrp">
      <h2>试题分类</h2>
      <div class="content">
          <div class="button">
              <el-button type="text"  style="background:blue;color:white;" @click="dialogFormVisible = true" class="typebtn">+ 添加类型</el-button>
          </div>
          <el-dialog title="添加类型" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="类型名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="insertText">确 定</el-button>
            </div>
          </el-dialog>
          <div class="con_table">
              <el-table
                :data="getDatatype"
                style="width: 100%">
                <el-table-column
                    prop="questions_type_id"
                    label="类型ID"
                    width="500">
                </el-table-column>
                <el-table-column
                    prop="questions_type_text"
                    label="类型名称"
                    width="500">
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作"
                    width="120">
                    <template slot-scope="scope">
                        <el-button
                        @click.native.prevent="deleteRow(scope.row.questions_type_id)"
                        type="text"
                        size="small">
                        移除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
          </div>
      </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import { questionsInsert, questionsDel } from '@/api/questions'
export default {
    props: {

    },
    components: {

    },
    data () {
        return {
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px'
        }
    },
    computed: {
        ...mapGetters("questions",['getDatatype'])
    },
    methods: {
        ...mapActions("questions",['getData']),
        ...mapMutations("questions",['getDatajson']),
        insertText () {
            this.dialogFormVisible = false;
            let num = +new Date();
            questionsInsert(this.form.name, num)
            this.getData()
        },
        deleteRow (rows) {
            questionsDel(rows);
            this.getData()
        }
    },
    created () {

    },
    mounted () {
        this.getData();
        this.getDatajson()
    }
}
</script>
<style  lang="scss">
h2{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    font-weight: 500;
}
.content{
    width: 100%;
    border-radius: 10px;
    background: #fff;
    .button{
      margin: 0 0 25px 0;
      height: 60px;
      display: flex;
      align-items: center;
  }
  .con_table{
        width:100%;
        padding:10px 20px;
        box-sizing: border-box;
        border-radius:10px;
    }
    .typebtn{
        width:150px;
        margin: 20px;
        background: #999;
        color:#Fff;
    }
    .demo-table-expand {
        font-size:16px;
        label {
            width: 90px;
            color: #99a9bf;
        }
        .el-form-item {
            margin-right: 0;
            margin-bottom: 0;
            width: 50%;
        }
    }
}

.del{
    cursor: pointer;
}
</style>
