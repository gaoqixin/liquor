<template>
  <div>
    <el-container>
      <el-header>
        <Head/> <!-- 公共头部组件 -->
      </el-header>
      <el-container>
        <el-container>
          <el-main>
            <div class="details">
              <!-- 详情展示页 -->
              <div><h2>{{ blog.title }}</h2></div>
              <div class="details-c">
                <div>{{ blog.createTime | createTimeFilter }}</div>
                <div>分类：{{ blog.type | typeFilter }}</div>
                <div>阅读：({{ blog.viewNum }})</div>
                <div>评论：({{ blog.reviewNum }})</div>
              </div><br/>
              <div v-html="blog.content" style="text-align: left;"></div> <!-- vue使用v-html显示含html标签数据 -->
              <!-- <div id="blog-content"></div> --> <!-- 含html标签数据绑定的div -->
            </div>
          </el-main>
        </el-container>
        <el-aside width="400px">
          <div class="aside">
            <mu-paper class="list-paper" :zDepth="2">
              <div class="infinite-container">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>{{ Feature }}</span>
                  </div>
                  <div class="publisher">
                    <el-row>
                      <el-col :span="7">
                        <div style="width: 50px; height: 50px;">
                          <img :src="blog.user.head" style="width: 100%; height: 100%; object-fit: cover;"/>
                        </div>
                      </el-col>
                      <el-col :span="17">
                        <div style="font-family: 'Microsoft yahei'; font-size: 14px; line-height: 40px; margin-left: -30px;">
                          <i class="fa fa-user"></i> {{ blog.user.nickname }}
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                  <div class="tags">
                    <el-row>
                      <el-col :span="24">
                        <div style="width: 100%; height: 50px; line-height: 50px;">
                          <el-tag style="margin-left: 10px;" v-for="tag in ((blog.tags).split('|'))" :key="tag" type="primary" size="mini">{{ tag }}</el-tag>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                  <div class="tags">
                    <el-row>
                      <el-col :span="24">
                        <el-collapse v-for="(val, key, index) in blog.feature" v-model="activeName" accordion>
                          <el-collapse-item :title="key" :name="index">
                            <div>{{ val }}</div>
                          </el-collapse-item>
                        </el-collapse>
                      </el-col>
                    </el-row>
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
    getBlogDetails
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
        activeName: '0',
        hotList: null, //热门博客列表
        Feature: '本文特色',
        BlogTitle: '热门文章',

        manageTypeOptions, //博客类型

        blog: {}
      };
    },
    created() {
      this.blogDetails(); //详情
      this.getHotBlog(); //热门博客
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
      blogDetails(){
        let loading = this.$loading({ //自定义加载动画
          lock: true,
          text: '大鹏起飞了...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        let params = {
            blogId: this.$route.params.blogId
        }
        getBlogDetails(params).then(response => {
            this.blog = response.data.blog;
            // document.getElementById("blog-content").innerHTML = this.blog.content; //使用js插入html方式显示后台获取含html标签的数据
            loading.close();
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
      showBlogDetails(val){
        this.$router.push({ path: '/blog/details/'+ val });
        this.blogDetails(); //因为路由没变，强制重新请求接口
      }
    }
  }
</script>

<style>
.details{
  border: 1px solid red;
  width: 900px;
  margin: 0 auto;
  padding: 0px;
  min-height: 700px;
}
.details-c{
  text-align: center;
  border: 1px solid red;
  margin: 0 auto;
}
.details-c div{
  text-align: center;
  float: left;
  border: 1px solid;
  margin-right: 30px;
  font-size: 12px;
  

}
.publisher{
  background-color: #D7F8DF;
}
.publisher:hover{
  background-color: #C8F8D4;
}
.tags{
  background-color: #EDF1A2;
}
.tags:hover{
  background-color: #F0F590;
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
}
</style>
