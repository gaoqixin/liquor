<template>
  <div>
    <el-container>
      <el-header>
        <Head/> <!-- 公共头部组件 -->
      </el-header>
      <el-container>
        <el-container>
          <!-- <el-main>博客展示区</br>博客展示区</br>博客展示区</br>博客展示区</br>博客展示区</br></el-main> -->
          <el-main>
        		<main>
        			<div class="page"> <!-- 放置整个背景div -->
                <div class="quote">
                  <span class="line1 position1">大鹏一日同风起</span>
                  <span class="line2 position2">扶摇直上九万里</span>
                </div>
        				<div class="page-content"> <!-- 放置圆形动画div -->
        					<i class="dark-bg"></i>
        					<div class="layers-rock-last"><!-- 背景山峰 -->
        						<i class="star-0"></i>
        						<i class="star-1"></i>
        						<i class="star-2"></i>
        						<i class="star-3"></i>
        						<i class="star-4"></i>
        						<i class="star-5"></i>
        						<i class="star-6"></i>
        						<i class="star-7"></i>
        						<i class="star-8"></i>
        						<i class="star-9"></i>
        						<i class="star-10"></i>
        						<i class="star-11"></i>
        						<i class="star-12"></i>
        						<div class="rock rock-1"><i class="dark-bg"></i></div>
        						<div class="rock rock-2"><i class="dark-bg"></i></div>
        						<div class="rock rock-3"><i class="dark-bg"></i></div>
        						<div class="rock rock-4"><i class="dark-bg"></i></div>
        						<div class="rock-bg"><i class="dark-bg"></i></div>
        					</div>
        					<div class="layers-trees-3"><!-- 背景树 -->
        						<div class="tree-1"><i class="dark-bg"></i></div>
        						<div class="tree-2"><i class="dark-bg"></i></div>
        						<div class="tree-3"><i class="dark-bg"></i></div>
        						<div class="tree-4"><i class="dark-bg"></i></div>
        						<div class="tree-5"><i class="dark-bg"></i></div>
        						<div class="tree-6"><i class="dark-bg"></i></div>
        					</div>
        					<div class="layers-trees-2"><!-- 背景树 -->
        						<div class="tree-1">
        							<i class="dark-bg"><i class="i-first"></i><i class="i-second"></i></i>
        							<i class="i-first"></i><i class="i-second"></i>
        						</div>
        						<div class="tree-2">
        							<i class="dark-bg"><i class="i-first"></i><i class="i-second"></i></i>
        							<i class="i-first"></i><i class="i-second"></i>
        						</div>
        						<div class="tree-3">
        							<i class="dark-bg"><i class="i-first"></i><i class="i-second"></i></i>
        							<i class="i-first"></i><i class="i-second"></i>
        						</div>
        						<div class="tree-4">
        							<i class="dark-bg"><i class="i-first"></i><i class="i-second"></i></i>
        							<i class="i-first"></i><i class="i-second"></i>
        						</div>
        					</div>
        					<div class="layers-rock-first"><!-- 前面的岩石 -->
        						<i class="rock-bg"></i>
        						<div class="rock-left-content">
        							<i class="rock-2">
        								<i class="rock-top"></i>
        								<i class="rock-left"></i>
        							</i>
        							<i class="rock-1">
        								<i class="rock-left"></i>
        								<i class="rock-right"></i>
        								<i class="rock-center"></i>
        							</i>
        							<i class="rock-3">
        								<i class="rock-left"></i>
        								<i class="rock-top">
        									<i class="rock-top-right"></i>
        								</i>
        							</i>
        						</div>
        						<div class="rock-right-content">
        							<i class="rock-1">
        								<i class="rock-top-back"></i>
        								<i class="rock-top-front"></i>
        								<i class="rock-bottom-back"></i>
        								<i class="rock-bottom-front"></i>
        							</i>
        							<i class="rock-2">
        								<i class="rock-bottom"></i>
        								<i class="rock-bottom-front"></i>
        								<i class="rock-top"></i>
        							</i>
        						</div>
        					</div>
        					<div class="layers-kylo">
        						<div class="kylo">
        							<div class="kylo-head"><!-- 绝地武士头 -->
        								<i class="head-bg"></i>
        								<i class="head-content"><i class="head-content-mask"></i></i>
        								<i class="head">
        									<i class="head-last"></i>
        									<i class="head-light"></i>
        									<i class="head-second"></i>
        									<i class="head-first"></i>
        									<i class="head-mask">
        										<i class="head-mask-top"></i>
        										<i class="head-mask-bottom"><i class="head-mask-bottom-place"></i></i>
        									</i>
        								</i>
        							</div>
        							<div class="kylo-body-top"><!-- 绝地武士上半身 -->
        								<i class="kylo-body-top-black"></i>
        								<i class="kylo-body-top-shoulders">
        									<i class="shoulders-left"></i>
        									<i class="shoulders-right"></i>
        								</i>
        							</div>
        							<div class="kylo-body-bottom"><!-- 绝地武士下半身 -->
        								<i class="kylo-body-bottom-black"></i>
        							</div>
        							<i class="kylo-hand-left"><!-- 左边手 -->
        								<i class="hand-arm">
        									<i class="hand-last">
        										<i class="hand-finger-right"></i>
        										<i class="lightsaber">
        											<i class="lightsaber-light-bg"></i>
        											<i class="lightsaber-cross-content">
        												<i class="lightsaber-cross-light">
        													<i class="light-item-1"></i>
        													<i class="light-item-2"></i>
        												</i>
        												<i class="lightsaber-cross"></i>
        											</i>
        											<i class="lightsaber-light"><!-- 激光剑 -->
        												<i class="light-item-1"></i>
        												<i class="light-item-2"></i>
        												<i class="light-item-3"></i>
        												<i class="light-item-4"></i>
        												<i class="light-item-5"></i>
        												<i class="light-item-6"></i>
        												<i class="light-item-7"></i>
        												<i class="light-item-8"></i>
        												<i class="light-item-9"></i>
        											</i>
        										</i>
        									</i>
        								</i>
        							</i>
        							<i class="kylo-hand-right"><!-- 右边手 -->
        								<i class="hand-arm">
        									<i class="hand-last">
        										<i class="hand-finger-left"></i>
        									</i>
        								</i>
        							</i>
        						</div>
        					</div>
        					<div class="layers-trees-1">
        						<div class="tree-left-content"><!-- 左边第一层背景树 -->
        							<i class="i-right-top"></i>
        							<i class="i-right-middle"></i>
        							<i class="i-right-bottom"></i>
        							<i class="limb">
        								<i class="limb-bottom"></i>
        								<i class="limb-1">
        									<i class="limb-2">
        										<i class="limb-3-second"></i>
        										<i class="limb-3">
        											<i class="limb-4">
        												<i class="limb-5-second"></i>
        												<i class="limb-5-first"></i>
        											</i>
        										</i>
        									</i>
        								</i>
        							</i>
        						</div>
        						<div class="tree-right-content"><!-- 右边第一层背景树 -->
        							<i class="i-left-top">
        								<i class="top-limb">
        									<i class="top-limb-1">
        										<i class="top-limb-2">
        											<i class="top-limb-3"></i>
        										</i>
        									</i>
        								</i>
        							</i>
        							<i class="i-left-bottom">
        								<i class="bottom-limb">
        									<i class="bottom-limb-1">
        										<i class="bottom-limb-2">
        											<i class="bottom-limb-3">
        												<i class="bottom-limb-4"></i>
        											</i>
        										</i>
        									</i>
        								</i>
        							</i>
        							<i class="center-limb">
        								<i class="center-limb-1">
        									<i class="center-limb-2"></i>
        								</i>
        							</i>
        							<i class="i-right-top"></i>
        							<i class="i-right-bottom"><i></i></i>
        						</div>
        					</div>
        				</div>
        			</div>
        		</main>
          </el-main>
        </el-container>
        <el-aside width="350px">
          <div style="width: auto; height: 200px;">
            <object type="application/x-shockwave-flash" style="outline:none;" data="http://cdn.abowman.com/widgets/fish/fish.swf?" width="100%" height="100%">
              <param name="movie" value="http://cdn.abowman.com/widgets/fish/fish.swf?"></param>
              <param name="AllowScriptAccess" value="always"></param>
              <param name="wmode" value="opaque"></param>
              <param name="scale" value="noscale"/><param name="salign" value="tl"/>
            </object>
          </div>
          <div>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>{{ AnnTitle }}</span>
              </div>
              <div v-for="item in list" :key="item.id" class="text item">
                  <span @click="showAnn(item.id)">
                    <el-tag size="mini" :type="item.type | tagTypeFilter">{{ item.type | typeFilter }}</el-tag>
                    {{ item.title }}
                  </span>
              </div>
            </el-card>
            <el-dialog
              :title="Announcement.title"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose"
              :show-close="false">
              <el-row>
                <el-col :span="8"><div class="annPublish">{{ Announcement.createTime }}</div></el-col>
                <el-col :span="8"><div class="annType">
                  <el-tag size="mini" :type="Announcement.type | tagTypeFilter">{{ Announcement.type | typeFilter }}</el-tag>
                </div></el-col>
                <el-col :span="8"><div class="annviewNum">浏览量：{{ Announcement.viewNum }}</div></el-col><hr/>
              </el-row>
              <el-row>
                <el-col :span="24"><div class="annContent">{{ Announcement.content }}</div></el-col>
              </el-row>
            </el-dialog>
          </div>
        </el-aside>
      </el-container>
      <el-footer>
        <Foot/>
      </el-footer>
    </el-container>

  </div>
</template>

<script>
  import '../assets/JediKnight/css/component.css'; //引入绝地武士样式
  import '../assets/JediKnight/pater/pater.css'; //引入绝地武士样式

  import Head from './layout/head';
  import Foot from './layout/foot';

  import {
    getAnnouncements,
    showAnnDetail
  } from 'api/index';
  import axios from 'axios';


  const manageTypeOptions = [{ //公告类别显示转换，将后台获取的数字展示成汉字
      key: 10,
      value: '网站'
    },{
      key: 20,
      value: '博客'
    }];

  const manageTypeKeyValue = manageTypeOptions.reduce((acc, cur) => {
    acc[cur.key] = cur.value;
    return acc
  }, {});

  const tagTypeMap = { //公告标签样式
    10: 'danger',
    20: 'warning'
  };

  export default {
    name: 'index',
    components: {//注册组件
      Head,
      Foot
    },
    created() { //页面打开后请求的接口
      this.getAnnouncementList();
    },
    data() {
      return {
        AnnTitle: '网站公告',
        list: null,
        listLoading: false,
        listParams: {
          pageNum: 1,
          pageSize: 5,
          totalNum: 0
        },
        manageTypeOptions,
        Announcement: {},
        dialogVisible: false
      };
    },
    filters: {
      TypeFilter(type){
        return manageTypeKeyValue[type]
      },
      tagTypeFilter(type){ //动态切换标签样式
        return tagTypeMap[type]
      }
    },
    watch:{ //监听数据改变

    },
    methods: {
      getAnnouncementList() {
        this.listLoading = true;
        getAnnouncements(this.listParams).then(response => {
          this.list = response.data.list;
          this.listParams.totalNum = response.data.page.totalNum;
          this.listLoading = false;
        })
      },
      showAnn(id){
        this.dialogVisible = true;
        var params = {
          annId: id
        };
        showAnnDetail(params).then(response => {
          this.Announcement = response.data.announcement;
        }, err =>{
          this.$message({
            type: 'error',
            message: err
          });
        })
      },
      handleClose(done) {
        this.$confirm('看完了吗？ 😄').then(_ => {
            done();
          }).catch(_ => {});
      }
    }
  }
</script>

<style>
.annPublish{
  text-align: left;
  font-size: 12px;
}
.annviewNum{
  text-align: right;
  font-size: 12px;
}
.annContent{
  text-align: left;
  text-indent: 2em; /*em是相对单位，2em即现在一个字大小的两倍*/
}
.text {
  font-size: 14px;
}
.item {
  font-size: 12px;
  margin-bottom: 18px;
  /*超出显示省略号*/
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /*显示行数*/
  -webkit-box-orient: vertical;
}
.item:hover {
  text-decoration: underline;
  color: #EE7700;
  cursor:pointer; /*鼠标指针手指样式*/
}

.box-card {
  width: auto;
  line-height: 25px;
  text-align: left;
}

.el-header, .el-footer {
    background-color: #B3C0D1;
    text-align: center;
    padding: 0px;
    margin: 0px;
  }
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
  padding: 0px;
  margin: 0px;
}
.el-main {
  background-color: #E9EEF3;
  text-align: center;
  padding: 10px;
  margin: 0px;
}

.page {
  padding: 0px;
  margin: 0px;
}
.page-content{
  margin-left: 5%;
  width: 600px;
  height: 600px;
}

  /*↓↓↓↓↓↓↓↓↓↓↓立体字样式↓↓↓↓↓↓↓↓↓*/

  .quote {
    z-index: 1;
    position: absolute;
    left: 45%;
    top: 20%;
  	margin: 2rem auto;
  	width: 20.5rem;
  }
  span {
  	display: block;
  	text-rendering: optimizeLegibility;
  }

  .line1 {
  	font: 2.5rem/3.5rem '微软雅黑', serif;
  	text-align: right;
  	margin-right: 0.7rem;
  	color: #3BDDC4;
  	position: relative;
    width: 20px;
    margin: 0 auto;
    line-height: 50px;
  }
  .line1:after {
  	content: '大鹏一日同风起';
  	position: absolute;
  	top: 0px;
  	right: 0px;
  	filter: blur(5px);
  	color: white;
    width: 15px;
    margin: 0 auto;
    line-height: 50px;
  }

  .line2 {
    font: 2.5rem/3.5rem '微软雅黑', serif;
  	text-align: right;
  	margin-right: 0.7rem;
  	color: #ff7575;
  	position: relative;
    width: 20px;
    margin: 0 auto;
    line-height: 50px;
  }
  .line2:after {
  	content: '扶摇直上九万里';
  	position: absolute;
  	top: 0px;
  	right: 0px;
  	filter: blur(5px);
  	color: white;
    width: 15px;
    margin: 0 auto;
    line-height: 50px;
  }

  .position1 {
    position: absolute;
    left: 388px;
    top: -150px;
  }
  .position2 {
    position: absolute;
    left: 220px;
    top: 100px;
  }

  /*↑↑↑↑↑↑↑↑↑立体字样式结束↑↑↑↑↑↑↑↑↑↑*/
</style>
