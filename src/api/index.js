import fetch from '../utils/fetch';

// 获取网站公告
export function getAnnouncements(params){
  return fetch({
    url: '/api/ann/find',
    method: 'post',
    data: params
  });
}

//公告详情
export function showAnnDetail(params){
  return fetch({
    url: '/api/ann/detail',
    method: 'post',
    data: params
  });
}
