<template>
  <div>
    <div class="specials-section">
      <el-row>
        <el-col :span="6"><div class="grid-content">
            <h3>请我喝咖啡</h3>
            <el-row>
              <el-col :span="12">
                <img src="../../assets/wechat_pay.png" width="105px" title="微信"/>
              </el-col>
              <el-col :span="12">
                <img src="../../assets/alipay.png" width="105px" title="支付宝"/>
              </el-col>
            </el-row>
        </div></el-col>
        <el-col :span="6"><div class="grid-content">
          <h3>联系</h3>
          <p>{{ user.nickname }}</p>
          <p>电话：{{ user.mobile }}</p>
          <p class="email">邮件：<a href="mailto:gpsinger@163.com">{{ user.email }}</a></p>
        </div></el-col>
        <el-col :span="6"><div class="grid-content">
          <h3>社交</h3>
          <ul class="social">
            <li><i class="fa fa-facebook"></i><a href="#">Facebook</a></li>
            <li><i class="fa fa-twitter"></i><a href="#">Twitter</a></li>
            <li><i class="fa fa-github"></i><a href="#">Github</a></li>
          </ul>
        </div></el-col>
        <el-col :span="6"><div class="weibo">
          <el-row>
            <el-col :span="12">
              <span v-on:mouseenter="showWeiboOrCodeMsg" v-on:mouseleave="closeWeiboOrCodeMsg">
                <img src="../../assets/weibo.png" width="150px" title="微博"/></span>
            </el-col>
            <el-col :span="12"><span v-show="weiboORCode"><el-tag type="success">还瞅啥！关个注呗</el-tag></span></el-col>
          </el-row>
        </div></el-col>
      </el-row>
		</div>
    <div class="footer-section">
			<p>Copyright &copy; 2015.Company name All rights reserved.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'foot',
    data() {
      return {
        user: {
          username: 'gp3',
          head: 'http://scimg.jb51.net/allimg/150617/14-15061G51552620.jpg',
          nickname: '高鹏',
          mobile: ' +86 15527270665',
          email: 'gpsinger@163.com'
        },
        weiboORCode: false
      };
    },
    methods: {
      showWeiboOrCodeMsg: function(){ //鼠标悬停事件
        this.weiboORCode = true;
      },
      closeWeiboOrCodeMsg: function(){ //鼠标悬停移出事件
        this.weiboORCode = false;
      }
    }
  }
</script>

<style>
  .weibo {
    margin-top: 30px;
  }
  .social {
    list-style: none;
    padding: 0;
    line-height: 35px;
  }
  .social li a {
    color: white;
    text-decoration: none;
    margin-left: 8px;
  }
  .social li a:hover {
    color: white;
    text-decoration: underline;
  }
  .email a {
    text-decoration: none;
    color: white;
  }
  .email a:hover {
    text-decoration: underline;
    color: white;
  }
  .grid-content {
    text-align: left;
    padding-left: 100px;
  }
  .specials-section {
    font-family: "Microsoft YaHei";
    color: white;
    background-color: #222222;
    width: auto;
    height: 200px;
  }
  .footer-section {
    background-color: #994868;
    border: 1px solid #994868;
    color: white;
    font-family: "Microsoft YaHei";
    font-size: 12px;
  }

</style>
