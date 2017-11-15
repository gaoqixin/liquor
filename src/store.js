const STORAGE_KEY = 'todos-vuejs' //定义localStorage的key名

export default {
  fetch(){
    return JSON.parse(window.localStorage.getItem(
      STORAGE_KEY) || '[]');
  },
  save(items){
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }
}

// ES6的写法
// fetch(){
//   ...
// }
// 等价于
// fetch：function(){
//   ...
// }
