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
          <div class="demo-infinite-container">
            <mu-list>
              <template v-for="item in list">
                <mu-list-item :title="item"/>
                <mu-divider/>
              </template>
            </mu-list>
            <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
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
      const list = []
      for (let i = 0; i < 10; i++) {
        list.push('item' + (i + 1))
      }
      return {
        list,
        num: 10,
        loading: false,
        scroller: null,

        blog: {
          blogTitle: '',
          style: undefined,
          content: '',
          createTime: '',
        }
      };
    },
    mounted () {
      this.scroller = this.$el
    },
    methods: {
      loadMore () { //下拉无限加载
        this.loading = true
        setTimeout(() => {
          for (let i = this.num; i < this.num + 10; i++) {
            this.list.push('item' + (i + 1))
          }
          this.num += 10
          this.loading = false
        }, 2000)
      }
    }
  }
</script>

<style>
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
