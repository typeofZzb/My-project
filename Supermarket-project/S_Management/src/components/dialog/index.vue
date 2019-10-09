<template>
    <div class="dialog">
        <div class="center">
            <p class="ptitle">
                添加banner
                <span class='close'
                      @click="close">x</span>
            </p>
            <div class="upimg">
                <el-upload class="avatar-uploader"
                           placeholder="asda"
                           action="/api/upimage"
                           :show-file-list="false"
                           :on-success="handleAvatarSuccess"
                           :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl"
                         :src="imageUrl"
                         class="avatar">
                    <i v-else
                       class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
            <div class="btbox">
                <el-form ref="form"
                         :model="form"
                         label-width="80px">
                    <el-form-item label="活动标题" prop="banner_title">
                        <el-input v-model="form.banner_title"></el-input>
                    </el-form-item>
                    <el-form-item label="起止时间" prop="banner_timer">
                        <el-date-picker
                            class="add-right"
                            v-model="form.banner_timer"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                        ></el-date-picker>
                    </el-form-item>
                    <el-form-item label="活动链接" prop="banner_url">
                        <el-input v-model="form.banner_url"></el-input>
                    </el-form-item>
                </el-form>
                <p class="btm">
                    <el-button class="btm"
                            @click="submitFn('form')"
                            type="primary">提交</el-button>
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Vue ,Emit} from 'vue-property-decorator';
import { namespace } from "vuex-class"
import api from "@/api/";

const someModule = namespace("home");

@Component({})
export default class extends Vue {
    
    // banner 集成
    form = {
        // banner title
        banner_title:"",
        // banner 开始时间-截至时间
        banner_timer:"",
        // banner 链接地址
        banner_url:"",
       
    };
    // banner 图片url
    imageUrl =""
    close() {
        this.clear();
        this.$bus.$emit('closeDialog');
    }
    // 清空输入框中的文字
    clear() {
        this.form.banner_title = '';
        this.form.banner_timer = '';
        this.form.banner_url = '';
        this.imageUrl = '';   
    }
    // 上传图片成功
    handleAvatarSuccess(res:any) {
        this.imageUrl = "http://169.254.25.25:7002"+res.data.filename;
    }
    // 上传图片的文件
    beforeAvatarUpload(file:any) {
        const isJPG = ["image/jpeg","image/jpg","image/png",'"image/gif"'].includes(file.type);
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
            this.$message.error("上传头像图片只能是 JPG,JPEG,PNG,GIF 格式!");
        }
        if (!isLt2M) {
            this.$message.error("上传头像图片大小不能超过 2MB!");
        }
        return isJPG && isLt2M;
    }
    // 点击添加banner后获取所有的value
    submitFn(formName:any){
        this.$refs[formName].validate((valid:any) => {
            // 重新规划参数
            let obj = {
                image:this.imageUrl,
                start_time:this.form.banner_timer[0],
                end_time:this.form.banner_timer[1],
                active_name:this.form.banner_title,
                url:this.form.banner_url
            }
            if(valid){
                this.$emit("submitAdd",obj)
                this.close();
            }
            else{
                alert("您的内容有未填项呐");
            }
        });
    }
    
}
</script>
<style lang="scss" scoped>
.dialog {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    left: 0;
    top: 0;
    z-index:100;
    .center {
        width: 520px;
        background: white;
        border-radius: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        box-sizing: border-box;

        .ptitle {
            text-align: center;
            font-weight: bold;
            line-height: 40px;
            .close {
                position: absolute;
                right: 25px;
                font-weight: normal;
            }
            
        }
    }
    .upimg {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 120px;
    //   background: red;
    line-height: 120px;
}

.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.btm {
    text-align: center;
}
.el-form{
  margin-bottom: 15px;
  .el-form-item{
    margin: 10px 0;
  }
}
}
</style>

