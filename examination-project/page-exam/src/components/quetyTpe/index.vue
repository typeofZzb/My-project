<template>
  <el-select v-model="value" placeholder="请选择" v-if="type==='type'" @change="chang">
    <el-option v-for="item in options" :key="item.exam_id" :value="item.exam_name"></el-option>
  </el-select>
  <el-select v-model="value1" placeholder="请选择" v-else-if="type==='sel'" @change="chang1">
    <el-option v-for="item in options" :key="item.subject_id" :value="item.subject_text"></el-option>
  </el-select>
  <el-select v-model="value2" placeholder="请选择" v-else @change="chang2">
    <el-option
      v-for="item in options"
      :key="item.questions_type_id"
      :value="item.questions_type_text"
    ></el-option>
  </el-select>
</template>
<script>
export default {
  props: ["options", "type"],
  components: {},
  data() {
    return {
      value: "",
      value1: "",
      value2: ""
    };
  },
  computed: {},
  methods: {
    chang() {
       let {exam_id}=this.options.find(item=>item.exam_name==this.value);
      this.$emit("changes", exam_id);
    },
    chang1() {
       let {subject_id}=this.options.find(item=>item.subject_text==this.value1);
      this.$emit("changes1", subject_id);
    },
    chang2() {
        let {questions_type_id}=this.options.find(item=>item.questions_type_text==this.value2);
      this.$emit("changes2",questions_type_id);
    }
  },
  created() {
     
  },
  mounted() {}
};
</script>
<style scoped lang="">
</style>