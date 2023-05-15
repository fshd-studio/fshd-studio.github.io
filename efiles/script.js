// 创建 meta 元素
var meta = document.createElement('meta');
meta.setAttribute('name', 'keywords');
meta.setAttribute('content', '关键词1, 关键词2, 关键词3');

// 创建 title 元素
var title = document.createElement('title');
title.innerHTML = '您网页标题';

// 获取 head 元素
var head = document.getElementsByTagName('head')[0];

// 将 meta 和 title 元素添加到头部
head.appendChild(meta);
head.appendChild(title);
