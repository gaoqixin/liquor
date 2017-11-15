<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> --><!-- 使用组件 -->

    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './test/HelloWorld' //引入组件

export default {
  name: 'app',
  // components: {//注册组件
  //   // HelloWorld
  // }
}
</script>

<style>
#app {
  list-style: none;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  padding: 0;
  margin: 0;
}
</style>
