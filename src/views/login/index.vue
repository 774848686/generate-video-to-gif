<template>
  <div id="login">
    <nav-bar title="登录"></nav-bar>
    <div class="logo">
      <img src="../../assets/images/app-logo.png" alt />
    </div>
    <div class="“filed">
      <van-cell-group>
        <van-field v-model="account" placeholder="请输入您的手机号" />
        <van-field v-model="password" type="password" placeholder="请输入您的密码" />
      </van-cell-group>
    </div>
    <div class="register" @click="toLink">还没账号，立即注册</div>
    <div class="login-send" @click="loginSend" :style="account?'opacity:1':'opacity:0.4'">登录</div>
  </div>
</template>

<script>
import { loginIn } from "@/api/login";
import { setUserKey,getUserKey,reportLog } from "@/utils";
import { Toast } from "vant";
import {validateTel} from '@/utils/validate';
import navBar from "../components/NavBar";
import {
  getGdata
} from '@/utils/Gdata';
export default {
  name: "login",
  components: {
    navBar
  },
  data() {
    return {
      account: "",
      password: "",
      time: 60 * 1000
    };
  },
  methods: {
    loginSend() {
      if (!this.account || !this.password) {
        Toast("请填写完整！");
        return;
      }
      if(!validateTel(this.account)){
         Toast("手机号码有误");
        return;
      }
      loginIn({
        account: this.account,
        password: this.password
      }).then(res => {
        setUserKey(JSON.stringify(Object.assign(getUserKey(),{...res.returnValue,userId:res.returnValue.id})));
        getGdata({...res.returnValue,userId:res.returnValue.id});
        reportLog('10');
        if (this.$route.query.path) {
          this.$router.push({
            name: this.$route.query.path,
            params: {
              id: this.$route.query.id
            }
          });
        } else {
          this.$router.push("/");
        }
      });
    },
    timeEnd() {
      console.log("end");
    },
    toLink() {
      this.$router.push("/register");
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
/deep/ .van-nav-bar .van-icon {
  color: #303030 !important;
}
#login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  overflow: hidden;
  background: #ffffff;
  width: 750px;
  padding: 0 45px;
  box-sizing: border-box;
  .logo {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    img {
      width: 120px;
      height: 120px;
      background: #db5545;
      border-radius: 12px;
      margin: 0 auto;
      margin-top: 160px;
    }
    p {
      font-size: 46px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(48, 48, 48, 1);
      margin-top: 174px;
      margin-bottom: 60px;
    }
  }
  /deep/ .van-cell {
    padding: 0;
    margin-bottom: 30px;
  }
  /deep/ .van-field__body {
    line-height: 44px;
  }
  /deep/ .van-field__body {
    border-bottom: 1px solid #dedede;
  }
  /deep/ .van-count-down {
    .item {
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #db5545;
    }
  }
  .filed {
    position: relative;
  }
  /deep/ .van-hairline--top-bottom::after,
  .van-hairline-unset--top-bottom::after {
    border: none;
  }
   /deep/ .van-nav-bar__left{
    left:-12px;
  }
  .register {
    text-align: right;
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #db5545;
  }
  .sned {
    position: absolute;
    right: 0;
    bottom: 25px;
    font-size: 26px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #db5545;
  }
  .login-send {
    width: 660px;
    height: 88px;
    line-height: 80px;
    text-align: center;
    background: #db5545;
    border-radius: 12px;
    opacity: 0.4;
    font-size: 32px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    margin-top: 150px;
  }
}
</style>
