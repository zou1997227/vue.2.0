<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          :class="{'current' : item.current}"
          v-for="item in menuTab"
          :key="item.id"
          @click="toggleMenu(item)"
        >{{item.txt}}</li>
        <!-- <li>注册</li> -->
      </ul>

      <!-- form验证表单 -->
      <el-form
        :model="loginFrom"
        status-icon
        :rules="rules"
        ref="loginFrom"
        class="demo-loginFrom login-form"
        size="medium"
      >
        <!-- 邮箱 -->
        <el-form-item prop="username" class="item-from">
          <label for="username">邮箱</label>
          <el-input id="username" type="text" v-model="loginFrom.username" autocomplete="off" class="input"></el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item prop="password" class="item-from">
          <label for="password">密码</label>
          <el-input
            id="password"
            type="text"
            v-model="loginFrom.password"
            autocomplete="off"
            class="input"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <!-- 验证密码 -->
        <!-- 使用v-show的话有一些小bug,切换到login页面的话也是提交不成功,可以使用v-if,也可以重新加一个判断 -->
        <el-form-item prop="passwords" class="item-from" v-show="model === 'register'">
          <label for="passwords">重复密码</label>
          <el-input
          id="passwords"
            type="text"
            v-model="loginFrom.passwords"
            autocomplete="off"
            class="input"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <!-- 验证码 -->
        <el-form-item prop="code" class="item-from">
          <label for="code">验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <!-- .number的作用是不让输入字符,只允许输入数字 -->
              <el-input id="code" type="text" v-model="loginFrom.code" maxlength="6"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button type="success" class="block" @click="getSms()" :disabled="codeButtonStatus.status"
              >{{codeButtonStatus.text}}</el-button>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item>
          <el-button type="danger" :disabled="loginButtonStatus" @click="submitForm('loginFrom')" class="login-bth block">{{model == 'login' ? "登录" : "注册"}}</el-button>
          <!-- <el-button @click="resetForm('loginFrom')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import {GetSms} from '@/api/login';
import {reactive,ref,isRef, toRefs} from '@vue/composition-api';
import {stripscript,validateEmail,validateCodes,validatePasswords} from "@/utils/validate";
export default {
    name:'login',
    // vue3.0语法,都写在这个函数里面
  // setup(props,context){
     /**
     *attrs: (...) == this.$attrs
      emit: (...) == this.$emit
      listeners: (...) == this.$listeners
      parent: (...) == this.$parent
      refs: (...) == this.$refs
      root: (...) == this
      */
    // 解构的写法
    setup(props,{refs,root}){
    // 验证用户名
   let validateUsername = (rule, value, callback) => {
          
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if(validateEmail(value)){
          callback(new Error('用户名格式有误'));
         
        }else{
             callback();
        }
      };

  //   验证密码
      let validatePassword = (rule, value, callback) => {
        //   console.log(stripscript(value));
        // 把过滤后的数据重新绑定到value里面
          loginFrom.password= stripscript(value)
          // value = stripscript(value)

        if (value === '') {
          callback(new Error('草拟吗输入密码呀,傻逼'));
        } else if (validatePasswords(value)) {
          callback(new Error('请输入6到20位包含数字大小写字母特殊字符的正确密码格式'));
        } else {
          callback();
        }
      };

      //   验证重复密码
      let validatePasswordd = (rule, value, callback) => {
        //   console.log(stripscript(value));
        // 把过滤后的数据重新绑定到value里面
          loginFrom.passwords= stripscript(value)
          value = stripscript(value)
        // 解决v-show的登录小bug
          if(model.value == 'login'){
              callback();
          }

        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value != loginFrom.password) {
          callback(new Error('两次密码输入不一样'));
        } else {
          callback();
        }
      };

    //   验证验证码正则格式
        let validateCode = (rule, value, callback) => { 
            loginFrom.code= stripscript(value)
            value = stripscript(value)
        if (!value) {
           callback(new Error('验证码不能为空'));
        }else if(validateCodes(value)){
           callback(new Error('请输入6位数的数字字母不区分大小写的验证码'));
        }else{
            callback();
        }
       
      };
       /*********************************************************************************************************************
       * 声明数据
       */
      // 这里面放置data数据、生命周期、自定义的函数
      const menuTab = reactive([
        {txt:'登录',current:true,type:'login'},
        {txt:'注册',current:false,type:'register'}
      ]);

      //模块值
      const model = ref('login');
      // 登录按钮禁用状态
      const loginButtonStatus = ref(true);

      // 验证码按钮状态
      const codeButtonStatus = reactive({
        status:false,
        text:'获取验证码'
      });

      const timer = ref('');
    
      // console.log(isRef(model) ? true : false);
      // console.log(menuTab[0]);
      // let a = reactive({
      //   x:1,
      //   y:2
      // })
      // toRrfs将对象数据类型转化为基础数据类型
      // let b = toRefs(a)

      // console.log(b.x.value);
      
      
      // 表单的绑定数据
      const loginFrom =reactive({
          username: '',
          password: '',
          code: '',
          passwords:'',
        });

        // 表单验证
        const rules = reactive({
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
        });


        /**
       * 1、不建议在一个方法里面做多件不同的事件（尽可能只做自己本身的事，不要做其他人的事情）
       * 2、尽量把相同的事情封装一个方法里面，通过调用函数进行执行
       */

      /**
       * 声明函数
       */
      // 切换登录注册模块
      //以声明函数的方式创建函数 数据驱动视图
     const toggleMenu =(data =>{
        //  console.log(data)
         menuTab.forEach(elem =>{
             // console.log(elem);
             elem.current = false;
         });
         data.current= true;
         model.value=data.type;
         resetFormData();
         clearCountDown();
       
    });

    // 重置表单,ui库提供的方法
   const  resetFormData =( () => {
      // this.$refs[formName].resetFields(); //2.0
        // refs.loginFrom.resetFields();//3.0
        refs['loginFrom'].resetFields();//3.0用括号要用引号引起来
      });

      // 更新按钮状态
      const updataButtonStatus = ((params) =>{
        codeButtonStatus.status = params.status,
        codeButtonStatus.text = params.text
      })

    // 提交表单验证方法
   const submitForm = (formName => {
    //  context.refs[formName].validate((valid) => {
      // 解构的写法,不用加context了
        refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            alert('error submit!!');
            return false;
          }
        })
      });
      // 获取验证码
      const getSms = (() =>{
        // const data = {
        //   username:loginFrom.username
        // }
        // 请求的接口
        // 前端写了拦截就会前端拦截,拦截器就不会拦截,前端和拦截器都要做拦截
        // 验证邮箱
        if(loginFrom.username == ''){
          root.$message.error('邮箱不能为空');
          return false
        }
        // 验证邮箱格式
        if(validateEmail(loginFrom.username)){
          root.$message.error('邮箱格式不正确,请重新输入');
          return false
        }
        let requestData = {
          username:loginFrom.username,module:model.value
          }

          // 修改获取验证码按钮状态
          updataButtonStatus({
            status:true,
            text:'发送中'
          })

        GetSms(requestData).then(response => {
          let data = response.data
          console.log(data);
          root.$message({
            message:data.message,
            type:'success',
            showClose: true,
            center:true,
            duration:10000,
          });
          loginButtonStatus.value = false
          countDown(10)
          
        }).catch(error =>{
          console.log(error);
          updataButtonStatus.value = false;
          updataButtonStatus({
            status:false,
            text:'再次获取'
          })
          
        });
        // alert('fjsk')
      })

      // 倒时器
    const countDown = ((number) => {
       // 60 和 0不见了，故意留BUG
        // setTimeout:clearTimeout(变量)  只执行一次
        // setInterval:clearInterval(变量))  不断的执行，需要条件才会停止
        // 判断定时器是否存在，存在则清除
        // if(timer.value){clearInterval(timer.value)}
        let time = number
        timer.value = setInterval(()=>{
          console.log(time);
          
          time--;
          if(time===0){
            clearInterval(timer.value)
            updataButtonStatus({
              status:false,
              text:'再次获取'
            })
          }else{
            codeButtonStatus.text = `倒计时${time}秒`// es5 '倒计时' + time + '秒'
          }
        },1000)
    })

    // 清除倒计时
    const clearCountDown = (() => {
      // 还原验证码默然状态
      updataButtonStatus({
        status:false,
        text:'获取验证码'
      });
      // 清除定时器
      clearInterval(timer.value)
    })

      return{
        menuTab,
        model,
        loginFrom,
        rules,
        toggleMenu,
        submitForm,
        getSms,
        loginButtonStatus,
        codeButtonStatus,
        timer,

      }

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
  margin: auto;
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