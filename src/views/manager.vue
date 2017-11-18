<template>
  <div>
    <div id="editorElem" style="text-align:left"></div>
   <button v-on:click="getContent">查看内容</button>
  </div>
</template>

<script>
import Editor from 'wangeditor' //引入wangeditor富文本编辑器

export default {
  name: 'manager',
  data() {
    return {
      editorContent: ''
    };
  },
  mounted() {
    var editor = new Editor('#editorElem')
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.create()
  },
  methods: {
    getContent: function () {
        alert(this.editorContent)
        console.log(this.editorContent);
    }
  }
}
</script>
