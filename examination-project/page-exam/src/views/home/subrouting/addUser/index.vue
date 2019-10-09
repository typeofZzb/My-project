<template>
    <div class="addUser">
        <h3>添加用户</h3>
        <div class="addUser-main">
            <div>
                <el-tabs v-model="activeName" type="card" class="addUser-tab">
                    <el-tab-pane label="添加用户" name="first">
                        <el-input v-model="addUserInput1" placeholder="请输入用户名"></el-input>
                        <el-input v-model="addUserInput2" placeholder="请输入密码"></el-input>
                        <el-select
                            v-model="addUserInput3"
                            placeholder="请选择身份id"
                            class="addUser-select"
                        >
                            <el-option
                                v-for="item in getIdentityData"
                                :key="item.identity_id"
                                :label="item.identity_text"
                                :value="item.identity_id"
                            ></el-option>
                        </el-select>
                        <div class="userButton">
                            <el-button type="primary" class="addUser-sure" @click="userAdd">确定</el-button>
                            <el-button @click="reset1">重置</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="更新用户" name="second ">
                        <el-select
                            v-model="updateValue"
                            placeholder="请选择身份id"
                            class="addUser-select"
                        >
                            <el-option
                                v-for="item in getData"
                                :key="item.user_id"
                                :label="item.user_name"
                                :value="item.user_id"
                            ></el-option>
                        </el-select>
                        <el-input v-model="updateUserInput" placeholder="请输入用户名"></el-input>
                        <el-input v-model="updatePwdInput" placeholder="请输入密码"></el-input>
                        <el-select
                            v-model="updateIdInput"
                            placeholder="请选择身份id"
                            class="addUser-select"
                        >
                            <el-option
                                v-for="item in getIdentityData"
                                :key="item.identity_id"
                                :label="item.identity_text"
                                :value="item.identity_id"
                            ></el-option>
                        </el-select>
                        <div class="userButton">
                            <el-button type="primary" class="addUser-sure" @click="userUpdata">确定</el-button>
                            <el-button @click="reset2">重置</el-button>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div>
                <el-tabs v-model="activeName2" type="card" class="addUser-tab">
                    <el-tab-pane label="添加身份" name="first">
                        <el-input v-model="addIdentityInput" placeholder="请输入身份名称"></el-input>
                        <div class="userButton">
                            <el-button type="primary" class="addUser-sure" @click="userAddIndent">确定</el-button>
                            <el-button @click="reset3">重置</el-button>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div>
                <el-tabs v-model="activeName2" type="card" class="addUser-tab">
                    <el-tab-pane label="添加api接口权限" name="first">
                        <el-input v-model="addApiNameInput" placeholder="请输入api接口文献名称"></el-input>
                        <el-input v-model="addApiUrlInput" placeholder="请输入api接口权限url"></el-input>
                        <el-input v-model="addApiMethodInput" placeholder="请输入api接口权限方法"></el-input>
                        <div class="userButton">
                            <el-button
                                type="primary"
                                class="addUser-sure"
                                @click="userAuthorityApiEdit"
                            >确定</el-button>
                            <el-button @click="reset4">重置</el-button>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div>
                <el-tabs v-model="activeName2" type="card" class="addUser-tab">
                    <el-tab-pane label="添加视图接口权限" name="first">
                        <el-select
                            v-model="addViewValue"
                            placeholder="请选择已有视图"
                            class="addUser-select"
                        >
                            <el-option
                                v-for="item in getAuthority"
                                :key="item.identity_view_authority_relation_id"
                                :label="item.view_authority_text"
                                :value="item.identity_view_authority_relation_id"
                            ></el-option>
                        </el-select>
                        <div class="userButton">
                            <el-button
                                type="primary"
                                class="addUser-sure"
                                @click="userAuthorityViewEdit"
                            >确定</el-button>
                            <el-button @click="reset5">重置</el-button>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div>
                <el-tabs v-model="activeName2" type="card" class="addUser-tab">
                    <el-tab-pane label="给身份设置api接口权限" name="first">
                        <el-select
                            v-model="userIdValue"
                            placeholder="请选择身份id"
                            class="addUser-select"
                        >
                            <el-option
                                v-for="item in getIdentityData"
                                :key="item.identity_id"
                                :label="item.identity_text"
                                :value="item.identity_id"
                            ></el-option>
                        </el-select>
                        <el-select
                            v-model="apiValue"
                            placeholder="请选择api接口权限"
                            class="addUser-select"
                        >
                            <el-option
                                v-for="item in getApiAuthority"
                                :key="item.api_authority_id"
                                :label="item.api_authority_text"
                                :value="item.api_authority_id"
                            ></el-option>
                        </el-select>
                        <div class="userButton">
                            <el-button
                                type="primary"
                                class="addUser-sure"
                                @click="userSetIdentityApi"
                            >确定</el-button>
                            <el-button @click="reset6">重置</el-button>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div>
                <el-tabs v-model="activeName2" type="card" class="addUser-tab">
                    <el-tab-pane label="给身份设置视图权限" name="first">
                        <el-select
                            v-model="userViewValue"
                            placeholder="请选择身份id"
                            class="addUser-select"
                        >
                            <el-option
                                v-for="item in getIdentityData"
                                :key="item.identity_id"
                                :label="item.identity_text"
                                :value="item.identity_id"
                            ></el-option>
                        </el-select>
                        <el-select
                            v-model="viewIdValue"
                            placeholder="请选择视图权限id"
                            class="addUser-select"
                        >
                            <el-option
                                v-for="item in getAuthority"
                                :key="item.identity_view_authority_relation_id"
                                :label="item.view_authority_text"
                                :value="item.identity_view_authority_relation_id"
                            ></el-option>
                        </el-select>
                        <div class="userButton">
                            <el-button
                                type="primary"
                                class="addUser-sure"
                                @click="userSetIdentityView"
                            >确定</el-button>
                            <el-button @click="reset7">重置</el-button>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import {
  userAdd,
  userUpdata,
  userAddIdentitEdit,
  userAuthorityApiEdit,
  userAuthorityViewEdit,
  userSetIdentityApi,
  userSetIdentityView
} from "@/api/user";
export default {
  props: {},
  components: {},
  data() {
    return {
      activeName: "first",
      activeName2: "first",
      //添加用户
      addUserInput1: "",
      addUserInput2: "",
      addUserInput3: "",
       //更新用户
      updateUserInput: "",
      updatePwdInput: "",
      updateIdInput: "",
      //添加身份
      addIdentityInput: "",
      //api接口权限
      addApiUrlInput: "",
      addApiNameInput: "",
      addApiMethodInput: "",

      value: "",
      //更新用户身份id
      updateValue: "",
      valueUserId: "",
      //添加视图接口权限
      addViewValue: "",
      //设置api接口权限身份id
      userIdValue: "",
      //api接口权限
      apiValue: "",
      //视图权限id
      viewIdValue: "",
      //身份设置视图权限身份id
      userViewValue: ""
    };
  },
  computed: {
    ...mapGetters("user", [
      "getData",
      "getAuthority",
      "getApiAuthority",
      "getIdentityData"
    ])
  },
  methods: {
    ...mapActions("user", [
      "actionUser",
      "actionAuthority",
      "actionApiAuthority",
      "actionIdentity"
    ]),
    //添加用户方法
    userAdd() {
      userAdd(this.addUserInput1, this.addUserInput2, this.addUserInput3).then(
        res => {
          this.$message(res.msg);
          this.actionUser();
        }
      );
      //清空添加用户信息
      this.addUserInput1 = "";
      this.addUserInput2 = "";
      this.addUserInput3 = "";
    },
    //重置添加用户信息
    reset1() {
      this.addUserInput1 = "";
      this.addUserInput2 = "";
      this.addUserInput3 = "";
    },
    //更新用户方法
    userUpdata() {
      userUpdata(
        this.updateUserInput,
        this.updatePwdInput,
        this.updateIdInput,
        this.updateValue
      ).then(res => {
        this.$message(res.msg);
        this.actionUser();
      });
    },
    //重置更新用户信息
    reset2() {
      this.updateUserInput = "";
      this.updatePwdInput = "";
      this.updateIdInput = "";
      this.updateValue = "";
    },
    //添加身份信息方法
    userAddIndent() {
      userAddIdentitEdit(this.addIdentityInput).then(res => {
        this.$message(res.msg);
        this.actionUser();
        this.actionIdentity();
      });
    },
    //重置添加身份信息
    reset3() {
      this.addIdentityInput = "";
    },
    //添加api接口权限信息方法
    userAuthorityApiEdit() {
      userAuthorityApiEdit(
        this.addApiNameInput,
        this.addApiUrlInput,
        this.addApiMethodInput
      ).then(res => {
        this.$message(res.msg);
        this.actionApiAuthority();
      });
    },
    //重置添加api接口权限信息
    reset4() {
      this.addApiNameInput = "";
      this.addApiUrlInput = "";
      this.addApiMethodInput = "";
    },
    //添加视图接口权限信息方法
    userAuthorityViewEdit() {
      let arr = this.getAuthority.filter(
        item => item.identity_view_authority_relation_id === this.addViewValue
      );
      userAuthorityViewEdit(arr[0].view_authority_text, arr[0].view_id).then(
        res => {
          this.$message(res.msg);
        }
      );
    },
    //重置添加视图接口权限信息
    reset5() {
      this.addViewValue = "";
    },
    //身份设置接口权限方法
    userSetIdentityApi() {
      userSetIdentityApi(this.userIdValue, this.apiValue).then(res => {
        this.$message(res.msg);
      });
    },
    //重置身份设置接口权限信息
    reset6() {
      this.userIdValue = "";
      this.apiValue = "";
    },
    //身份设置视图权限方法
    userSetIdentityView() {
      userSetIdentityView(this.userViewValue, this.viewIdValue).then(res => {
        this.$message(res.msg);
      });
    },
    //重置身份设置视图权限信息
    reset7() {
      this.userViewValue = "";
      this.viewIdValue = "";
    }
  },
  created() {},
  mounted() {
     /* 所有用户数据 */
    this.actionUser();
     /* 所有视图权限数据 */
    this.actionAuthority();
    /* 所有api接口权限数据 */
    this.actionApiAuthority();
      /* 所有身份数据 */
    this.actionIdentity();
  }
};
</script>
<style  lang="scss">
.addUser {
  display: flex;
  line-height: 30px;
  flex-direction: column;
  h3 {
    font-size: 20px;
    font-weight: normal;
    text-align: left;
    height: 60px;
    line-height: 60px;
    margin-bottom: 20px;
  }
}

.addUser-main {
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 30%;
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding: 10px;
    flex-shrink: 0;
    .el-tabs__header {
      width: 100%;
      height: 40px;

      div {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
      }
    }
  }
}
.addUser-row {
  display: flex;
}

.addUser-select {
  margin: 10px 15px;
  width: 200px;
  display: block;
  display: flex;
  align-items: center;
  .el-input {
    width: 100%;
    height: 34px;
    background: #fff;
    position: relative;
  }
}
.addUser-sure {
  width: 100px;
  margin-top: 10px;
  margin-left: 10px;
}

.el-tab-pane {
  width: 200px;
  > .el-input {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  > .addUser-select {
    margin: 10px 0;
    width: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    > div {
      display: flex;
      align-items: center;
    }
  }
  .userButton {
    height: 60px;
     display: flex;
    align-items: center;
     margin: 10px 15px;
  }
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
  color: #295eff;
  border-color: #295eff;
  border: 1px solid #295eff;
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
  outline: 3px solid rgba(1, 57, 253, 0.06);
}
</style>
