<template>
  <div>
    <el-container>
      <el-header>
        <Head/> <!-- 公共头部组件 -->
      </el-header>
      <el-container>
        <el-container>
          <el-main>
        		<div style="height: 60px; margin: 0 auto;">
              <transition name="el-zoom-in-top">
                <!-- 全局搜索、类型筛选 -->
                <div v-show="showSearch" class="transition-box">
                    <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="输入关键字" v-model="listParams.key">
                    </el-input>

                    <el-select clearable style="width: 90px" class="filter-item" v-model="listParams.type" placeholder="类型">
                      <el-option v-for="item in manageTypeOptions" :key="item.value" :label="item.value" :value="item.key">
                      </el-option>
                    </el-select>

                    <el-button class="filter-item" type="primary" style="margin-left: 10px;" v-waves icon="search" @click="handleFilter">搜索</el-button>
                </div>
              </transition>
              <el-row :gutter="20">
                <el-col :span="20"><div><h1 class="blog-type">{{ blogType }}</h1></div></el-col>
                <el-col :span="4"><div style="text-align: right;">
                  <h1><i class="el-icon-search" @click="showSearch = !showSearch"></i></h1>
                </div></el-col>
              </el-row>
            </div>
            <div>
              <div class="blog-list">
                <!-- 博客列表 -->
                <mu-list style="margin: 0px; padding: 0px;">
                  <template v-for="item in list">
                    <mu-list-item  style="margin: 0px; padding: 0px;" @click="showBlogDetails(item.id)">
                      <mu-paper class="list-paper" :zDepth="2">
                        <el-row>
                          <el-col :span="8"><div class="blog-cover">
                            <!-- object-fit: cover; 图片不失真 -->
                            <img :src="item.cover" style="width: 100%; height: 100%; object-fit: cover;"/>
                          </div></el-col>
                          <el-col :span="16"><div class="blog-content">
                            <el-row>
                              <el-col :span="3"><div class="blog-content-type">
                                <el-tag size="small" :type="item.type | tagTypeFilter">{{item.type | typeFilter}}</el-tag>
                              </div></el-col>
                              <el-col :span="21"><div class="blog-content-title">
                                <h2>{{ item.title }}</h2>
                              </div></el-col>
                            </el-row>
                            <el-row>
                              <el-col :span="4"><div class="blog-content-createTime">
                                <i class="fa fa-clock-o"></i>
                                {{ item.createTime | createTimeFilter }}
                              </div></el-col>
                              <el-col :span="4"><div class="blog-content-user">
                                <i class="fa fa-user"></i>
                                {{ item.publisher}}
                              </div></el-col>
                              <el-col :span="4"><div class="blog-content-viewNum">
                                <i class="fa fa-eye"></i>阅读({{ item.viewNum}})
                              </div></el-col>
                              <el-col :span="12"><div class="blog-content-review">
                                <i class="fa fa-comments-o"></i>评论({{ item.reviewNum }})
                              </div></el-col>
                            </el-row>
                            <el-row>
                              <el-col :span="24"><div class="blog-content-brief">
                                {{ item.brief }}
                              </div></el-col>
                            </el-row>
                          </div></el-col>
                        </el-row>
                      </mu-paper>
                    </mu-list-item>
                    <mu-divider/>
                  </template>
                </mu-list>
              </div>
              <div>
                <!-- 分页 -->
                <div v-show="!listLoading" class="pagination-container">
                  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listParams.pageNum" :page-sizes="[5,10,20]" :page-size="listParams.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="listParams.totalNum">
                  </el-pagination>
                </div>
              </div>
            </div>
          </el-main>
        </el-container>
        <el-aside width="400px">
          <div class="aside">
            <mu-paper class="list-paper" :zDepth="2">
              <div class="infinite-container">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>{{ TagsTitle }}</span>
                  </div>
                  <div v-for="item in typeList" :key="item.id" class="text tags_item">
                      <span @click="showBlogByType(item.blogType)">
                        <el-tag size="mini" :type="item.blogType | tagTypeFilter">{{ item.blogType | typeFilter }} ({{ item.num }})</el-tag>
                      </span>
                  </div>
                </el-card>
              </div>
            </mu-paper>
            <mu-paper class="list-paper" :zDepth="2">
              <div class="infinite-container">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>{{ BlogTitle }}</span>
                  </div>
                  <div v-for="item in hotList" :key="item.id" class="text blog_item">
                      <span @click="showBlogDetails(item.id)">
                        <el-tag size="mini" :type="item.type | tagTypeFilter">{{ item.type | typeFilter }}</el-tag>
                        {{ item.title }}
                      </span>
                  </div>
                </el-card>
              </div>
            </mu-paper>
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
  import Head from './layout/head'
  import Foot from './layout/foot'

  import {
    getBlogs,
    getBlogType
  } from '@/api/blog'
  import {format} from '@/utils/index'

  const manageTypeOptions = [{
    key: 1,
    value: 'Java'
  },{
    key: 2,
    value: 'JavaScript'
  },{
    key: 3,
    value: 'CSS'
  },{
    key: 4,
    value: 'HTML'
  },{
    key: 5,
    value: 'VueJS'
  }];
  const manageTypeKeyValue = manageTypeOptions.reduce((acc, cur) => {
    acc[cur.key] = cur.value;
    return acc
  }, {});

  const tagTypeMap = {
    1: '',
    2: 'success',
    3: 'info',
    4: 'warning',
    5: 'danger'
  };

  export default {
    name: 'blog',
    components: {//注册组件
      Head,
      Foot
    },
    data() {
      return {
        list: null, //博客列表
        hotList: null, //热门博客列表
        typeList: null, //类型数量列表
        showSearch: false,
        blogType: '最新博文',
        TagsTitle: '热门标签',
        BlogTitle: '热门文章',

        listLoading: false,
        listParams: {
          pageNum: 1,
          pageSize: 5,
          totalNum: 0,
          key: undefined,
          type: undefined
        },
        manageTypeOptions, //博客类型

        blog: {}
      };
    },
    created() {
      this.getBlogList(); //博客列表接口
      this.getHotBlog(); //热门博客
      this.getBlogTypeList(); //博客类型
    },
    filters: {
      createTimeFilter(date){
        return format(new Date(date))
      },
      typeFilter(type) {
        return manageTypeKeyValue[type]
      },
      tagTypeFilter(type){ //动态切换标签样式
        return tagTypeMap[type]
      }
    },
    mounted () {

    },
    methods: {
      getBlogList() {
        // this.listLoading = true;
        const loading = this.$loading({ //自定义加载动画
          lock: true,
          text: '大鹏起飞了...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        getBlogs(this.listParams).then(response => {
          this.list = response.data.list;
          this.listParams.totalNum = response.data.page.totalNum;
          // this.listLoading = false;
          loading.close(); //关闭自定义加载动画
        }, err => {
          loading.close();
          console.log('错误');
        });
      },
      getHotBlog(){
        let params = {
          pageNum: 1,
          pageSize: 5,
          sort: 2
        }
        getBlogs(params).then(response => {
          this.hotList = response.data.list;
        })
      },
      getBlogTypeList(){
        getBlogType().then(response => {
          this.typeList = response.data.list;
        })
      },
      handleFilter() {
        if (this.listParams.key == '') {
          this.listParams.key = undefined
        }

        if (this.listParams.type == '') {
          this.listParams.type = undefined
        }
        this.getBlogList();
        this.blogType = manageTypeKeyValue[this.listParams.type];
        this.showSearch = false;
      },
      handleSizeChange(val) { //页面显示条数修改
        this.listParams.pageSize = val;
        this.getBlogList();
      },
      handleCurrentChange(val) { //翻页
        this.listParams.pageNum = val;
        this.getBlogList();
      },
      showBlogByType(val){
        this.listParams.type = val;
        this.getBlogList();
      },
      showBlogDetails(val){
        console.log("博客id： " + val);
      }
    }
  }
</script>

<style>
.blog-type{
  letter-spacing: 10px;
  color: #fafafa;
  text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;
}
.blog-list{
  width: 900px;
  margin: 0 auto;
  padding: 0px;
  min-height: 700px;
}
.blog-cover{
  height: 190px;
}
.blog-content{
  height: 190px;
  padding: 5px 5px;
}
.blog-content-type{
  text-align: right;
  padding: 0px 5px;
}
.blog-content-title{
  height: 50px;
  line-height: 30px;
  text-align: left;
  margin-top: -20px;
  /*超出显示省略号*/
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /*显示行数*/
  -webkit-box-orient: vertical;
}
.blog-content-createTime{
  font-size: 12px;
  color: #989898;
}
.blog-content-user{
  font-size: 12px;
  color: #989898;
}
.blog-content-viewNum{
  font-size: 12px;
  color: #989898;
}
.blog-content-review{
  text-align: right;
  padding: 0px 5px;
  font-size: 12px;
  color: #989898;
}
.blog-content-brief{
  font-size: 16px;
  color: #989898;
  text-align: left;
  text-indent: 2em; /*缩进2字符。em是相对单位，2em即现在一个字大小的两倍*/
  line-height: 30px;
  padding: 10px 5px;
  /*多行超出显示省略号*/
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /*第4行显示...*/
  overflow: hidden;
}

.pagination-container{
  text-align: right;
  padding: 0px 230px;
}
.transition-box {
    height: 80px;
    width: 500px;
    text-align: center;
    padding: 15px 0;
    background-color: #DEEAF7;
    border-radius: 10px;;
    position: fixed;
    z-index: 1;
  }
.infinite-container{
  width: 100%;
  margin-bottom: 15px;
}
.aside{
  /*border: 1px solid red;
  position: fixed;*/
}

.text {
  font-size: 14px;
}
.blog_item {
  font-size: 12px;
  margin-bottom: 18px;
  /*超出显示省略号*/
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /*显示行数*/
  -webkit-box-orient: vertical;
}
.blog_item :hover {
  text-decoration: underline;
  color: #EE7700;
  cursor:pointer; /*鼠标指针手指样式*/
}

.tags_item{
  float: left;
  margin: 15px 20px;
}
.tags_item :hover{
  cursor:pointer;
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
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 200px;
  padding: 0px;
  margin: 0px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  padding: 10px;
  margin: 0px;
  /*min-height: 800px;*/
}
</style>
