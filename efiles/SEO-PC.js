// 创建 meta 元素
var meta = document.createElement('meta');
meta.setAttribute('name', 'keywords');
meta.setAttribute('content', 'PS工作室, PS, PSK, Phantom-Shadow, Phantom-Shadow-Kit, win工具箱, ');


// 获取 head 元素
var head = document.getElementsByTagName('head')[0];

// 将 meta 和 title 元素添加到头部
head.appendChild(meta);
