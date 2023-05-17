// 自定义JS脚本，处理表单提交事件
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为
  
    // 获取表单输入的关键字
    var keyword = document.getElementsByName('keyword')[0].value.trim();
  
    // 模拟后台请求数据
    var data = [
      { 
        title: '搜索结果标题',
        date: '2023-01-01',
        summary: '搜索结果简介，可根据实际情况自定义长度和'
      },
      {
        title: '搜索结果标题',
        date: '2023-01-02',
        summary: '搜索结果简介，可根据实际情况自定义长度和样'
      },
      {
        title: '搜索结果标题',
        date: '2023-01-03',
        summary: '搜索结果简介，可根据实际情况自定义长度和样式'
      },
      {
        title: '1',
        date: '2023-01-03',
        summary: '搜索结果简介，可根据实际情况自定义长度和样式',
        links: 'https://fastwalkergy.github.io/pc/phantom_shadow/other/search.html',
      }
    ];
  
    // 清空搜索结果列表
    var resultList = document.getElementById('search-result');
    resultList.innerHTML = '';
  
    // 根据关键字匹配数据，生成搜索结果列表
    var regExp = new RegExp(keyword, 'i');
    for (var i = 0; i < data.length; i++) {
      if (regExp.test(data[i].title) || regExp.test(data[i].summary)) {
        var li = document.createElement('li');
        li.innerHTML = '<h2><a href="'+ data[i].links +'" target="_blank">' + data[i].title + '</a></h2><p class="text-muted">' +
                       data[i].date + '</p><p>' + data[i].summary + '</p>';
        resultList.appendChild(li);
      }
    }
  
    // 如果没有搜索结果，则提示用户
    if (resultList.childElementCount === 0) {
      var li = document.createElement('li');
      li.textContent = '没有找到与“' + keyword + '”相关的结果。';
      resultList.appendChild(li);
    }
  });
  