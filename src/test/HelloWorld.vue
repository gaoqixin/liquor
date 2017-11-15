<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <input v-model="newItem" @keyup.enter="addNew()" />
    <ul v-for="item in items" style="list-style: none;">
      <!-- v-bind:class绑定样式属性 -->
      <li v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinished(item)"><h3>{{ item.lable }}</h3></li>
    </ul>
  </div>
</template>

<script>
import Store from '../store'
console.log(Store);

export default {
  name: 'HelloWorld',
  // 数据
  data () {
    return {
      title: 'This is a todo list',
      items: Store.fetch() == null ? [] : Store.fetch(),
      newItem: ''
    }
  },
  // 方法
  methods: {
    toggleFinished: function(item){
      item.isFinished = !item.isFinished
    },
    addNew: function(){
      // console.log(this.newItem);
      this.items.push({
        lable: this.newItem,
        isFinished: false
      });
      this.newItem = '';
    }
  },
  // 监听时间的变化
  watch: {
    items: { //监听items变化
      handler: function(items){
        // console.log(items);
        Store.save(items); //存到浏览器localStorage中
      },
      deep: true //深度赋值
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .finished{
    color: red;
    text-decoration: underline;
    list-style: none;
  }
</style>
