var xhr = new XMLHttpRequest();
var fileContent = document.getElementById('file-content');

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 将请求得到的文件内容显示在页面中
    fileContent.innerHTML = xhr.responseText.replace(/ /g, '&nbsp;').replace(/\n/g, '<br>');
  }
}

// 发送 GET 请求获取 up.txt 文件内容
xhr.open('GET', 'https://fshd-studio.github.io/other/txt/up.wb.txt', true);
xhr.send();
