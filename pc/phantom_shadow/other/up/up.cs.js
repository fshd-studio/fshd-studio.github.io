/*
 © 2023 Phantom-Shadow. All Rights Reserved.
*/
var xhr = new XMLHttpRequest();
var fileContent = document.getElementById('file-content');

xhr.onreadystatechange = function() {
if (xhr.readyState === 4 && xhr.status === 200) {
// 将请求得到的文件内容显示在页面中
var content = xhr.responseText.replace(/ /g, ' ').replace(/\n/g, '<br>');
// 如果内容中包含HTML标签，则执行相应的操作
if (/<\w+/.test(content)) {
var tempDiv = document.createElement('div');
tempDiv.innerHTML = content;
fileContent.innerHTML = tempDiv.innerHTML;
} else {
// 如果内容中不包含HTML标签，则直接赋值给fileContent元素
fileContent.innerHTML = content;
}
}
}

// 发送 GET 请求获取 up.txt 文件内容
// 添加随机参数
var randomNum = Math.random();
xhr.open('GET', './up.wb.txt?r=' + randomNum, true);
xhr.setRequestHeader('Cache-Control', 'no-cache');
xhr.setRequestHeader('Pragma', 'no-cache');
xhr.setRequestHeader('Expires', '0');
xhr.send();

//控制台输出
var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
var styleTitle2 = `
font-size:150px;
color: rgb(244,167,89);
`
var styleContent = `
color: rgb(30,152,255);
`
  
var styleinfo = `
color: rgb(255, 102, 0);
`
  
var title1 = 'PSRF'
var title2 = `PSRF                                               
`
var content = `
可以读取任意的文件并显示在html页面上，可以在文件中写入html代码并在页面中显示，只需更改js中引用文件的路径
注意：
1.无法在本地浏览，可以使用iis等浏览
2.虽然我还在尝试使用自建标签来阻止html代码被浏览器渲染并运行，但是没成功，再说吧

下载：
ctrl+u查看文件并找到引用的js文件（无法确定名称，可能更改），找到js代码后，ctrl+s下载或复制
`
  
var info = `
版 本 号：1.4
更新日期：2023-06-01
版权所有 © 2023 Phantom-Shadow. All Rights Reserved.
`
console.log(`%c${title1} %c${title2}
%c${content} %c${info}`, styleTitle1, styleTitle2, styleContent, styleinfo)