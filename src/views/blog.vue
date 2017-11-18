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
        		<div style="height: 60px;">
              <transition name="el-zoom-in-top">
                <!-- 全局搜索、类型筛选 -->
                <div v-show="showSearch" class="transition-box">
                    <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" placeholder="关键字" v-model="listParams.key">
                    </el-input>

                    <el-select clearable style="width: 90px" class="filter-item" v-model="listParams.type" placeholder="类型">
                      <el-option v-for="item in manageTypeOptions" :key="item.value" :label="item.value" :value="item.key">
                      </el-option>
                    </el-select>

                    <el-button class="filter-item" type="primary" style="margin-left: 10px;" v-waves icon="search" @click="handleFilter">搜索</el-button>
                </div>
              </transition>
              <el-row :gutter="20">
                <el-col :span="20"><div><h1 style="color: #989898; font-family: 'PingFang SC';">{{ blogType }}</h1></div></el-col>
                <el-col :span="4"><div style="text-align: right;">
                  <h2><i class="el-icon-search" @click="showSearch = !showSearch"></i></h2>
                </div></el-col>
              </el-row>
            </div>
            <div>
              <div class="blog-list">
                <!-- 博客列表 -->
                <mu-list>
                  <template v-for="item in list">
                    <mu-list-item>
                      <mu-paper class="list-paper" :zDepth="1">
                        <el-row :gutter="20">
                          <el-col :span="8"><div class="blog-cover">
                            <img :src="item.cover" style="width: 100%; height: 100%;"/>
                          </div></el-col>
                          <el-col :span="16"><div class="blog-content">
                            <el-row>
                              <el-col :span="4"><div class="blog-content-type">
                                <el-tag size="small" :type="item.type | tagTypeFilter">{{item.type | typeFilter}}</el-tag>
                              </div></el-col>
                              <el-col :span="20"><div class="blog-content-title">
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
                  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listParams.pageNum" :page-sizes="[10,20,30,50]" :page-size="listParams.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="listParams.totalNum">
                  </el-pagination>
                </div>
              </div>
            </div>
          </el-main>
        </el-container>
        <el-aside width="300px">
          <div class="demo-infinite-container" style="width: 100%;">
            <mu-list>
              <template v-for="item in list">
                <mu-list-item :title="item.title"/>
                <mu-divider/>
              </template>
            </mu-list>
            <!-- <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/> -->
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
    getBlogs
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
        list: null,
        showSearch: false,
        blogType: '最新博文',

        // listLoading: false,
        listParams: {
          pageNum: 1,
          pageSize: 10,
          totalNum: 0,
          key: undefined,
          type: undefined
        },
        manageTypeOptions, //博客类型

        blog: {
          blogTitle: '',
          type: undefined,
          content: '',
          createTime: '',
        }
      };
    },
    created() {
      this.getBlogList();
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
        this.listLoading = true;
        getBlogs(this.listParams).then(response => {
          this.list = response.data.list;
          this.listParams.totalNum = response.data.page.totalNum;
          this.listLoading = false;
        });
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
        const loading = this.$loading({ //自定义loading加载
          lock: true,
          text: '拼命加载中...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        this.getBlogList();
        loading.close(); //结束loading动画
      },
      handleCurrentChange(val) { //翻页
        this.listParams.pageNum = val;
        // const loading = this.$loading({
        //   lock: true,
        //   text: '拼命加载中...',
        //   spinner: 'el-icon-loading',
        //   background: 'rgba(0, 0, 0, 0.7)'
        // });
        // setTimeout(() => {
        //
        // }, 2000);
        this.getBlogList();
        // loading.close();
      },
    }
  }
</script>

<style>
.blog-list{
  width: 90%;
  min-height: 500px;
  margin: 0 auto;
  padding: 0px;
}
.blog-cover{
  width: 280px;
  height: 190px;
}
.blog-content{
  width: 100%;
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
  font-size: 14px;
  color: #989898;
  text-align: left;
  text-indent: 2em; /*缩进2字符。em是相对单位，2em即现在一个字大小的两倍*/
  line-height: 30px;
  padding: 15px 5px;
  /*多行超出显示省略号*/
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /*显示4行*/
  overflow: hidden;
}

.pagination-container{
  text-align: right;
  padding: 0px 5%;
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
.demo-infinite-container{
  width: 256px;
  height: 300px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
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
  color: #333;
  text-align: center;
  height: auto;
  padding: 10px;
  margin: 0px;
}
</style>
