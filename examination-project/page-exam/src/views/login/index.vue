<template>
    <div class="wrap">   
        <el-form status-icon label-width="55px" class="demo-ruleForm" :rules="userRule" ref="loginForm" :model="userinfo">
        <el-form-item label="用户名" prop="user_name">
            <el-input type="text" placeholder="请输入用户名" autocomplete="off" v-model="userinfo.user_name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="user_pwd">
            <el-input type="password" placeholder="请输入密码" autocomplete="off" v-model="userinfo.user_pwd"></el-input>
        </el-form-item>
        <el-form-item class="clonePasd">
            <p><el-checkbox label="记住密码" name="type"></el-checkbox></p>
            <p>忘记密码</p>
        </el-form-item>
        <el-form-item>
            <el-button type="button" @click="login">提交</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {login,getAuthInfo,getUserinfoNew} from "@/api/index"
export default {
    props:{

    },
    components:{

    },
    data(){
        const userName = (rule, value, callback) => {
            let reg=/^[a-zA-Z0-9]{4,10}$/i;
            if (!value) {
                callback(new Error('请输入用户名'));
                return;
            }
            if(!reg.test(value)){
                callback(new Error('请输入正确格式:支持4-10位，以字母开头'));
                return;
            }
            callback()
        }
        const userPwd = (rule, value, callback) => {
            // 只能输入6-20个以字母开头、可带数字
            let reg=/^.{6,20}$/i;
            if (!value) {
                callback(new Error('请输入密码'));
                return;
            }
            if(!reg.test(value)){
                callback(new Error('请输入正确格式:支持6-20位，以字母开头'));
                return;
            }
            callback()
        }
        return {
            userinfo:{
                user_name:'',
                user_pwd:''
            },
            userRule:{
                user_name:{
                    validator: userName,
                    trigger: ['change','blur']
                },
                user_pwd:{
                    validator: userPwd,
                    trigger: ['change','blur']
                }
            }
        }
    },
    computed:{

    },
    methods:{
        login(){
            this.$refs['loginForm'].validate(async (data) => {
                if(data){
                    let data=await login({
                        ...this.userinfo
                    })
                    window.sessionStorage.setItem("authorization",data.token)
                    let userInfo=await getAuthInfo();
                    let {data:limitView}=await getUserinfoNew(userInfo.data.user_id);
                    userInfo.limitView=limitView
                     window.sessionStorage.setItem("userInfo",JSON.stringify(userInfo))
                    this.$router.push("/home")
                }
            });
        }
    }
}
</script>
<style scoped lang="scss">
    .wrap{
        width: 100%;
        height: 100%;
        background:url("../../static/img/login.jpg") no-repeat;
        background-size:cover;
        .el-form{
            width: 400px;
            padding: 40px 20px;
            border: 1px solid #ccc;
            border-radius: 3px;
            background: #fff;
            position: absolute;
            right: 15%;
            top: 25%;
            box-sizing: border-box;
            .el-form-item{
                margin-bottom: 40px;
                &:last-child{
                    width: 100%;
                    margin-bottom: 0;
                    button{
                        width: 100%;
                        background:#4e75ff;
                        color: #fff;
                    }
                }
            }
            .clonePasd{
                .el-form-item__content{
                    p{
                        float: left;
                        &:last-child{
                            float: right;
                            color: #4e75ff;
                        }
                    }
                }
            }
        }
    }
</style>