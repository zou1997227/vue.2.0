<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          :class="{'current' : item.current}"
          v-for="item in menuTab"
          :key="item.id"
          @click="toggleMneu(item)"
        >{{item.txt}}</li>
        <!-- <li>注册</li> -->
      </ul>

      <!-- form验证表单 -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm login-form"
        size="medium"
      >
        <!-- 邮箱 -->
        <el-form-item prop="username" class="item-from">
          <label for="username">邮箱</label>
          <el-input type="text" v-model="ruleForm.username" autocomplete="off" class="input"></el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item prop="password" class="item-from">
          <label for="password">密码</label>
          <el-input
            type="text"
            v-model="ruleForm.password"
            autocomplete="off"
            class="input"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <!-- 验证密码 -->
        <!-- 使用v-show的话有一些小bug,切换到login页面的话也是提交不成功,可以使用v-if,也可以重新加一个判断 -->
        <el-form-item prop="passwords" class="item-from" v-show="model === 'registered'">
          <label for="passwords">重复密码</label>
          <el-input
            type="text"
            v-model="ruleForm.passwords"
            autocomplete="off"
            class="input"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <!-- 验证码 -->
        <el-form-item prop="code" class="item-from">
          <label>验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <!-- .number的作用是不让输入字符,只允许输入数字 -->
              <el-input type="text" v-model="ruleForm.code" maxlength="6"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button type="success" class="block">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item>
          <el-button type="danger" @click="submitForm('ruleForm')" class="login-bth block">{{bth}}</el-button>
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {stripscript,validateEmail,validateCodes,validatePasswords} from "@/utils/validate";
export default {
    name:'login',
    data (){
    //   验证邮箱
      var validateUsername = (rule, value, callback) => {
          
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if(validateEmail(value)){
          callback(new Error('用户名格式有误'));
         
        }else{
             callback();
        }
      };

    //   验证密码
      var validatePassword = (rule, value, callback) => {
        //   console.log(stripscript(value));
        // 把过滤后的数据重新绑定到value里面
          this.ruleForm.password= stripscript(value)
          value = stripscript(value)

        if (value === '') {
          callback(new Error('草拟吗输入密码呀,傻逼'));
        } else if (validatePasswords(value)) {
          callback(new Error('请输入6到20位包含数字大小写字母特殊字符的正确密码格式'));
        } else {
          callback();
        }
      };

      //   验证重复密码
      var validatePasswordd = (rule, value, callback) => {
        //   console.log(stripscript(value));
        // 把过滤后的数据重新绑定到value里面
          this.ruleForm.passwords= stripscript(value)
          value = stripscript(value)
        // 解决v-show的登录小bug
          if(this.model == 'login'){
              callback();
          }

        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value != this.ruleForm.password) {
          callback(new Error('两次密码输入不一样'));
        } else {
          callback();
        }
      };

    //   验证验证码正则格式
        var validateCode = (rule, value, callback) => { 
            this.ruleForm.code= stripscript(value)
            value = stripscript(value)
        if (!value) {
           callback(new Error('验证码不能为空'));
        }else if(validateCodes(value)){
           callback(new Error('请输入6位数的数字字母不区分大小写的验证码'));
        }else{
            callback();
        }
       
      };
        return{
            msg:'1111',
            menuTab:[
                {txt:'登录',current:true,type:'login'},
                {txt:'注册',current:false,type:'registered'}
            ],
            // 登录注册按钮切换
            bth:'登录',

            // 校验模块
            model:'login',
            ruleForm: {
          username: '',
          password: '',
          code: '',
          passwords:'',
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
         password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          code: [
            { validator: validateCode, trigger: 'blur' }
          ],
          passwords: [
            { validator: validatePasswordd, trigger: 'blur' }
          ],
        }
        }
        
    },
    created(){

    },
    mounted(){},
    methods:{
// 数据驱动视图
    toggleMneu(data){
    console.log(data)
    this.menuTab.forEach(elem =>{
        // console.log(elem);
        elem.current = false;
    })
    data.current= true
    this.model=data.type
    this.bth= '登录'
    if(data.type == 'registered'){
        this.bth='注册'
    }
    },
   submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            alert('error submit!!');
            return false;
          }
        });
      },
     
    },
    props:{
// 子组件的方法
    },
    watch:{

    }
}
</script>

<style lang="scss" scoped>
#login {
  //vh根据可视区域的宽高来定义,10vh就是100%可视区域的高
  height: 100vh;
  background-color: #344a5f;
  display: flex;
}

.login-wrap {
  width: 330px;
  margin:auto;
}

.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, 1);
  }
}

.login-form {
  margin-top: 39px;
  label {
    display: block;
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 14px;
    color: #fff;
  }

  .item-from {
    margin-bottom: 24px;
  }
  .block {
    display: block;
    width: 100%;
  }
  .login-bth {
    margin-top: 8px;
  }
}

//验证码布局样式
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>