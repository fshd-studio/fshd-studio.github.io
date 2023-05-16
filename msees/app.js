// app.js
const messageForm = document.querySelector('#message-form');
const messageList = document.querySelector('#message-list');

messageForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nameInput = messageForm.querySelector('#name');
  const messageInput = messageForm.querySelector('#message');

  const name = nameInput.value;
  const message = messageInput.value;

  if (!name || !message) {
    return alert('请输入姓名和留言！');
  }

  try {
    await db.collection('messages').add({
      name,
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    nameInput.value = '';
    messageInput.value = '';
  } catch (err) {
    console.error(err);
    alert('无法保存留言！');
  }
});

function renderMessages(messages) {
  messageList.innerHTML = ''; // 清空留言列表

  messages.forEach((message) => {
    const li = document.createElement('li');
    li.textContent = `${message.name}: ${message.message}`;
    messageList.appendChild(li);
  });
}

// 实时监听所有留言并在更改时重新渲染留言列表
db.collection('messages')
  .orderBy('timestamp', 'desc') // 按时间戳排序（最新的在上面）
  .onSnapshot((snapshot) => {
    const messages = snapshot.docs.map((doc) => doc.data());
    renderMessages(messages);
  });
