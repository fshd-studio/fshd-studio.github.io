const messagesUrl = 'messages.json'; // 存储留言的 JSON 文件路径

// 初始化页面时，加载所有留言
(async function loadMessages() {
  const response = await fetch(messagesUrl);
  const messages = await response.json();
  const messagesDiv = document.getElementById('messages');
  messages.forEach(message => {
    const messageDiv = createMessageElement(message);
    messagesDiv.appendChild(messageDiv);
  });
})();

// 提交表单时，添加新留言
async function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const message = {
    name: formData.get('name'),
    content: formData.get('content'),
    time: new Date().toISOString()
  };
  const messagesDiv = document.getElementById('messages');
  const response = await fetch(messagesUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  });
  if (response.ok) {
    const newMessage = await response.json();
    const messageDiv = createMessageElement(newMessage);
    messagesDiv.appendChild(messageDiv);
    form.reset();
  }
}

// 创建单个留言的 DOM 元素
function createMessageElement(message) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message';
  const header = document.createElement('h3');
  header.textContent = message.name + ' 说：';
  messageDiv.appendChild(header);
  const content = document.createElement('p');
  content.textContent = message.content;
  messageDiv.appendChild(content);
  const time = document.createElement('p');
  time.textContent = new Date(message.time).toLocaleString();
  messageDiv.appendChild(time);
  return messageDiv;
}
