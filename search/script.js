// 在页面加载时自动获取历史记录并放在历史记录框中
window.addEventListener("load", function() {
    var history = loadSearchHistory();
    renderSearchHistory(history);
  });
  
  // 从 cookie 中获取最近10条搜索历史
  function loadSearchHistory() {
    var history = JSON.parse(getCookie("search_history") || "[]");
    return history.slice(-10);
  }
  
  // 将历史记录渲染到页面上
  function renderSearchHistory(history) {
    var list = document.getElementById("search-history");
    list.innerHTML = "";
    history.forEach(function(item) {
      var li = document.createElement("li");
      li.innerText = item;
      li.addEventListener("click", function() {
        document.getElementById("search-box").value = item;
        document.getElementById("search-box").focus(); // 点击后将焦点还给搜索框
        saveSearchKeyword(item); // 选择历史记录后自动触发搜索
      });
      list.appendChild(li);
    });
    // 如果历史记录为空，则隐藏删除按钮，否则显示
    var clearButton = document.getElementById("clear-history-button");
    if (history.length === 0) {
      clearButton.style.display = "none";
    } else {
      clearButton.style.display = "block";
    }
  }
  /*function saveSearchKeyword(keyword) {
  var history = loadSearchHistory();
  history.push(keyword);
  setCookie("search_history", JSON.stringify(history));
  renderSearchHistory(history);

  document.getElementById("search-box").value = keyword;
  document.getElementById("search-box").focus();
  document.getElementById("search-button").click();
}
*/ 
  // 将搜索关键字保存到 cookie 中
  function saveSearchKeyword(keyword) {
    var history = loadSearchHistory();
    history.push(keyword);
    setCookie("search_history", JSON.stringify(history));
    renderSearchHistory(history);
  }
  
  // 删除全部历史记录
  function clearSearchHistory() {
    setCookie("search_history", "[]");
    renderSearchHistory([]);
  }
  
  // 设置 cookie
  function setCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
  }
  
  // 获取 cookie
  function getCookie(name) {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split("=");
      if (parts[0] === name) {
        return parts[1];
      }
    }
    return null;
  }
  
  // 初始化
  var searchBox = document.getElementById("search-box");
  var historyContainer = document.getElementById("search-history-container");
  
  // 当搜索框获取焦点时显示历史记录，否则隐藏
  searchBox.addEventListener("focus", function(event) {
    historyContainer.style.display = "block";
  });
  
  searchBox.addEventListener("blur", function(event) {
    // 延时一段时间再隐藏历史记录，以免用户误触取消搜索框焦点
    setTimeout(function() {
      historyContainer.style.display = "none";
    }, 300);
  });
  
  searchBox.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { // Enter 键
      saveSearchKeyword(searchBox.value);
    }
  });
  
  var searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", function() {
    saveSearchKeyword(searchBox.value);
  });
  
  var clearButton = document.getElementById("clear-history-button");
  clearButton.addEventListener("click", function() {
    clearSearchHistory();
  });
  