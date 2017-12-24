import fetch from '../utils/fetch';

// 获取、搜索博客列表
export function getBlogs(params){
  return fetch({
    url: '/api/blog/filter',
    method: 'post',
    data: params
  });
}

//获取博客类型数量
export function getBlogType(){
  return fetch({
    url: '/api/blog/type',
    method: 'post'
  });
}

//博客详情
export function getBlogDetails(params){
  return fetch({
    url: '/api/blog/details',
    method: 'post',
    data: params
  });
}
