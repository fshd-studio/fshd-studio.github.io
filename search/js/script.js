var form = document.getElementById('search-form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // 阻止表单默认提交行为

  // 获取表单输入的关键字
  var keyword = document.getElementsByName('keyword')[0].value.trim();

  // 如果关键字为空或者只有空格，刷新页面
  if (keyword == '' || /^\s*$/.test(keyword)) {
    location.reload();
  }

  // 模拟后台请求数据
  var data = [
    { 
      title: '如何使用PSK？',
      date: '2023-01-01',
      summary: '下载完毕后，双击安装包并按照提示进行安装。'
    },
    {
      title: 'PSK是否收费？',
      date: '2023-01-02',
      summary: '目前免费。'
    },
    {
      title: 'PSK是否支持Mac或Linux系统？',
      date: '2023-01-03',
      summary: 'PSK专门为Windows操作系统设计，不支持其他操作系统。'
    },
    {
      title: '如何下载？',
      date: '2023-01-03',
      summary: '点击标题前往',
      links: 'https://fastwalkergy.github.io/download/',
    },
    {
      title: '如何升级PSK？',
      date: '2023-01-03',
      summary: '每次进入都会检测，有更新时会提示。'
    },
    {
      title: '该程序支持长期使用吗？',
      date: '2023-01-03',
      summary: '不是的，为了不让某些不法分子钻空子，当您无法访问本网站或更改程序可用性时，那说明你无法使用程序'
    },
  ];

  // 清空搜索结果列表
  var resultList = document.getElementById('search-result');
  resultList.innerHTML = '';

  // 根据关键字匹配数据，生成搜索结果列表
  var regExp = new RegExp(keyword, 'i');
  for (var i = 0; i < data.length; i++) {
    if (regExp.test(data[i].title) || regExp.test(data[i].summary)) {
      var li = document.createElement('li');
      if (!data[i].links) {
        li.innerHTML = '<h2>' + data[i].title + '</h2><p class="text-muted">' +
                       data[i].date + '</p><p>' + data[i].summary + '</p>';
      } else {
        li.innerHTML = '<h2><a href="' + data[i].links + '" target="_blank">' + data[i].title + '</a></h2><p class="text-muted">' +
        data[i].date + '</p><p>' + data[i].summary + '</p><p style="color:rgba(20, 105, 31, 0.801)">该搜索结果有链接地址,请点击标题。</p>';
      }
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

form.addEventListener('keyup', function(event) {
  // 如果按下的是回车键，并且关键字为空或者只有空格，刷新页面
  if (event.keyCode == 13 && (/^\s*$/.test(document.getElementsByName('keyword')[0].value.trim()))) {
    location.reload();
  }
});
