<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <router-link to="/" ><el-menu-item index="1">高高大鹏</el-menu-item></router-link>
      <router-link to="/blog" ><el-menu-item index="2">博客中心</el-menu-item></router-link>
      <el-submenu index="3">
        <template slot="title">关于我</template>
        <el-menu-item index="3-1">翻牌啦 翻牌啦！</el-menu-item>
        <el-menu-item index="3-2">Github</el-menu-item>
      </el-submenu>
      <h3 class="title">{{ title }}</h3>
    </el-menu>
  </div>
</template>

<script>

  export default {
    name: 'head',
    data() {
      return {
        activeIndex: '1', //激活选项（博客中心）
        title: '茫茫人海，还好我们能遇见'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  }
</script>

<style>
  .title {
    color: white;
    text-align: center;
    width: 360px;
    margin: 0px auto;
    margin-top: 15px;
  }
</style>
