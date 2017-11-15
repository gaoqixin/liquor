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
        		<div style="height: 500px;">

            </div>
          </el-main>
        </el-container>
        <el-aside width="300px">
          <div>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>近日更新</span>
              </div>
              <div v-for="o in 6" :key="o" class="text item">
                {{'博客列表 ' + o }}
              </div>
            </el-card>
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

  export default {
    name: 'blog',
    components: {//注册组件
      Head,
      Foot
    },
    data() {
      return {
        blog: {
          blogTitle: '',
          style: undefined,
          content: '',
          createTime: '',
        }
      };
    },
    methods: {

    }
  }
</script>

<style>
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
