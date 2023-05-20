window.onerror = function (message, source, lineno, colno, error) {
    // 将当前URL保存到cookie中
    var url = window.location.href;
    document.cookie = "error_url=" + encodeURIComponent(url);
  
    // 跳转到错误报告页面
    window.location.href = "/error/error.html";
  }
  